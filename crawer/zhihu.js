const axios = require('axios');

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
  };
  try {
    let res = await axios.get(
      `https://www.zhihu.com/api/v4/members/${username}`
    );
    let id = res.data.id;
    res = await axios.get(`https://api.zhihu.com/people/${id}`);
    let data = res.data;
    result.name = data.name;
    result.description = data.description;
    result.follower_count = data.follower_count;
    result.answer_count = data.answer_count;
    result.voteup_count = data.voteup_count;
    result.thanked_count = data.thanked_count;
    result.question_count = data.question_count;
    result.articles_count = data.articles_count;
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getZhihuInfo;
