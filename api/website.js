const { cache } = require('../common/cache');
const axios = require('axios');

module.exports = async (req, res) => {
  const { url } = req.query;
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch {
    let message = 'Invalid URL';
    return res.redirect(`https://img.shields.io/badge/${url}-${message}-red`);
  }
  let key = 'w' + urlObj.origin;
  let time = cache.get(key);
  if (!time) {
    try {
      const start = Date.now();
      await axios.get(urlObj.origin, {
        timeout: 3000,
      });
      const end = Date.now();
      time = end - start;
    } catch {
      time = -1;
    }
    cache.set(key, time);
  }
  let color;
  let message = `${time}ms`;
  if (time === -1) {
    color = 'red';
    message = 'unreachable';
  } else if (time < 100) {
    color = 'brightgreen';
  } else if (time < 500) {
    color = 'yellowgreen';
  } else if (time < 1000) {
    color = 'yellow';
  } else if (time < 2000) {
    color = 'orange';
  } else {
    color = 'red';
  }
  return res.redirect(
    `https://img.shields.io/badge/${urlObj.origin}-${message}-${color}`
  );
};
