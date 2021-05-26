const getLeetCodeInfo = require('./crawer/leetcode');
const getJuejinInfo = require('./crawer/juejin')

async function test() {
  let leetCodeInfo = await getLeetCodeInfo("quanpeng");
  console.log('leetCodeInfo', leetCodeInfo);

  let juejinInfo = await getJuejinInfo('1556564194374926')
  console.log('juejinInfo', juejinInfo)
}

test();
