const { render, constructItem } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderNowCoderCard(data, lang) {
  let { name, fans, score, likes, questionAC, codingAC, level, theme } = data;

  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(97, 44, `${name}的牛客数据`, 'title', 18),
        constructItem(63, 83, `粉丝`, 'label', 13.5),
        constructItem(63, 120, `获赞`, 'label', 13.5),
        constructItem(63, 157, `分数`, 'label', 13.5),
        constructItem(220, 83, `等级`, 'label', 13.5),
        constructItem(220, 120, `问题`, 'label', 13.5),
        constructItem(220, 157, `代码`, 'label', 13.5),
        constructItem(134, 83, `${fans}`, 'value', 15),
        constructItem(134, 120, `${likes}`, 'value', 15),
        constructItem(134, 157, `${score}`, 'value', 15),
        constructItem(295, 83, `${level}`, 'value', 15),
        constructItem(295, 120, `${questionAC}`, 'value', 15),
        constructItem(295, 157, `${codingAC}`, 'value', 15),
      ];
      break;
    default:
      items = [
        constructItem(97, 44, `${name}&apos;s NowCoder Stats`, 'title', 18),
        constructItem(63, 83, `Followers`, 'label', 13.5),
        constructItem(63, 120, `Likes`, 'label', 13.5),
        constructItem(63, 157, `Score`, 'label', 13.5),
        constructItem(220, 83, `Level`, 'label', 13.5),
        constructItem(220, 120, `Questions`, 'label', 13.5),
        constructItem(220, 157, `Coding`, 'label', 13.5),
        constructItem(134, 83, `${fans}`, 'value', 15),
        constructItem(134, 120, `${likes}`, 'value', 15),
        constructItem(134, 157, `${score}`, 'value', 15),
        constructItem(295, 83, `${level}`, 'value', 15),
        constructItem(295, 120, `${questionAC}`, 'value', 15),
        constructItem(295, 157, `${codingAC}`, 'value', 15),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderNowCoderCard;
