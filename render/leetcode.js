function renderLeetCodeCard(data) {
  const {
    name,
    easy_solved,
    medium_solved,
    hard_solved,
    total_solved,
    acceptance,
    star_rating
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
  <text id="JustSong_s_LeetCode_Stats" data-name="JustSong&apos;s LeetCode Stats" transform="translate(82 44)" fill="#212121" font-size="18" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">${name}&apos;s LeetCode Stats</tspan></text>
  <text id="Easy" transform="translate(55 169)" fill="#43a047" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Easy</tspan></text>
  <text id="Medium" transform="translate(154 169)" fill="#fb8c00" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Medium</tspan></text>
  <text id="Hard" transform="translate(275 169)" fill="#e91e63" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Hard</tspan></text>
  <text id="_61.1_" data-name="61.1%" transform="translate(234 121)" fill="#212121" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${acceptance}</tspan></text>
  <text id="Acceptance" transform="translate(232 83)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Acceptance</tspan></text>
  <text id="Problems_Solved" data-name="Problems Solved" transform="translate(55 83)" fill="#9e9e9e" font-size="13.5" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Problems Solved</tspan></text>
  <text id="_131" data-name="131" transform="translate(85 121)" fill="#212121" font-size="25" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${total_solved}</tspan></text>
  <text id="_0" data-name="0" transform="translate(85 169)" fill="#262626" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${easy_solved}</tspan></text>
  <text id="_0-2" data-name="0" transform="translate(205 169)" fill="#262626" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${medium_solved}</tspan></text>
  <text id="_0-3" data-name="0" transform="translate(308 169)" fill="#262626" font-size="12" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">${hard_solved}</tspan></text>
</svg>

`;
}

module.exports = renderLeetCodeCard;
