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
    res = await axios.get(
      `https://api.bilibili.com/x/space/upstat?mid=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
          'Cookie': `SESSDATA=${process.env['BILIBILI_SESSDATA']}`
        },
      }
    )
    data = res.data.data;
    result.views = data.archive.view;
    result.likes = data.likes;
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getBilibiliInfo;
