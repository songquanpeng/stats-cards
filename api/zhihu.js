const getZhihuInfo = require('../crawer/zhihu');
const renderZhihuCard = require('../render/zhihu');
const { cache, cacheTime } = require('../common/cache');

module.exports = async (req, res) => {
  const { username, theme } = req.query;
  let key = 'z' + username;
  let data = cache.get(key);
  if (!data) {
    data = await getZhihuInfo(username);
    cache.set(key, data);
  }
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderZhihuCard(data));
};
