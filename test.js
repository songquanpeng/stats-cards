const getNowCoderInfo = require('./crawer/nowcoder')

async function test() {
  let info = await getNowCoderInfo('189102554')
  console.log(info)
}

test();
