const getBilibiliInfo = require('../crawer/bilibili');
const renderBilibiliCard = require('../render/bilibili');

module.exports = async (req, res) => {
  const { id } = req.query;
  const data = await getBilibiliInfo(id);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderBilibiliCard(data));
};
