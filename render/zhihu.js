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
  } = data;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="300" viewBox="0 0 500 300">
  <defs>
    <clipPath id="clip-Zhihu">
      <rect width="500" height="300"/>
    </clipPath>
  </defs>
  <g id="Zhihu" clip-path="url(#clip-Zhihu)">
    <rect width="500" height="300" fill="#fff"/>
    <text id="关注者数量_0" data-name="关注者数量：0" transform="translate(84 115)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">关注者数量：${follower_count}</tspan></text>
    <text id="得到的赞同_0" data-name="得到的赞同：0" transform="translate(84 168)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">得到的赞同：${voteup_count}</tspan></text>
    <text id="得到的喜欢_0" data-name="得到的喜欢：0" transform="translate(84 216)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">得到的喜欢：${thanked_count}</tspan></text>
    <text id="问题数量_0" data-name="问题数量：0" transform="translate(284 115)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">问题数量：${question_count}</tspan></text>
    <text id="回答数量_0" data-name="回答数量：0" transform="translate(284 168)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">回答数量：${answer_count}</tspan></text>
    <text id="文章数量_0" data-name="文章数量：0" transform="translate(284 216)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">文章数量：${articles_count}</tspan></text>
    <text id="JustSong_的知乎数据" data-name="JustSong 的知乎数据" transform="translate(118 50)" font-size="26" font-family="MicrosoftYaHei-Bold, Microsoft YaHei" font-weight="700"><tspan x="0" y="0">${name} 的知乎数据</tspan></text>
  </g>
</svg>
`;
}

module.exports = renderZhihuCard;
