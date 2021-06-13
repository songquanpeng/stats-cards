const getNowCoderInfo = require('../crawer/nowcoder');
const renderNowCoderCard = require('../render/nowcoder');

module.exports = async (req, res) => {
  const { id } = req.query;
  const data = await getNowCoderInfo(id);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderNowCoderCard(data));
};
