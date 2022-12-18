const axios = require('axios');
const axiosConfig = require('../common/utils').mobileConfig;

async function getNowCoderInfo(id) {
  let result = {
    name: 'username', fans: 0, score: 0, likes: 0, questionAC: 0, codingAC: 0, eduInfo: '未填写', level: ''
  };
  try {
    let res = await axios.get(`https://m.nowcoder.com/profile/user-info?uid=${id}`, axiosConfig);
    let data = res.data.data;
    result.name = data.nickname;
    result.questionAC = data.doneRightCount;
    result.likes = data.likedCount;
    result.fans = data.followedCount;
    result.eduInfo = data.educationInfo;
    result.score = data.honorScore;
    result.codingAC = data.codingRightCount;
    result.level = data.honorLevelName.slice(-4);
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getNowCoderInfo;
