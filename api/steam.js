const getSteamInfo = require('../crawler/steam');
const renderSteamCard = require('../render/steam');
const { cache, cacheTime } = require('../common/cache');
const { processData } = require('../common/utils');

module.exports = async (req, res) => {
  let { theme, lang, raw } = req.query;
  let key = 's' + process.env['STEAM_ID'];;
  let data = cache.get(key);
  if (!data) {
    data = await getSteamInfo();
    cache.set(key, data);
  }
  if (raw) {
    return res.json(data);
  }
  data.theme = theme;
  processData(data);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderSteamCard(data, lang));
};
