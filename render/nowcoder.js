const { render, constructItem } = require('./common');

function renderNowCoderCard(data) {
  const {
    name,
    fans,
    score,
    likes,
    questionAC,
    codingAC,
    level,
    theme
  } = data;

  let items = [
    constructItem(97, 44, `${name}&apos;s NowCoder Stats`, 'title', 18),
    constructItem(63, 83, `Followers`, 'label', 13.5),
    constructItem(63, 120, `Likes`, 'label', 13.5),
    constructItem(63, 157, `Score`, 'label', 13.5),
    constructItem(220, 83, `Level`, 'label', 13.5),
    constructItem(220, 120, `Questions`, 'label', 13.5),
    constructItem(220, 157, `Coding`, 'label', 13.5),
    constructItem(134, 83, `${fans}`, 'value', 15),
    constructItem(134, 121, `${likes}`, 'value', 15),
    constructItem(134, 159, `${score}`, 'value', 15),
    constructItem(295, 84, `${level}`, 'value', 15),
    constructItem(295, 121, `${questionAC}`, 'value', 15),
    constructItem(295, 158, `${codingAC}`, 'value', 15)
  ];
  return render(items, theme);
}

module.exports = renderNowCoderCard;
