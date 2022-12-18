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
    views: NaN
  };
  try {
    let endPoints = [
      {
        url: `https://m.bilibili.com/space/${id}`,
        config: axiosConfig
      },
      {
        url: `https://api.bilibili.com/x/relation/stat?vmid=${id}`,
        config: axiosConfig
      },
      {
        url: `https://api.bilibili.com/x/space/upstat?mid=${id}`,
        config: {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
            'Cookie': `SESSDATA=${process.env['BILIBILI_SESSDATA']}`
          }
        }
      }
    ];
    let [res1, res2, res3] = await Promise.all(endPoints.map(endPoint => axios.get(endPoint.url, endPoint.config)));
    let $ = cheerio.load(res1.data);
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
    let data = res2.data.data;
    result.fans = data.follower;
    result.following = data.following;
    data = res3.data.data;
    if (data?.archive?.view) {
      result.views = data?.archive?.view;
    }
    if (data.likes) {
      result.likes = data.likes;
    }
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getBilibiliInfo;
