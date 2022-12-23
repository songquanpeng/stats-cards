const { constructItem, render } = require('./common');
const { isEndsWithASCII, encodeHTML } = require('../common/utils');

function renderBilibiliCard(data, lang) {
  let { name, description, following, fans, likes, level, views, theme } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
  description = encodeHTML(description);
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(94, 44, `${name}的 B 站数据`, 'title', 18),
        constructItem(55, 84, `关注数`, 'label', 13.5),
        constructItem(203, 84, `播放量`, 'label', 13.5),
        constructItem(55, 119, `点赞数`, 'label', 13.5),
        constructItem(203, 119, `等级`, 'label', 13.5),
        constructItem(55, 154, `签名`, 'label', 13.5),
        constructItem(126, 84, `${fans}`, 'value', 15),
        constructItem(126, 119, `${likes}`, 'value', 15),
        constructItem(289, 84, `${views}`, 'value', 15),
        constructItem(289, 119, `LV${level}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
    default:
      items = [
        constructItem(94, 44, `${name}&apos;s Bilibili Stats`, 'title', 18),
        constructItem(55, 84, `Followers`, 'label', 13.5),
        constructItem(203, 84, `Video Views`, 'label', 13.5),
        constructItem(55, 119, `Upvotes`, 'label', 13.5),
        constructItem(203, 119, `Bilibili Level`, 'label', 13.5),
        constructItem(55, 154, `Signature`, 'label', 13.5),
        constructItem(126, 84, `${fans}`, 'value', 15),
        constructItem(126, 119, `${likes}`, 'value', 15),
        constructItem(289, 84, `${views}`, 'value', 15),
        constructItem(289, 119, `LV${level}`, 'value', 15),
        constructItem(126, 154, `${description}`, 'value', 13),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderBilibiliCard;
