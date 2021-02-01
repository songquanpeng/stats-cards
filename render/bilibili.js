function renderBilibiliCard(data) {
  let { name, description, following, fans, likes, level, views } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
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
  <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="24" id="svg_3" y="57.65" x="130.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">${name}的 B 站数据</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_4" y="94.65" x="67.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">关注者数量：${fans}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_5" y="135" x="68" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">得到的赞同：${likes}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_9" y="94.65" x="259.5" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">视频播放量：${views}</text>
  <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_10" y="135" x="260" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">B 站等级：${level}</text>
  <text xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="18" id="svg_12" y="175" x="68" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">个人简介：${description}</text>
 </g>
</svg>`;
}

module.exports = renderBilibiliCard;
