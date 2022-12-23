const { render, constructItem } = require('./common');
const { isEndsWithASCII, encodeHTML } = require('../common/utils');

function renderJuejinCard(data, lang) {
  let {
    user_name,
    description, // 描述
    follower_count, // 关注者
    got_digg_count, // 获得点赞
    article_count, // 文章数
    got_view_count, // 文章被阅读
    theme,
  } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
  description = encodeHTML(description);
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(user_name)) {
        user_name += ' ';
      }
      items = [
        constructItem(94, 44, `${user_name}的掘金数据`, 'title', 18),
        constructItem(55, 84, `关注者`, 'label', 13.5),
        constructItem(203, 84, `点赞数`, 'label', 13.5),
        constructItem(55, 119, `文章数`, 'label', 13.5),
        constructItem(203, 119, `阅读量`, 'label', 13.5),
        constructItem(55, 154, `签名`, 'label', 13.5),
        constructItem(126, 84, `${follower_count}`, 'value', 15),
        constructItem(126, 119, `${article_count}`, 'value', 15),
        constructItem(289, 84, `${got_digg_count}`, 'value', 15),
        constructItem(289, 119, `${got_view_count}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
    default:
      items = [
        constructItem(94, 44, `${user_name}&apos;s Juejin Stats`, 'title', 18),
        constructItem(55, 84, `Followers`, 'label', 13.5),
        constructItem(203, 84, `Likes`, 'label', 13.5),
        constructItem(55, 119, `Articles`, 'label', 13.5),
        constructItem(203, 119, `Article Views`, 'label', 13.5),
        constructItem(55, 154, `Signature`, 'label', 13.5),
        constructItem(126, 84, `${follower_count}`, 'value', 15),
        constructItem(126, 119, `${article_count}`, 'value', 15),
        constructItem(289, 84, `${got_digg_count}`, 'value', 15),
        constructItem(289, 119, `${got_view_count}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderJuejinCard;
