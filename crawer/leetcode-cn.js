const axios = require('axios');

async function getLeetCodeCnInfo(username) {
  let result = {
    name: username,
    easy_solved: 0,
    medium_solved: 0,
    hard_solved: 0,
    total_solved: 0,
    acceptance: '0%',
    star_rating: 0
  };
  let headers = {
    'authority': 'leetcode-cn.com',
    'content-type': 'application/json',
    'origin': 'https://leetcode-cn.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': ' cors',
    'sec-fetch-dest': 'empty',
    'referer': `https://leetcode-cn.com/u/${username}/`,
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36'

  };
  try {
    let res = await axios.post(
      `https://leetcode-cn.com/graphql`,
      {
        'operationName': 'userQuestionProgress',
        'variables': { 'userSlug': `${username}` },
        'query': 'query userQuestionProgress($userSlug: String\u0021) {  userProfileUserQuestionProgress(userSlug: $userSlug) {    numAcceptedQuestions {      difficulty      count      __typename    }    numFailedQuestions {      difficulty      count      __typename    }    numUntouchedQuestions {      difficulty      count      __typename    }    __typename  }}'
      },
      {
        headers
      }
    );

    let data = res.data.data;
    result.easy_solved = data.userProfileUserQuestionProgress.numAcceptedQuestions[0].count;
    result.medium_solved = data.userProfileUserQuestionProgress.numAcceptedQuestions[1].count;
    result.hard_solved = data.userProfileUserQuestionProgress.numAcceptedQuestions[2].count;
    result.total_solved = result.easy_solved + result.medium_solved + result.hard_solved;

    res = await axios.post(
      `https://leetcode-cn.com/graphql`,
      {
        'operationName': 'userQuestionSubmitStats',
        'variables': { 'userSlug': `${username}` },
        'query': 'query userQuestionSubmitStats($userSlug: String!) {  userProfileUserQuestionSubmitStats(userSlug: $userSlug) {    acSubmissionNum {      difficulty      count      __typename    }    totalSubmissionNum {      difficulty      count      __typename    }    __typename  }}'
      },
      {
        headers
      }
    );

    data = res.data.data;
    let totalSubmitNum = 0;
    let acceptSubmitNum = 0;
    for (let i = 0; i < 3; i++) {
      totalSubmitNum += data.userProfileUserQuestionSubmitStats.totalSubmissionNum[i].count;
      acceptSubmitNum += data.userProfileUserQuestionSubmitStats.acSubmissionNum[i].count;
    }
    result.acceptance =  acceptSubmitNum / totalSubmitNum;
    result.acceptance *= 100;
    result.acceptance = result.acceptance.toFixed(1);
    result.acceptance = result.acceptance + '%';
    result.star_rating = 0;
  } catch (e) {
    console.error(e.message);
  }
  return result;
}

module.exports = getLeetCodeCnInfo;
