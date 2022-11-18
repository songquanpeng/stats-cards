const getJuejinInfo = require('../crawer/juejin');
const renderJuejinCard = require('../render/juejin');
const { cacheTime, cache } = require('../common/cache');

module.exports = async (req, res) => {
  const { id, theme } = req.query;
  let key = 'j' + id;
  let data = cache.get(key);
  if (!data) {
    data = await getJuejinInfo(id);
    cache.set(key, data);
  }
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderJuejinCard(data));
};
