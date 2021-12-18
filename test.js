const getNeteaseMusicInfo = require('./crawer/netease-music')

async function test() {
  let info = await getNeteaseMusicInfo('506085251')
  console.log(info)
}

test();
