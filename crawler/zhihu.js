const axios = require('axios');
const { mobileConfig: axiosConfig } = require('../common/utils');
const cheerio = require('cheerio');

async function getZhihuInfo(username) {
  let result = {
    name: 'username',
    description: '',
    follower_count: 0,
    answer_count: 0,
    voteup_count: 0,
    thanked_count: 0,
    question_count: 0,
    articles_count: 0,
    favorited_count: 0,
    liked_count: 0
  };
  try {
    let res = await axios.get(
      `https://www.zhihu.com/api/v4/members/${username}`,
      axiosConfig
    );
    result.name = res.data.name;
    result.description = res.data.headline;
    res = await axios.get(
      `https://www.zhihu.com/people/${username}`,
      axiosConfig
    );
    let $ = cheerio.load(res.data);
    let list = $('.Profile-badgeText');
    let temp = list[2].children[0].data;
    let tempList = temp.split(' ');
    result.voteup_count = tempList[0];
    result.liked_count = tempList[3];
    result.favorited_count = tempList[6];
    result.follower_count = $('.Profile-follows')[0].children[0].children[0].data;
    result.follower_count = result.follower_count.trim();
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getZhihuInfo;
