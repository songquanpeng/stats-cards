function renderJuejinCard(data) {
  const {
    user_name,
    description, // 描述
    follower_count, // 关注者
    got_digg_count, // 获得点赞
    article_count, // 文章数
    got_view_count // 文章被阅读
  } = data;
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="382" height="210" viewBox="0 0 382 210">
  <defs>
    <filter id="Card" x="0" y="0" width="382" height="210" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Card)">
    <rect id="Card-2" data-name="Card" width="364" height="192" rx="8" transform="translate(9 6)" fill="#fff"/>
  </g>
  <text id="Juejin" data-name="juejin" transform="translate(94 44)" fill="#212121" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">${user_name}&apos;s juejin.cn(掘金) Stats</tspan></text>
  <text id="Followers" transform="translate(55 84)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Followers</tspan></text>
  <text id="Likes" data-name="Video Views" transform="translate(203 85)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Likes</tspan></text>
  <text id="Articles" transform="translate(55 119)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Articles</tspan></text>
  <text id="Article Views" data-name="Bilibili Level" transform="translate(203 119)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Article View</tspan></text>
  <text id="Signature" transform="translate(55 154)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Signature</tspan></text>
  <text id="_0" data-name="0" transform="translate(126 84)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${follower_count}</tspan></text>
  <text id="_0-2" data-name="0" transform="translate(126 119)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${article_count}</tspan></text>
  <text id="_0-3" data-name="0" transform="translate(289 86)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${got_digg_count}</tspan></text>
  <text id="_0-4" data-name="0" transform="translate(289 121)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${got_view_count}</tspan></text>
  <text id="哈哈哈" transform="translate(126 155)" fill="#212121" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="0">${description}</tspan></text>
</svg>
`;
}

module.exports = renderJuejinCard;
