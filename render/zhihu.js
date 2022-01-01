const { constructItem, render } = require('./common');

function renderZhihuCard(data) {
  const {
    name,
    description,
    follower_count,
    answer_count,
    voteup_count,
    thanked_count,
    question_count,
    articles_count,
    theme
  } = data;

  let items = [
    constructItem(97, 44, `${name}&apos;s Zhihu Stats`, 'title', 18),
    constructItem(63, 83, `Followers`, 'label', 13.5),
    constructItem(63, 120, `Upvotes`, 'label', 13.5),
    constructItem(63, 157, `Likes`, 'label', 13.5),
    constructItem(220, 83, `Questions`, 'label', 13.5),
    constructItem(220, 120, `Answers`, 'label', 13.5),
    constructItem(220, 157, `Articles`, 'label', 13.5),
    constructItem(134, 83, `${follower_count}`, 'value', 15),
    constructItem(134, 121, `${voteup_count}`, 'value', 15),
    constructItem(134, 159, `${thanked_count}`, 'value', 15),
    constructItem(295, 84, `${question_count}`, 'value', 15),
    constructItem(295, 121, `${answer_count}`, 'value', 15),
    constructItem(295, 158, `${articles_count}`, 'value', 15),
  ];
  return render(items, theme);
}

module.exports = renderZhihuCard;
