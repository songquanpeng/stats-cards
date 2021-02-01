const getZhihuInfo = require('../crawer/zhihu');
const renderZhihuCard = require('../render/zhihu');

module.exports = async (req, res) => {
  const { username } = req.query;
  const data = await getZhihuInfo(username);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderZhihuCard(data));
};
