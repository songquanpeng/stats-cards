function renderBilibiliCard(data) {
  let { name, description, following, fans, likes, level, views } = data;
  let lengthLimit = 14;
  if (description.length > lengthLimit) {
    description = description.substr(0, lengthLimit);
    description += '...';
  }
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
  <text id="JustSong_s_Bilibili_Stats" data-name="JustSong&apos;s Bilibili Stats" transform="translate(94 44)" fill="#212121" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">${name}&apos;s Bilibili Stats</tspan></text>
  <text id="Followers" transform="translate(55 84)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Followers</tspan></text>
  <text id="Video_Views" data-name="Video Views" transform="translate(203 85)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Video Views</tspan></text>
  <text id="Upvotes" transform="translate(55 119)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Upvotes</tspan></text>
  <text id="Bilibili_Level" data-name="Bilibili Level" transform="translate(203 119)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Bilibili Level</tspan></text>
  <text id="Signature" transform="translate(55 154)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Signature</tspan></text>
  <text id="_0" data-name="0" transform="translate(126 84)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${fans}</tspan></text>
  <text id="_0-2" data-name="0" transform="translate(126 119)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${likes}</tspan></text>
  <text id="_0-3" data-name="0" transform="translate(289 86)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${views}</tspan></text>
  <text id="_0-4" data-name="0" transform="translate(289 121)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${level}</tspan></text>
  <text id="哈哈哈" transform="translate(126 155)" fill="#212121" font-size="13" font-family="YuGothicUI-Regular, Yu Gothic UI"><tspan x="0" y="0">${description}</tspan></text>
</svg>
`;
}

module.exports = renderBilibiliCard;
