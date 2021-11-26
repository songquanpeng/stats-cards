const getLeetCodeInfo = require('../crawer/leetcode');
const getLeetCodeCnInfo = require('../crawer/leetcode-cn');
const renderLeetCodeCard = require('../render/leetcode');

module.exports = async (req, res) => {
  const { username, cn, theme } = req.query;
  let data = null;
  if (cn) {
    data = await getLeetCodeCnInfo(username);
  } else {
    data = await getLeetCodeInfo(username);
  }
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderLeetCodeCard(data));
};
