import NodeCache from 'node-cache';

// Create cache instance
// stdTTL: 300 seconds (5 minutes) for live games
// checkperiod: 60 seconds - check for expired keys every minute
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

/**
 * Get data from cache
 * @param {string} key - Cache key
 * @returns {any} Cached data or undefined
 */
export const getCache = (key) => {
    try {
        return cache.get(key);
    } catch (error) {
        console.error('Cache get error:', error);
        return undefined;
    }
};

/**
 * Set data in cache
 * @param {string} key - Cache key
 * @param {any} value - Data to cache
 * @param {number} ttl - Time to live in seconds (optional)
 * @returns {boolean} Success status
 */
export const setCache = (key, value, ttl) => {
    try {
        if (ttl) {
            return cache.set(key, value, ttl);
        }
        return cache.set(key, value);
    } catch (error) {
        console.error('Cache set error:', error);
        return false;
    }
};

/**
 * Delete data from cache
 * @param {string} key - Cache key
 * @returns {number} Number of deleted entries
 */
export const deleteCache = (key) => {
    try {
        return cache.del(key);
    } catch (error) {
        console.error('Cache delete error:', error);
        return 0;
    }
};

/**
 * Clear all cache
 */
export const clearCache = () => {
    try {
        cache.flushAll();
        console.log('Cache cleared');
    } catch (error) {
        console.error('Cache clear error:', error);
    }
};

/**
 * Get cache statistics
 * @returns {object} Cache stats
 */
export const getCacheStats = () => {
    return cache.getStats();
};

export default {
    getCache,
    setCache,
    deleteCache,
    clearCache,
    getCacheStats,
};
