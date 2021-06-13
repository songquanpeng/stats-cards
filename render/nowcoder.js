function renderNowCoderCard(data) {
  const {
    name,
    fans,
    score,
    likes,
    questionAC,
    codingAC,
    level,
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
  <text id="JustSong_s_Zhihu_Stats" data-name="JustSong&apos;s Zhihu Stats" transform="translate(97 44)" fill="#212121" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">${name}&apos;s NowCoder Stats</tspan></text>
  <text id="Followers" transform="translate(63 83)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Followers</tspan></text>
  <text id="Upvotes" transform="translate(63 120)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Likes</tspan></text>
  <text id="Likes" transform="translate(63 157)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Score</tspan></text>
  <text id="Questions" transform="translate(220 83)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Level</tspan></text>
  <text id="Answers" transform="translate(221 120)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Questions</tspan></text>
  <text id="Articles" transform="translate(220 157)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Coding</tspan></text>
  <text id="_0" data-name="0" transform="translate(134 83)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${fans}</tspan></text>
  <text id="_0-2" data-name="0" transform="translate(134 121)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${likes}</tspan></text>
  <text id="_0-3" data-name="0" transform="translate(134 159)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${score}</tspan></text>
  <text id="_0-4" data-name="0" transform="translate(295 84)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${level}</tspan></text>
  <text id="_0-5" data-name="0" transform="translate(295 121)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${questionAC}</tspan></text>
  <text id="_0-6" data-name="0" transform="translate(295 158)" fill="#212121" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${codingAC}</tspan></text>
</svg>
`;
}

module.exports = renderNowCoderCard;
