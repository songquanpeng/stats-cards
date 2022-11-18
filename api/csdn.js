const getCSDNInfo = require('../crawer/csdn');
const renderCSDNCard = require('../render/csdn');
const { cacheTime, cache } = require('../common/cache');

module.exports = async (req, res) => {
  const { id, theme } = req.query;
  let key = 'c' + id;
  let data = cache.get(key);
  if (!data) {
    data = await getCSDNInfo(id);
    cache.set(key, data);
  }
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderCSDNCard(data));
};
