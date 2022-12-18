const axios = require('axios')

async function getJuejinInfo(user_id) {
  let result = {
    user_id: user_id,
    user_name: '',
    description: '',
    follower_count: '', // 关注者
    got_digg_count: '', // 获得点赞
    article_count: '', // 文章数量
    got_view_count: '' // 文章被阅读
  }

  try {
    let res = await axios.get(
      `https://api.juejin.cn/user_api/v1/user/get?user_id=${user_id}`
    )

    let data = res.data.data
    result.user_id = data.user_id
    result.user_name = data.user_name
    result.description = data.description
    result.follower_count = data.follower_count
    result.got_digg_count = data.got_digg_count
    result.got_view_count = data.got_view_count

    // 获取文章数量
    let res2 = await axios.post('https://api.juejin.cn/content_api/v1/article/query_list', {
      user_id: user_id,
      cursor: "0",
      sort_type: 2
    })
    result.article_count = res2.data.count
  } catch (e) {
    console.error(e)
  }

  return result
}

module.exports = getJuejinInfo
