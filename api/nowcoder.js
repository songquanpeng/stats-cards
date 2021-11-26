const getNowCoderInfo = require('../crawer/nowcoder');
const renderNowCoderCard = require('../render/nowcoder');

module.exports = async (req, res) => {
  const { id, theme } = req.query;
  const data = await getNowCoderInfo(id);
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderNowCoderCard(data));
};
