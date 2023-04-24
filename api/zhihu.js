const getZhihuInfo = require('../crawler/zhihu');
const renderZhihuCard = require('../render/zhihu');
const { cache, cacheTime } = require('../common/cache');
const { processData } = require('../common/utils');

module.exports = async (req, res) => {
  let { username, theme, lang, id, raw } = req.query;
  if (username === undefined) {
    username = id;
  }
  let key = 'z' + username;
  let data = cache.get(key);
  if (!data) {
    data = await getZhihuInfo(username);
    cache.set(key, data);
  }
  if (raw) {
    return res.json(data);
  }
  data.theme = theme;
  processData(data);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderZhihuCard(data, lang));
};
