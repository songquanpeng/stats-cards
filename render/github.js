const { constructItem, render } = require('./common');

function renderGitHubCard(data) {
  const {
    name,
    followers,
    stars,
    repos,
    forks,
    watchers,
    following,
    theme,
    issues,
    gists
  } = data;

  let items = [
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
    constructItem(295, 157, `${forks}`, 'value', 15)
  ];
  return render(items, theme);
}

module.exports = renderGitHubCard;
