const axios = require('axios');
const cheerio = require('cheerio');
const axiosConfig = require('../common/utils').mobileConfig;

async function getBilibiliInfo(id) {
  let result = {
    name: 'username',
    description: '',
    following: 0,
    fans: 0,
    likes: NaN,
    level: 0,
    views: NaN,
  };
  try {
    let res = await axios.get(
      `https://m.bilibili.com/space/${id}`,
      axiosConfig
    );
    let $ = cheerio.load(res.data);
    $('.base .name').each((i, e) => {
      result.name = $(e).text();
    });
    $('.base .level i').each((i, e) => {
      let classStr = $(e).attr('class');
      let level = classStr.substr(classStr.length - 1);
      result.level = parseInt(level);
    });
    $('.desc .content').each((i, e) => {
      result.description = $(e).text();
    });
    res = await axios.get(
      `https://api.bilibili.com/x/relation/stat?vmid=${id}`,
      axiosConfig
    );
    let data = res.data.data;
    result.fans = data.follower;
    result.following = data.following;
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getBilibiliInfo;
