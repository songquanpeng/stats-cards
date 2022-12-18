const getLeetCodeInfo = require('../crawler/leetcode');
const getLeetCodeCnInfo = require('../crawler/leetcode-cn');
const renderLeetCodeCard = require('../render/leetcode');
const { cache, cacheTime } = require('../common/cache');

module.exports = async (req, res) => {
  const { username, cn, theme, cn_username, lang } = req.query;
  let data;
  if (!cn_username) {
    if (cn) {
      let key = 'lcn' + username;
      data = cache.get(key);
      if (!data) {
        data = await getLeetCodeCnInfo(username);
        cache.set(key, data);
      }
    } else {
      let key = 'l' + username;
      data = cache.get(key);
      if (!data) {
        data = await getLeetCodeInfo(username);
        cache.set(key, data);
      }
    }
  } else {
    let key = 'l' + username;
    data = cache.get(key);
    if (!data) {
      data = await getLeetCodeInfo(username);
      cache.set(key, data);
    }
    let cn_key = 'lcn' + cn_username;
    let cn_data = cache.get(cn_key);
    if (!cn_data) {
      cn_data = await getLeetCodeCnInfo(cn_username);
      cache.set(cn_key, cn_data);
    }
    data.total_solved += cn_data.total_solved;
    data.easy_solved += cn_data.easy_solved;
    data.medium_solved += cn_data.medium_solved;
    data.hard_solved += cn_data.hard_solved;
  }

  data.theme = theme;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderLeetCodeCard(data, lang));
};
