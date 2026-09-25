'use strict';

/**
 * A client for the Tenevo API, for Node.js 18 or later, with no dependencies.
 *
 * Authenticates at /auth/ whenever it has no live signature, signs every request, and authenticates again when a
 * signature expires.
 *
 *     const { TenevoApiClient } = require('./tenevo-api-client');
 *
 *     const client = new TenevoApiClient({ clientCode: 'yourcode', username: '...', publicKey: '...', privateKey: '...', secret: '...' });
 *     const orders = await client.get('orders', { fields: 'id,reference,status', limit: 10 });
 *
 * Every call resolves to the decoded response. A request the API refuses is resolved as it is - check
 * `response.request.error` - while a request that could not be made at all rejects with a TenevoApiError.
 *
 * Send integers above 2^53, and whole numbers of 1e14 or more written with a decimal point, as strings - a
 * JavaScript number cannot hold them exactly.
 */

const crypto = require('crypto');

const RESERVED_KEYS = ['route', 'fingerprint', 'signature', 'timestamp', 'sid'];

// a signature lasts at least 60 seconds from its last use - a new one is fetched a little before then
const SIGNATURE_REUSE_MS = 50 * 1000;

const PHP_TRIM = /^[ \t\n\r\0\x0B]+|[ \t\n\r\0\x0B]+$/g;
const PHP_WHITESPACE = /[ \t\n\x0B\f\r]+/g;
const PHP_NUMERIC = /^[ \t\n\r\x0B\f]*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[ \t\n\r\x0B\f]*$/;
const PHP_INTEGER_KEY = /^(0|-?[1-9][0-9]{0,14})$/;
const HTML_TAG = /<!--[\s\S]*?(-->|$)|<(?![\s<])[^>]*(>|$)/g;


class TenevoApiError extends Error {
    constructor(message, response = null) {
        super(message);
        this.name = 'TenevoApiError';
        this.response = response;
    }
}


// A float as PHP's (string) cast gives it - 14 significant digits, exponent outside 1e-5 to 1e14
function phpFloat(value) {
    if (!isFinite(value)) {
        return isNaN(value) ? 'NAN' : (value > 0 ? 'INF' : '-INF');
    }
    if (value === 0) {
        return Object.is(value, -0) ? '-0' : '0';
    }

    const parts = value.toExponential(13).split('e');
    const exponent = parseInt(parts[1], 10);
    const sign = parts[0].startsWith('-') ? '-' : '';
    const digits = parts[0].replace('-', '').replace('.', '');

    if (exponent < -4 || exponent >= 14) {
        const fraction = digits.slice(1).replace(/0+$/, '') || '0';

        return sign + digits[0] + '.' + fraction + 'E' + (exponent < 0 ? '-' : '+') + Math.abs(exponent);
    }

    let whole = '0';
    let fraction = '0'.repeat(Math.max(0, -exponent - 1)) + digits;
    if (exponent >= 0) {
        whole = digits.slice(0, exponent + 1);
        fraction = digits.slice(exponent + 1);
    }
    fraction = fraction.replace(/0+$/, '');

    return sign + whole + (fraction !== '' ? '.' + fraction : '');
}


// A scalar as PHP's (string) cast gives it
function phpString(value) {
    if (value === null || value === undefined || value === false) {
        return '';
    }
    if (value === true) {
        return '1';
    }
    if (typeof value === 'number') {
        return (Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER) ? String(value) : phpFloat(value);
    }

    return String(value);
}


// Key names that look like integers become integers in a PHP array
function phpKey(key) {
    return (typeof key === 'string' && PHP_INTEGER_KEY.test(key)) ? Number(key) : key;
}


function utf8Length(text) {
    return Buffer.byteLength(text, 'utf8');
}


// How PHP's ksort() orders two keys of the same level
function compareKeys(first, second) {
    if (typeof first === 'number' && typeof second === 'number') {
        return first - second;
    }
    if (typeof first === 'number' || typeof second === 'number') {
        throw new TenevoApiError('Tenevo API: an object mixes numbered and named keys - send lists as arrays');
    }
    if (PHP_NUMERIC.test(first) && PHP_NUMERIC.test(second)) {
        return parseFloat(first) - parseFloat(second);
    }

    return Buffer.compare(Buffer.from(first, 'utf8'), Buffer.from(second, 'utf8'));
}


// The request as the server holds it once cleaned: every value a string with tags stripped and trimmed,
// held as ordered [key, value] pairs, with numbered keys renumbered 0, 1, 2... in ascending order
function normalise(value) {
    let entries = null;
    if (value instanceof Map) {
        entries = Array.from(value.entries());
    } else if (Array.isArray(value)) {
        entries = value.map((item, index) => [index, item]);
    } else if (value !== null && typeof value === 'object') {
        entries = Object.entries(value);
    }

    if (entries === null) {
        return phpString(value).replace(HTML_TAG, '').replace(PHP_TRIM, '');
    }

    entries = entries.map(([key, item]) => [phpKey(key), normalise(item)]);

    let nextNumber = 0;
    entries.filter(([key]) => typeof key === 'number').sort((a, b) => a[0] - b[0]).forEach((entry) => {
        entry[0] = nextNumber++;
    });

    return entries;
}


