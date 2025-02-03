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
  
  let headers = {};
  
  try {
    let queryData = {
      query: `
        query userSessionProgress($userSlug: String!) {
          userProfileUserQuestionSubmitStats(userSlug: $userSlug) {
            acSubmissionNum {
              difficulty
              count
            }
            totalSubmissionNum {
              difficulty
              count
            }
          }
          userProfileUserQuestionProgress(userSlug: $userSlug) {
            numAcceptedQuestions {
              difficulty
              count
            }
            numFailedQuestions {
              difficulty
              count
            }
            numUntouchedQuestions {
              difficulty
              count
            }
          }
        }
      `,
      variables: { userSlug: `${username}` },
      operationName: 'userSessionProgress'
    };

    let response = await axios.post('https://leetcode.cn/graphql', queryData, { headers });

    const submitStats = response.data.data.userProfileUserQuestionSubmitStats;
    const progressStats = response.data.data.userProfileUserQuestionProgress;

    result.easy_solved = progressStats.numAcceptedQuestions.find(item => item.difficulty === 'EASY').count;
    result.medium_solved = progressStats.numAcceptedQuestions.find(item => item.difficulty === 'MEDIUM').count;
    result.hard_solved = progressStats.numAcceptedQuestions.find(item => item.difficulty === 'HARD').count;
    result.total_solved = result.easy_solved + result.medium_solved + result.hard_solved;

    let totalSubmitNum = submitStats.totalSubmissionNum.reduce((acc, item) => acc + item.count, 0);
    let acceptSubmitNum = submitStats.acSubmissionNum.reduce((acc, item) => acc + item.count, 0);
    
    result.acceptance = ((acceptSubmitNum / totalSubmitNum) * 100).toFixed(1) + '%';
    result.star_rating = 0;
  } catch (e) {
    console.error(e.message);
  }
  return result;
}

module.exports = getLeetCodeCnInfo;
