const { constructItem, render } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderZhihuCard(data, lang) {
  let {
    name,
    description,
    follower_count,
    voteup_count,
    favorited_count,
    liked_count,
    theme,
  } = data;

  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(94, 44, `${name}的知乎数据`, 'title', 18),
        constructItem(55, 84, `关注数`, 'label', 13.5),
        constructItem(203, 84, `点赞数`, 'label', 13.5),
        constructItem(55, 119, `收藏数`, 'label', 13.5),
        constructItem(203, 119, `喜欢数`, 'label', 13.5),
        constructItem(55, 154, `签名`, 'label', 13.5),
        constructItem(126, 84, `${follower_count}`, 'value', 15),
        constructItem(126, 119, `${favorited_count}`, 'value', 15),
        constructItem(289, 84, `${voteup_count}`, 'value', 15),
        constructItem(289, 119, `${liked_count}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
    default:
      items = [
        constructItem(94, 44, `${name}&apos;s Zhihu Stats`, 'title', 18),
        constructItem(55, 84, `Followers`, 'label', 13.5),
        constructItem(203, 84, `Upvotes`, 'label', 13.5),
        constructItem(55, 119, `Favorited`, 'label', 13.5),
        constructItem(203, 119, `Likes`, 'label', 13.5),
        constructItem(55, 154, `Signature`, 'label', 13.5),
        constructItem(126, 84, `${follower_count}`, 'value', 15),
        constructItem(126, 119, `${favorited_count}`, 'value', 15),
        constructItem(289, 84, `${voteup_count}`, 'value', 15),
        constructItem(289, 119, `${liked_count}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderZhihuCard;
