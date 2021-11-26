const getCSDNInfo = require('../crawer/csdn');
const renderCSDNCard = require('../render/csdn');

module.exports = async (req, res) => {
  const { id, theme } = req.query;
  const data = await getCSDNInfo(id);
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderCSDNCard(data));
};