// Drops long values, collapses whitespace and sorts every level by key - what the fingerprint is built over
function fingerprintData(entries) {
    const result = [];
    entries.slice().sort((a, b) => compareKeys(a[0], b[0])).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            result.push([key, fingerprintData(value)]);
        } else if (utf8Length(value) <= 1000) {
            result.push([key, value.replace(PHP_WHITESPACE, ' ').replace(PHP_TRIM, '')]);
        }
    });

    return result;
}


// PHP's serialize(), for the arrays of strings the request becomes
function phpSerialize(value) {
    if (Array.isArray(value)) {
        return 'a:' + value.length + ':{' + value.map(([key, item]) => phpSerialize(key) + phpSerialize(item)).join('') + '}';
    }
    if (typeof value === 'number') {
        return 'i:' + value + ';';
    }

    return 's:' + utf8Length(value) + ':"' + value + '";';
}


// PHP's parse_str() over decoded pairs - flat keys, plus key[] and key[name] arrays
function parseQuery(pairs) {
    const result = new Map();

    pairs.forEach(([name, value]) => {
        const match = name.match(/^([^[]+)((\[[^\]]*\])*)$/);
        let base = match ? match[1] : name;
        const path = match ? Array.from(match[2].matchAll(/\[([^\]]*)\]/g), (part) => part[1]) : [];

        base = base.replace(/^ +/, '').replace(/[ .]/g, '_');

        let target = result;
        let key = base;
        path.forEach((part) => {
            if (!(target.get(key) instanceof Map)) {
                target.set(key, new Map());
            }
            target = target.get(key);

            if (part === '') {
                const numbers = Array.from(target.keys()).map(phpKey).filter((item) => typeof item === 'number');
                key = String(numbers.length > 0 ? Math.max(...numbers) + 1 : 0);
            } else {
                key = part;
            }
        });
        target.set(key, value);
    });

    return result;
}


// Query parameters as `key[name]=value` pairs, the way PHP's http_build_query() writes nested data
function queryPairs(data, prefix = null) {
    const pairs = [];
    Object.entries(data).forEach(([key, value]) => {
        const name = (prefix === null) ? key : prefix + '[' + key + ']';
        if (value !== null && typeof value === 'object') {
            pairs.push(...queryPairs(value, name));
        } else {
            pairs.push([name, phpString(value)]);
        }
    });

    return pairs;
}


function fingerprint(privateKey, secret, timestamp, route, data, serverSignature) {
    const cleaned = normalise(data).filter(([key]) => !RESERVED_KEYS.includes(key));
    const message = privateKey + timestamp + secret + route + phpSerialize(fingerprintData(cleaned)) + serverSignature;

    // characters outside Latin-1 become `?`, as the server's conversion makes them
    const latin1 = Array.from(message, (character) => (character.codePointAt(0) < 256 ? character : '?')).join('');

    return crypto.createHmac('sha256', Buffer.from(privateKey, 'utf8')).update(Buffer.from(latin1, 'latin1')).digest('hex');
}


function randomSignature() {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return Array.from({ length: 64 }, () => characters[crypto.randomInt(characters.length)]).join('');
}


class TenevoApiClient {
    /**
     * @param {object} options clientCode, username, publicKey, privateKey and secret, plus optionally baseUrl
     *                         (defaults to https://api.{clientCode}.tenevo.co.uk), version (1.3) and timeout in ms (60000)
     */
    constructor({ clientCode, username, publicKey, privateKey, secret, baseUrl = null, version = '1.3', timeout = 60000 }) {
        Object.entries({ clientCode, username, publicKey, privateKey, secret }).forEach(([name, value]) => {
            if (typeof value !== 'string' || value.trim() === '') {
                throw new TenevoApiError('Tenevo API: ' + name + ' must be given');
            }
        });

        this.baseUrl = (baseUrl || 'https://api.' + clientCode + '.tenevo.co.uk').replace(/\/+$/, '');
        this.version = String(version);
        this.timeout = timeout;
        this.credentials = { username, publicKey, privateKey, secret };

        this.clientSignature = null;
        this.serverSignature = null;
        this.signatureUsedAt = 0;
        this.clockOffset = 0;

        this.lastStatusCode = 0;
        this.lastHeaders = {};
    }

    get(path, data = {}) {
        return this.request('GET', path, data);
    }

