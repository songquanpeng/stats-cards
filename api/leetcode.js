const getLeetCodeInfo = require('../crawer/leetcode');
const renderLeetCodeCard = require('../render/leetcode');

module.exports = async (req, res) => {
  const { username } = req.query;
  const data = await getLeetCodeInfo(username);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderLeetCodeCard(data));
};
