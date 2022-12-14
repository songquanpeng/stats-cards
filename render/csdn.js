const { render, constructItem } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderCSDNCard(data, lang) {
  let { name, articles, fans, likes, replies, views, credit, theme } = data;
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(97, 44, `${name}的 CSDN 数据`, 'title', 18),
        constructItem(63, 83, `原创`, 'label', 13.5),
        constructItem(63, 120, `粉丝`, 'label', 13.5),
        constructItem(63, 157, `获赞`, 'label', 13.5),
        constructItem(220, 83, `评论`, 'label', 13.5),
        constructItem(220, 120, `访问`, 'label', 13.5),
        constructItem(220, 157, `积分`, 'label', 13.5),
        constructItem(134, 83, `${articles}`, 'value', 15),
        constructItem(134, 120, `${fans}`, 'value', 15),
        constructItem(134, 157, `${likes}`, 'value', 15),
        constructItem(295, 83, `${replies}`, 'value', 15),
        constructItem(295, 120, `${views}`, 'value', 15),
        constructItem(295, 157, `${credit}`, 'value', 15),
      ];
      break;
    default:
      items = [
        constructItem(97, 44, `${name}'s CSDN Stats`, 'title', 18),
        constructItem(63, 83, `Articles`, 'label', 13.5),
        constructItem(63, 120, `Fans`, 'label', 13.5),
        constructItem(63, 157, `Likes`, 'label', 13.5),
        constructItem(220, 83, `Replies`, 'label', 13.5),
        constructItem(220, 120, `Views`, 'label', 13.5),
        constructItem(220, 157, `Credit`, 'label', 13.5),
        constructItem(134, 83, `${articles}`, 'value', 15),
        constructItem(134, 120, `${fans}`, 'value', 15),
        constructItem(134, 157, `${likes}`, 'value', 15),
        constructItem(295, 83, `${replies}`, 'value', 15),
        constructItem(295, 120, `${views}`, 'value', 15),
        constructItem(295, 157, `${credit}`, 'value', 15),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderCSDNCard;
