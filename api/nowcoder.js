const getNowCoderInfo = require('../crawler/nowcoder');
const renderNowCoderCard = require('../render/nowcoder');
const { cache, cacheTime } = require('../common/cache');
const { processData } = require('../common/utils');

module.exports = async (req, res) => {
  const { id, theme, lang, raw } = req.query;
  let key = 'n' + id;
  let data = cache.get(key);
  if (!data) {
    data = await getNowCoderInfo(id);
    cache.set(key, data);
  }
  if (raw) {
    return res.json(data);
  }
  data.theme = theme;
  processData(data);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderNowCoderCard(data, lang));
};
