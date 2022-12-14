const { constructItem, render } = require('./common');
const { isEndsWithASCII } = require('../common/utils');

function renderZhihuCard(data, lang) {
  let {
    name,
    description,
    follower_count,
    answer_count,
    voteup_count,
    thanked_count,
    question_count,
    articles_count,
    theme,
  } = data;

  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(name)) {
        name += ' ';
      }
      items = [
        constructItem(97, 44, `${name}的知乎数据`, 'title', 18),
        constructItem(63, 83, `关注者`, 'label', 13.5),
        constructItem(63, 120, `赞同数`, 'label', 13.5),
        constructItem(63, 157, `喜欢数`, 'label', 13.5),
        constructItem(220, 83, `问题数`, 'label', 13.5),
        constructItem(220, 120, `回答数`, 'label', 13.5),
        constructItem(220, 157, `文章数`, 'label', 13.5),
        constructItem(134, 83, `${follower_count}`, 'value', 15),
        constructItem(134, 120, `${voteup_count}`, 'value', 15),
        constructItem(134, 157, `${thanked_count}`, 'value', 15),
        constructItem(295, 83, `${question_count}`, 'value', 15),
        constructItem(295, 120, `${answer_count}`, 'value', 15),
        constructItem(295, 157, `${articles_count}`, 'value', 15),
      ];
      break;
    default:
      items = [
        constructItem(97, 44, `${name}&apos;s Zhihu Stats`, 'title', 18),
        constructItem(63, 83, `Followers`, 'label', 13.5),
        constructItem(63, 120, `Upvotes`, 'label', 13.5),
        constructItem(63, 157, `Likes`, 'label', 13.5),
        constructItem(220, 83, `Questions`, 'label', 13.5),
        constructItem(220, 120, `Answers`, 'label', 13.5),
        constructItem(220, 157, `Articles`, 'label', 13.5),
        constructItem(134, 83, `${follower_count}`, 'value', 15),
        constructItem(134, 120, `${voteup_count}`, 'value', 15),
        constructItem(134, 157, `${thanked_count}`, 'value', 15),
        constructItem(295, 83, `${question_count}`, 'value', 15),
        constructItem(295, 120, `${answer_count}`, 'value', 15),
        constructItem(295, 157, `${articles_count}`, 'value', 15),
      ];
      break;
  }
  return render(items, theme);
}

module.exports = renderZhihuCard;
