const { constructItem, render } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderSteamCard(data, lang) {
  let {
    name,
    last_logoff,
    friends,
    game_count,
    recent_played_game,
    theme,
  } = data;

  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(82, 44, `${name}的Steam数据`, 'title', 18),
        constructItem(55, 83, `最近玩的游戏`, 'label', 13.5),
        constructItem(55, 111, `${recent_played_game}`, 'value', 25),
        constructItem(55, 139, `上次登录时间`, 'label', 12),
        constructItem(55, 169,  `朋友数量`, 'label', 12),
        constructItem(235, 169, `游戏数量`, 'label', 12),
        constructItem(135, 139,`${last_logoff}`, 'value', 12),
        constructItem(114, 169, `${friends}`, 'value', 12),
        constructItem(298, 169, `${game_count}`, 'value', 12),
      ];
      break;
    default:
      items = [
        constructItem(82, 44, `${name}&apos;s Steam Stats`, 'title', 18),
        constructItem(55, 83, `Recent Played Game`, 'label', 13.5),
        constructItem(55, 111, `${recent_played_game}`, 'value', 25),
        constructItem(55, 139, `Last logoff`, 'label', 12),
        constructItem(55, 169, `Frinds`, 'label', 12),
        constructItem(235, 169, `Game count`, 'label', 12),
        constructItem(125, 139, `${last_logoff}`, 'value', 12),
        constructItem(94, 169, `${friends}`, 'value', 12),
        constructItem(308, 169, `${game_count}`, 'value', 12),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderSteamCard;
