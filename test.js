const getLeetCodeInfo = require('./crawer/leetcode');

async function test() {
  let info = await getLeetCodeInfo("quanpeng");
  console.log(info);
}

test();
