const lccn_crawler = require('./crawler/leetcode-cn');

async function test() {
  let info = await lccn_crawler("quanpeng")
  console.log(info)
}

test();
