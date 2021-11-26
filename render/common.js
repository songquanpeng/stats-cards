function render(items, theme = 'light') {
  let titleColor = '#212121';
  let backgroundColor = '#ffffff';
  let labelColor = '#9e9e9e';
  let valueColor = '#212121';
  if (theme === 'dark') {
    titleColor = '#FD428D';
    backgroundColor = '#141321';
    labelColor = '#A8FDF6';
    valueColor = '#A8FDF6';
  }
  let textTags = '';
  for (let i = 0; i < items.length; i++) {
    items[i].id = `key_${i}`;
    if (!items[i].color) {
      switch (items[i].type) {
        case 'title':
          items[i].color = titleColor;
          break;
        case 'label':
          items[i].color = labelColor;
          break;
        case 'value':
          items[i].color = valueColor;
          break;
      }
    }
    textTags += renderText(items[i]);
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
    <rect id="Card-2" data-name="Card" width="364" height="192" rx="8" transform="translate(9 6)" fill="${backgroundColor}"/>
  </g>
  ${textTags}
</svg>
`;
}

function renderText(data) {
  let weight = '';
  if (data.type === 'title') {
    weight = ` font-weight="700" `;
  }
  return `<text id="${data.id}" transform="translate(${data.translate_x} ${data.translate_y})" fill="${data.color}" font-size="${data.font_size}" font-family="${data.font}" ${weight}><tspan x="0" y="0">${data.text}</tspan></text>\n`;
}

function constructItem(translate_x, translate_y, text, type, font_size, color = '', font = 'SegoeUI, Segoe UI') {
  return {
    translate_x: translate_x,
    translate_y: translate_y,
    text: text,
    type: type,
    font_size: font_size,
    color: color,
    font: font
  };

}

exports.render = render;
exports.constructItem = constructItem;