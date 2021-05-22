function renderBilibiliCard(data) {
  let { name, description, following, fans, likes, level, views } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="300" viewBox="0 0 500 300">
  <defs>
    <clipPath id="clip-Bilibili">
      <rect width="500" height="300"/>
    </clipPath>
  </defs>
  <g id="Bilibili" clip-path="url(#clip-Bilibili)">
    <rect width="500" height="300" fill="#fff"/>
    <text id="关注者数量_0" data-name="关注者数量：0" transform="translate(85 115)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">关注者数量：${fans}</tspan></text>
    <text id="得到的赞同_0" data-name="得到的赞同：0" transform="translate(85 168)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">得到的赞同：${likes}</tspan></text>
    <text id="视频播放量_0" data-name="视频播放量：0" transform="translate(284 115)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">视频播放量：${views}</tspan></text>
    <text id="B_站等级_0" data-name="B 站等级：0" transform="translate(284 168)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">B 站等级：${level}</tspan></text>
    <text id="个人简介_无" data-name="个人简介：无" transform="translate(85 221)" font-size="18" font-family="MicrosoftYaHei, Microsoft YaHei"><tspan x="0" y="0">个人简介：${description}</tspan></text>
    <text id="JustSong_的_B_站数据" data-name="JustSong 的 B 站数据" transform="translate(118 50)" font-size="26" font-family="MicrosoftYaHei-Bold, Microsoft YaHei" font-weight="700"><tspan x="0" y="0">${name} 的 B 站数据</tspan></text>
  </g>
</svg>
`;
}

module.exports = renderBilibiliCard;
