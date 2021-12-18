const getGitHubInfo = require('../crawer/github');
const renderGitHubCard = require('../render/github');

module.exports = async (req, res) => {
  const { username, theme } = req.query;
  const data = await getGitHubInfo(username);
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${7200}`);
  return res.send(renderGitHubCard(data));
};
