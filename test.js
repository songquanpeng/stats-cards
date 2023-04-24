const crawler = require('./crawler/zhihu');

async function test() {
  let info = await crawler('songwonderful')
  console.log(info)
}

test();
