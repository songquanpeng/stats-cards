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
      variables: { userSlug: username },
      operationName: 'userSessionProgress'
    };

    let response = await axios.post('https://leetcode.cn/graphql', queryData, { headers });
    const data = response.data.data;

    if (!data || !data.userProfileUserQuestionSubmitStats || !data.userProfileUserQuestionProgress) {
      throw new Error('Invalid API response');
    }

    const submitStats = data.userProfileUserQuestionSubmitStats;
    const acSubmissions = submitStats.acSubmissionNum || [];
    result.easy_solved = acSubmissions.find(item => item.difficulty === 'EASY') ? acSubmissions.find(item => item.difficulty === 'EASY').count : 0;
    result.medium_solved = acSubmissions.find(item => item.difficulty === 'MEDIUM') ? acSubmissions.find(item => item.difficulty === 'MEDIUM').count : 0;
    result.hard_solved = acSubmissions.find(item => item.difficulty === 'HARD') ? acSubmissions.find(item => item.difficulty === 'HARD').count : 0;
    result.total_solved = result.easy_solved + result.medium_solved + result.hard_solved;

    const totalSubmissions = (submitStats.totalSubmissionNum || []).reduce((acc, item) => acc + item.count, 0);
    result.acceptance = totalSubmissions > 0 ? ((result.total_solved / totalSubmissions) * 100).toFixed(1) + '%' : '0%';
  } catch (e) {
    console.error('Error fetching data:', e.message);
  }
  
  return result;
}

module.exports = getLeetCodeCnInfo;
