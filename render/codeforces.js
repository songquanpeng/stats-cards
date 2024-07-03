const { render, constructItem } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderCodeforcesCard(data, lang) {
  let { name, Solved_for_all_time, Solved_for_the_last_year, In_a_row_for_the_last_year, In_a_row_max, Solved_for_the_last_month, credit, theme } = data;
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(97, 44, `${name}的 CSDN 数据`, 'title', 18),
        constructItem(63, 83, `总的解决问题`, 'label', 13.5),
        constructItem(63, 120, `去年解决的问题`, 'label', 13.5),
        constructItem(63, 157, `去年最长在线天数`, 'label', 13.5),
        constructItem(220, 83, `最长在线天数`, 'label', 13.5),
        constructItem(220, 120, `上个月解决的问题`, 'label', 13.5),
        constructItem(220, 157, `积分`, 'label', 13.5),
        constructItem(134, 83, `${Solved_for_all_time}`, 'value', 15),
        constructItem(134, 120, `${Solved_for_the_last_year}`, 'value', 15),
        constructItem(134, 157, `${In_a_row_for_the_last_year}`, 'value', 15),
        constructItem(295, 83, `${In_a_row_max}`, 'value', 15),
        constructItem(295, 120, `${Solved_for_the_last_month}`, 'value', 15),
        constructItem(295, 157, `${credit}`, 'value', 15),
      ];
      break;
    default:
      items = [
        constructItem(97, 44, `${name}'s CSDN Stats`, 'title', 18),
        constructItem(63, 83, `Solved_for_all_time`, 'label', 13.5),
        constructItem(63, 120, `Solved_for_the_last_year`, 'label', 13.5),
        constructItem(63, 157, `In_a_row_for_the_last_year`, 'label', 13.5),
        constructItem(220, 83, `In_a_row_max`, 'label', 13.5),
        constructItem(220, 120, `Solved_for_the_last_month`, 'label', 13.5),
        constructItem(220, 157, `Credit`, 'label', 13.5),
        constructItem(134, 83, `${Solved_for_all_time}`, 'value', 15),
        constructItem(134, 120, `${Solved_for_the_last_year}`, 'value', 15),
        constructItem(134, 157, `${In_a_row_for_the_last_year}`, 'value', 15),
        constructItem(295, 83, `${In_a_row_max}`, 'value', 15),
        constructItem(295, 120, `${Solved_for_the_last_month}`, 'value', 15),
        constructItem(295, 157, `${credit}`, 'value', 15),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderCodeforcesCard;
