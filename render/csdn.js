const { render, constructItem } = require('./common');

function renderCSDNCard(data) {
  let { name, articles, fans, likes, replies, views, credit, theme } = data;

  let items = [
    constructItem(97, 44, `${name}'s CSDN Stats`, 'title', 18),
    constructItem(63, 83, `Articles`, 'label', 13.5),
    constructItem(63, 120, `Fans`, 'label', 13.5),
    constructItem(63, 157, `Likes`, 'label', 13.5),
    constructItem(220, 83, `Replies`, 'label', 13.5),
    constructItem(220, 120, `Views`, 'label', 13.5),
    constructItem(220, 157, `Credit`, 'label', 13.5),
    constructItem(134, 83, `${articles}`, 'value', 15),
    constructItem(134, 121, `${fans}`, 'value', 15),
    constructItem(134, 159, `${likes}`, 'value', 15),
    constructItem(295, 84, `${replies}`, 'value', 15),
    constructItem(295, 121, `${views}`, 'value', 15),
    constructItem(295, 158, `${credit}`, 'value', 15)
  ];
  return render(items, theme);
}

module.exports = renderCSDNCard;
