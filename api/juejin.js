const getJuejinInfo = require('../crawer/juejin');
const renderJuejinCard = require('../render/juejin');

module.exports = async (req, res) => {
  const { id } = req.query;
  const data = await getJuejinInfo(id);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderJuejinCard(data));
};
