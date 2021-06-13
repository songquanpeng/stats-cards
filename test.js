const getCSDNInfo = require('./crawer/csdn')

async function test() {
  let info = await getCSDNInfo('vczh')
  console.log(info)
}

test();
