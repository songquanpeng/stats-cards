const getGitHubInfo = require('../crawer/github');
const renderGitHubCard = require('../render/github');
const { cacheTime, cache } = require('../common/cache');

module.exports = async (req, res) => {
  const { username, theme } = req.query;
  let key = 'g' + username;
  let data = cache.get(key);
  if (!data) {
    data = await getGitHubInfo(username);
    cache.set(key, data);
  }
  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderGitHubCard(data));
};
