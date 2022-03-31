const getLeetCodeInfo = require('../crawer/leetcode');
const getLeetCodeCnInfo = require('../crawer/leetcode-cn');
const renderLeetCodeCard = require('../render/leetcode');

module.exports = async (req, res) => {
  const { username, cn, theme, cn_username } = req.query;
  let data = null;
  if (!cn_username) {
    if (cn) {
      data = await getLeetCodeCnInfo(username);
    } else {
      data = await getLeetCodeInfo(username);
    }
  } else {
    data = await getLeetCodeInfo(username);
    let cn_data = await getLeetCodeCnInfo(cn_username);
    data.total_solved += cn_data.total_solved;
    data.easy_solved += cn_data.easy_solved;
    data.medium_solved += cn_data.medium_solved;
    data.hard_solved += cn_data.hard_solved;
  }

  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${6000}`);
  return res.send(renderLeetCodeCard(data));
};
