const { render, constructItem } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderLeetCodeCard(data, lang) {
  let {
    name,
    easy_solved,
    medium_solved,
    hard_solved,
    total_solved,
    acceptance,
    star_rating,
    theme,
  } = data;
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(82, 44, `${name}的力扣数据`, 'title', 18),
        constructItem(55, 169, `简单`, 'label', 12, '#43a047'),
        constructItem(154, 169, `中等`, 'label', 12, '#fb8c00'),
        constructItem(275, 169, `困难`, 'label', 12, '#e91e63'),
        constructItem(234, 121, `${acceptance}`, 'value', 25),
        constructItem(245, 83, `接受率`, 'label', 13.5),
        constructItem(78, 83, `解决问题`, 'label', 13.5),
        constructItem(85, 121, `${total_solved}`, 'value', 25),
        constructItem(85, 169, `${easy_solved}`, 'value', 12),
        constructItem(205, 169, `${medium_solved}`, 'value', 12),
        constructItem(308, 169, `${hard_solved}`, 'value', 12),
      ];
      break;
    default:
      items = [
        constructItem(82, 44, `${name}&apos;s LeetCode Stats`, 'title', 18),
        constructItem(55, 169, `Easy`, 'label', 12, '#43a047'),
        constructItem(154, 169, `Medium`, 'label', 12, '#fb8c00'),
        constructItem(275, 169, `Hard`, 'label', 12, '#e91e63'),
        constructItem(234, 121, `${acceptance}`, 'value', 25),
        constructItem(232, 83, `Acceptance`, 'label', 13.5),
        constructItem(55, 83, `Problems Solved`, 'label', 13.5),
        constructItem(85, 121, `${total_solved}`, 'value', 25),
        constructItem(85, 169, `${easy_solved}`, 'value', 12),
        constructItem(205, 169, `${medium_solved}`, 'value', 12),
        constructItem(308, 169, `${hard_solved}`, 'value', 12),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderLeetCodeCard;
