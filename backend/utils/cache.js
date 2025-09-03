const cache = new Map();
console.log("Cache module loaded");

function set (key, value, ttl) {
    const expires = Date.now() + ttl * 1000;
    cache.set(key, { value, expires });
}

function get (key) {
    const cached = cache.get(key);
    if (!cached) {
        return null;
    }
    if (Date.now() > cached.expires) {
        cache.delete(key);
        return null;
    }
    return cached.value;
}

module.exports = { set, get };