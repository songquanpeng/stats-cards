const getLeetCodeCnInfo = require('./crawler/leetcode-cn');

async function test() {
  let info = await getLeetCodeCnInfo('quanpeng')
  console.log(info)
}

test();
