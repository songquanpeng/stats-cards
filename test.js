const getLeetCodeCnInfo = require('./crawer/leetcode-cn');

async function test() {
  let info = await getLeetCodeCnInfo('quanpeng')
  console.log(info)
}

test();
