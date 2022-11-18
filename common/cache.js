// https://github.com/isaacs/node-lru-cache
const LRU = require('lru-cache');

const cacheTime = process.env.CACHE_TIME || 100 * 60;  // 100 min

const options = {
  max: 1000,
  // how long to live in ms
  ttl: cacheTime * 1000,
  // return stale items before removing from cache?
  allowStale: true,
  updateAgeOnGet: false,
  updateAgeOnHas: false
};

const cache = new LRU(options);

module.exports = {
  cache,
  cacheTime
};