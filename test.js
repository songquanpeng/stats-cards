const getBilibiliInfo = require('./crawer/bilibili');

async function test() {
  let info = await getBilibiliInfo(97177641);
  console.log(info);
}

test();
