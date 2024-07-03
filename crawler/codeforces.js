const axios = require('axios');

async function getCodeforcesInfo(username) {
  let result = {
    name: username,
    Solved_for_all_time: 0,
    Solved_for_the_last_year: 0,
    In_a_row_for_the_last_year: 0,
    In_a_row_max: 0,
    Solved_for_the_last_month: 0,
    credit: 0
  };
  //name, Solved_for_all_time, Solved_for_the_last_year, 
  //In_a_row_for_the_last_year, In_a_row_max, Solved_for_the_last_month, credit
  try {
    let res = await axios.get(
      `https://codeforces.com/profile/${username}`,
      axiosConfig
    );
    let $ = cheerio.load(res.data);
    let list = $('.personal-reward-box .num');
    result.Solved_for_all_time = $(list[0]).text();
    result.Solved_for_the_last_year = $(list[1]).text();
    result.In_a_row_for_the_last_year = $(list[2]).text();
    result.In_a_row_max = $(list[3]).text();
    let tagList = $('.personal-tag-box div .num');
    result.Solved_for_the_last_month = $(tagList[0]).text();
    result.credit = $(tagList[1]).text();
    result.name = $('.personal-massage-name').text();

    for (const [key, value] of Object.entries(result)) {
      if(value.endsWith('万+')) {
        result[key] = value.replace('万+', '0k+');
      }
    }
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getCodeforcesInfo;
