const { render, constructItem } = require('./common');

function renderJuejinCard(data) {
  let {
    user_name,
    description, // 描述
    follower_count, // 关注者
    got_digg_count, // 获得点赞
    article_count, // 文章数
    got_view_count, // 文章被阅读
    theme
  } = data;
  // let lengthLimit = 14;
  // if (description.length > lengthLimit) {
  //   description = description.substr(0, lengthLimit);
  //   description += '...';
  // }

  let items = [
    constructItem(94, 44, `${user_name}&apos;s Juejin Stats`, 'title', 18),
    constructItem(55, 84, `Followers`, 'label', 13.5),
    constructItem(203, 85, `Likes`, 'label', 13.5),
    constructItem(55, 119, `Articles`, 'label', 13.5),
    constructItem(203, 119, `Article Views`, 'label', 13.5),
    constructItem(55, 154, `Signature`, 'label', 13.5),
    constructItem(126, 84, `${follower_count}`, 'value', 15),
    constructItem(126, 119, `${article_count}`, 'value', 15),
    constructItem(289, 86, `${got_digg_count}`, 'value', 15),
    constructItem(289, 121, `${got_view_count}`, 'value', 15),
    constructItem(126, 155, `${description}`, 'value', 13, '', 'YuGothicUI-Regular, Yu Gothic UI')
  ];
  return render(items, theme);
}

module.exports = renderJuejinCard;
