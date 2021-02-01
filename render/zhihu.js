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
  return `<svg width="500" height="250" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="252" width="502" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <rect id="svg_2" height="200" width="450" y="25" x="25" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="24" id="svg_3" y="57.65" x="130.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">${name} 的知乎数据</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_4" y="94.65" x="67.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">关注者数量：${follower_count}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_5" y="135" x="68" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">得到的赞同：${voteup_count}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_6" y="175" x="68" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">得到的喜欢：${thanked_count}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_9" y="94.65" x="259.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">问题数量：${answer_count}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_10" y="135" x="260" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">回答数量：${question_count}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_11" y="175" x="260" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">文章数量：${articles_count}</text>
 </g>
</svg>`;
}

module.exports = renderZhihuCard;
