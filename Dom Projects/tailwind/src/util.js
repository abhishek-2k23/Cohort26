export function createLRUCache(limit = 1000) {
  const cache = new Map();

  return {
    get(key) {
      if (!cache.has(key)) return null;

      const value = cache.get(key);

      // move to end (most recently used)
      cache.delete(key);
      cache.set(key, value);

      return value;
    },

    set(key, value) {
      if (cache.has(key)) {
        cache.delete(key);
      }

      cache.set(key, value);

      // remove least recently used
      if (cache.size > limit) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
    },
  };
}