    post(path, data = {}) {
        return this.request('POST', path, data);
    }

    put(path, data = {}) {
        return this.request('PUT', path, data);
    }

    delete(path, data = {}) {
        return this.request('DELETE', path, data);
    }

    /**
     * @param {string} path relative to the version, such as `orders` or `orders/123`
     * @param {object} data the query parameters of a GET or DELETE, or the fields of a POST or PUT
     */
    async request(method, path, data = {}) {
        method = method.toUpperCase();
        if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
            throw new TenevoApiError('Tenevo API: unsupported method ' + method);
        }

        const route = '/v' + this.version + '/' + path.replace(/^\/+|\/+$/g, '');

        if (this.serverSignature === null || (Date.now() - this.signatureUsedAt) >= SIGNATURE_REUSE_MS) {
            await this.authenticate();
        }

        let response = await this.send(method, route, data);

        // a signature the server no longer knows is renewed once, and the request made again
        if (response.request && response.request.error && response.request.error.code === 'signature_invalid') {
            await this.authenticate();
            response = await this.send(method, route, data);
        }

        return response;
    }

    async authenticate() {
        this.clientSignature = randomSignature();
        this.serverSignature = null;

        const route = '/v' + this.version + '/auth';
        const timestamp = this.timestamp();
        const { privateKey, secret } = this.credentials;

        const response = await this.http('POST', route + '/', JSON.stringify({
            signature: this.clientSignature,
            timestamp: timestamp,
            fingerprint: fingerprint(privateKey, secret, timestamp, route, {}, ''),
        }));

        if (!response.signature) {
            const error = (response.request && response.request.error) || {};
            throw new TenevoApiError('Tenevo API: authentication failed - ' + ((error.code || 'HTTP ' + this.lastStatusCode) + ' ' + (error.message || '')).trim(), response);
        }

        this.serverSignature = String(response.signature);
        this.signatureUsedAt = Date.now();

        // the server's time reads 2026-09-25UTC10:15:00 - the zone name sits where the T would
        const match = String((response.request && response.request.timestamp) || '').match(/^(\d{4}-\d{2}-\d{2})\D+(\d{2}:\d{2}:\d{2})/);
        if (match) {
            this.clockOffset = Date.parse(match[1] + 'T' + match[2] + 'Z') - Date.now();
        }
    }

    async send(method, route, data) {
        const { privateKey, secret } = this.credentials;
        const timestamp = this.timestamp();

        let response = null;

        // the fingerprint is taken over the data exactly as the server will read it back
        if (method === 'GET' || method === 'DELETE') {
            const pairs = queryPairs(data).filter(([name]) => !RESERVED_KEYS.includes(name.replace(/\[.*$/, '')));
            const thisFingerprint = fingerprint(privateKey, secret, timestamp, route, parseQuery(pairs), this.serverSignature);

            const query = pairs.concat([['signature', this.clientSignature], ['timestamp', timestamp], ['fingerprint', thisFingerprint]])
                .map(([name, value]) => encodeURIComponent(name) + '=' + encodeURIComponent(value)).join('&');

            response = await this.http(method, route + '/?' + query, null);
        } else {
            const sent = JSON.parse(JSON.stringify(data));
            RESERVED_KEYS.forEach((key) => {
                delete sent[key];
            });

            const thisFingerprint = fingerprint(privateKey, secret, timestamp, route, sent, this.serverSignature);
            response = await this.http(method, route + '/', JSON.stringify(Object.assign(sent, { signature: this.clientSignature, timestamp: timestamp, fingerprint: thisFingerprint })));
        }

        if (this.lastStatusCode !== 401) {
            this.signatureUsedAt = Date.now();
        }

        return response;
    }

    async http(method, url, body) {
        const { username, publicKey } = this.credentials;

        let result = null;
        try {
            result = await fetch(this.baseUrl + url, {
                method: method,
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(username + ':' + publicKey, 'utf8').toString('base64'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: body,
                redirect: 'manual',
                signal: AbortSignal.timeout(this.timeout),
            });
        } catch (error) {
            throw new TenevoApiError('Tenevo API: could not reach ' + this.baseUrl + ' - ' + error.message);
        }

        this.lastStatusCode = result.status;
        this.lastHeaders = Object.fromEntries(result.headers.entries());

        const text = await result.text();
        try {
            return JSON.parse(text);
        } catch (error) {
            throw new TenevoApiError('Tenevo API: HTTP ' + result.status + ' was not a JSON response - ' + text.replace(/<[^>]*>/g, ' ').trim().slice(0, 200));
        }
    }

    timestamp() {
        return new Date(Date.now() + this.clockOffset).toISOString().replace(/\.\d{3}Z$/, 'Z');
    }
}


module.exports = { TenevoApiClient, TenevoApiError, fingerprint, parseQuery };
