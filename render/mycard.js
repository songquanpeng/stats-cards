const { constructItem, render } = require('./common');
const { isEndsWithASCII, encodeHTML } = require('../common/utils');

function renderMycardCard(data, lang) {
    let {
        name,
        arena_rank,
        DP,
        athletic_wl_ratio,
        athletic_win,
        athletic_lose,
        theme
      } = data;
      let items = [];
      switch (lang) {
        case 'zh-CN':
          if (isEndsWithASCII(name)) {
            name += ' ';
          }
          items = [
            constructItem(82, 44, `${name}的萌卡数据`, 'title', 18),
            constructItem(55, 169, `胜场`, 'label', 12, '#43a047'),
            constructItem(164, 169, `胜率`, 'label', 12,),
            constructItem(275, 169, `败场`, 'label', 12, '#e91e63'),
            constructItem(234, 121, `${DP}`, 'value', 25),
            constructItem(245, 83, `分数`, 'label', 15),
            constructItem(98, 83, `排名`, 'label', 15),
            constructItem(85, 121, `${arena_rank}`, 'value', 25),
            constructItem(85, 169, `${athletic_win}`, 'value', 12),
            constructItem(195, 169, `${athletic_wl_ratio}%`, 'value', 12),
            constructItem(308, 169, `${athletic_lose}`, 'value', 12),
          ];
          break;
        default:
          items = [
            constructItem(82, 44, `${name}&apos;s MyCard Stats`, 'title', 18),
            constructItem(55, 169, `Win`, 'label', 12, '#43a047'),
            constructItem(164, 169, `Ratio`, 'label', 12,),
            constructItem(275, 169, `Lose`, 'label', 12, '#e91e63'),
            constructItem(234, 121, `${DP}`, 'value', 25),
            constructItem(252, 83, `DP`, 'label', 13.5),
            constructItem(96, 83, `Rank`, 'label', 13.5),
            constructItem(85, 121, `${arena_rank}`, 'value', 25),
            constructItem(85, 169, `${athletic_win}`, 'value', 12),
            constructItem(195, 169, `${athletic_wl_ratio}%`, 'value', 12),
            constructItem(308, 169, `${athletic_lose}`, 'value', 12),
          ];
          break;
      }
      return render(items, theme);
}

module.exports = renderMycardCard;
