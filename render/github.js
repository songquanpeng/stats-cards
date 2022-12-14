const { constructItem, render } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderGitHubCard(data, lang) {
  let {
    name,
    followers,
    stars,
    repos,
    forks,
    watchers,
    following,
    theme,
    issues,
    gists,
  } = data;

  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(97, 44, `${name}的 GitHub 数据`, 'title', 18),
        constructItem(63, 83, `星标总数`, 'label', 13.5),
        constructItem(63, 120, `代码仓库`, 'label', 13.5),
        constructItem(63, 157, `代码片段`, 'label', 13.5),
        constructItem(220, 83, `粉丝总数`, 'label', 13.5),
        constructItem(220, 120, `追踪数量`, 'label', 13.5),
        constructItem(220, 157, `复刻数量`, 'label', 13.5),
        constructItem(134, 83, `${stars}`, 'value', 15),
        constructItem(134, 120, `${repos}`, 'value', 15),
        constructItem(134, 157, `${gists}`, 'value', 15),
        constructItem(295, 83, `${followers}`, 'value', 15),
        constructItem(295, 120, `${following}`, 'value', 15),
        constructItem(295, 157, `${forks}`, 'value', 15),
      ];
      break;
    default:
      items = [
        constructItem(97, 44, `${name}&apos;s GitHub Stats`, 'title', 18),
        constructItem(63, 83, `Stars`, 'label', 13.5),
        constructItem(63, 120, `Repos`, 'label', 13.5),
        constructItem(63, 157, `Gists`, 'label', 13.5),
        constructItem(220, 83, `Followers`, 'label', 13.5),
        constructItem(220, 120, `Following`, 'label', 13.5),
        constructItem(220, 157, `Forked`, 'label', 13.5),
        constructItem(134, 83, `${stars}`, 'value', 15),
        constructItem(134, 120, `${repos}`, 'value', 15),
        constructItem(134, 157, `${gists}`, 'value', 15),
        constructItem(295, 83, `${followers}`, 'value', 15),
        constructItem(295, 120, `${following}`, 'value', 15),
        constructItem(295, 157, `${forks}`, 'value', 15),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderGitHubCard;
