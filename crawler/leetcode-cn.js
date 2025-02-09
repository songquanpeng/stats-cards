const axios = require('axios');

const getLeetCodeCnInfo = async (username) => {
  const result = {
    name: username,
    easy_solved: 0,
    medium_solved: 0,
    hard_solved: 0,
    total_solved: 0,
    acceptance: '0%'
  };

  const queryData = {
    query: `
      query userSessionProgress($userSlug: String!) {
        userProfileUserQuestionSubmitStats(userSlug: $userSlug) {
          acSubmissionNum { difficulty count }
          totalSubmissionNum { count }
        }
      }
    `,
    variables: { userSlug: username },
  };

  try {
    const response = await axios.post('https://leetcode.cn/graphql', queryData, {
      headers: { 'Content-Type': 'application/json' }
    });
    const { data } = response.data;
    
    const submissions = data?.userProfileUserQuestionSubmitStats?.acSubmissionNum || [];
    result.easy_solved = submissions.find(({ difficulty }) => difficulty === 'EASY')?.count || 0;
    result.medium_solved = submissions.find(({ difficulty }) => difficulty === 'MEDIUM')?.count || 0;
    result.hard_solved = submissions.find(({ difficulty }) => difficulty === 'HARD')?.count || 0;
    result.total_solved = result.easy_solved + result.medium_solved + result.hard_solved;
    
    const totalSubmissions = data?.userProfileUserQuestionSubmitStats?.totalSubmissionNum?.reduce((acc, { count }) => acc + count, 0) || 0;
    result.acceptance = totalSubmissions ? `${((result.total_solved / totalSubmissions) * 100).toFixed(1)}%` : '0%';
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
  
  return result;
};

module.exports = getLeetCodeCnInfo;
