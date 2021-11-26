const { render, constructItem } = require('./common');

function renderLeetCodeCard(data) {
  const {
    name,
    easy_solved,
    medium_solved,
    hard_solved,
    total_solved,
    acceptance,
    star_rating,
    theme
  } = data;
  let items = [
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
  return render(items, theme);
}

module.exports = renderLeetCodeCard;
