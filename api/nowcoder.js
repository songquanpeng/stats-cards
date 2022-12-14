const getNowCoderInfo = require('../crawer/nowcoder');
const renderNowCoderCard = require('../render/nowcoder');
const { cache, cacheTime } = require('../common/cache');
const { processData } = require('../common/utils');

module.exports = async (req, res) => {
  const { id, theme, lang } = req.query;
  let key = 'n' + id;
  let data = cache.get(key);
  if (!data) {
    data = await getNowCoderInfo(id);
    cache.set(key, data);
  }
  data.theme = theme;
  processData(data);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderNowCoderCard(data, lang));
};
