const { cache } = require('../common/cache');
const axios = require('axios');

module.exports = async (req, res) => {
  let { url, style, logo, raw } = req.query;
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch {
    let message = 'Invalid URL';
    url = url.replaceAll('-', '--');
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
  if (raw) {
    return res.json({ time });
  }
  let color;
  let message = `${time}ms`;
  if (time === -1) {
    color = 'red';
    message = 'unreachable';
  } else if (time < 100) {
    color = 'brightgreen';
  } else if (time < 500) {
    color = 'green';
  } else if (time < 1000) {
    color = 'yellow';
  } else if (time < 2000) {
    color = 'orange';
  } else {
    color = 'red';
  }
  let label = urlObj.origin.replaceAll('-', '--');
  return res.redirect(
    `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}&logo=${logo}`
  );
};
