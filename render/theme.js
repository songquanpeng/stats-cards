function set_theme(theme = 'default') {
    try {
        global.titleColor = "#" + themes[theme].titleColor;
        global.backgroundColor = "#" + themes[theme].backgroundColor;
        global.labelColor = "#" + themes[theme].labelColor;
        global.valueColor = "#" + themes[theme].valueColor;
    } catch (e) {
        global.titleColor = themes["light"].titleColor;
        global.backgroundColor = themes["light"].backgroundColor;
        global.labelColor = themes["light"].labelColor;
        global.valueColor = themes["light"].valueColor;
    }
}
themes = {
    "light": {
        titleColor: "#212121",
        backgroundColor: "#ffffff",
        labelColor: "#9e9e9e",
        valueColor: "#212121",
    },
    "dark": {
        titleColor: "fff",
        labelColor: "79ff97",
        valueColor: "9f9f9f",
        backgroundColor: "151515",
    },
    "radical": {
        titleColor: "fe428e",
        labelColor: "f8d847",
        valueColor: "a9fef7",
        backgroundColor: "141321",
    },
    "merko": {
        titleColor: "abd200",
        labelColor: "b7d364",
        valueColor: "68b587",
        backgroundColor: "0a0f0b",
    },
    "gruvbox": {
        titleColor: "fabd2f",
        labelColor: "fe8019",
        valueColor: "8ec07c",
        backgroundColor: "282828",
    },
    "gruvbox_light": {
        titleColor: "b57614",
        labelColor: "af3a03",
        valueColor: "427b58",
        backgroundColor: "fbf1c7",
    },
    "tokyonight": {
        titleColor: "70a5fd",
        labelColor: "bf91f3",
        valueColor: "38bdae",
        backgroundColor: "1a1b27",
    },
    "onedark": {
        titleColor: "e4bf7a",
        labelColor: "8eb573",
        valueColor: "df6d74",
        backgroundColor: "282c34",
    },
    "onedark": {
        titleColor: "e683d9",
        labelColor: "0480ef",
        valueColor: "75eeb2",
        backgroundColor: "193549",
    },
    "synthwave": {
        titleColor: "e2e9ec",
        labelColor: "ef8539",
        valueColor: "e5289e",
        backgroundColor: "2b213a",
    },
    "highcontrast": {
        titleColor: "e7f216",
        labelColor: "00ffff",
        valueColor: "fff",
        backgroundColor: "000",
    },
    "highcontrast": {
        titleColor: "ff6e96",
        labelColor: "79dafa",
        valueColor: "f8f8f2",
        backgroundColor: "282a36",
    },
    "prussian": {
        titleColor: "bddfff",
        labelColor: "38a0ff",
        valueColor: "6e93b5",
        backgroundColor: "172f45",
    },
    "monokai": {
        titleColor: "eb1f6a",
        labelColor: "e28905",
        valueColor: "f1f1eb",
        backgroundColor: "272822",
    },
    "vue": {
        titleColor: "41b883",
        labelColor: "41b883",
        valueColor: "273849",
        backgroundColor: "fffefe",
    },
    "vue-dark": {
        titleColor: "41b883",
        labelColor: "41b883",
        valueColor: "fffefe",
        backgroundColor: "273849",
    },
    "shades-of-purple": {
        titleColor: "fad000",
        labelColor: "b362ff",
        valueColor: "a599e9",
        backgroundColor: "2d2b55",
    },
    "nightowl": {
        titleColor: "c792ea",
        labelColor: "ffeb95",
        valueColor: "7fdbca",
        backgroundColor: "011627",
    },
    "buefy": {
        titleColor: "7957d5",
        labelColor: "ff3860",
        valueColor: "363636",
        backgroundColor: "ffffff",
    },
    "blue-green": {
        titleColor: "2f97c1",
        labelColor: "f5b700",
        valueColor: "0cf574",
        backgroundColor: "040f0f",
    },
    "algolia": {
        titleColor: "00AEFF",
        labelColor: "2DDE98",
        valueColor: "FFFFFF",
        backgroundColor: "050F2C",
    },
    "great-gatsby": {
        titleColor: "ffa726",
        labelColor: "ffb74d",
        valueColor: "ffd95b",
        backgroundColor: "000000",
    },
   "darcula": {
        titleColor: "BA5F17",
        labelColor: "84628F",
        valueColor: "BEBEBE",
        backgroundColor: "242424",
    },
    "bear": {
        titleColor: "e03c8a",
        labelColor: "00AEFF",
        valueColor: "bcb28d",
        backgroundColor: "1f2023",
    },
    "solarized-dark": {
        titleColor: "268bd2",
        labelColor: "b58900",
        valueColor: "859900",
        backgroundColor: "002b36",
    },
    "solarized-light": {
        titleColor: "268bd2",
        labelColor: "b58900",
        valueColor: "859900",
        backgroundColor: "fdf6e3",
    },
    "chartreuse-dark": {
        titleColor: "7fff00",
        labelColor: "00AEFF",
        valueColor: "fff",
        backgroundColor: "000",
    },
   "nord": {
        titleColor: "81a1c1",
        valueColor: "d8dee9",
        labelColor: "88c0d0",
        backgroundColor: "2e3440",
    },
   " gotham": {
        titleColor: "2aa889",
        labelColor: "599cab",
        valueColor: "99d1ce",
        backgroundColor: "0c1014",
    },
    "material-palenight": {
        titleColor: "c792ea",
        labelColor: "89ddff",
        valueColor: "a6accd",
        backgroundColor: "292d3e",
    },
    "graywhite": {
        titleColor: "24292e",
        labelColor: "24292e",
        valueColor: "24292e",
        backgroundColor: "ffffff",
    },
    "vision-friendly-dark": {
        titleColor: "ffb000",
        labelColor: "785ef0",
        valueColor: "ffffff",
        backgroundColor: "000000",
    },
    "ayu-mirage": {
        titleColor: "f4cd7c",
        labelColor: "73d0ff",
        valueColor: "c7c8c2",
        backgroundColor: "1f2430",
    },
    "midnight-purple": {
        titleColor: "9745f5",
        labelColor: "9f4bff",
        valueColor: "ffffff",
        backgroundColor: "000000",
    },
    "graywhite": {
        titleColor: "e07a5f",
        labelColor: "edae49",
        valueColor: "ebcfb2",
        backgroundColor: "373f51",
    },
    "flag-india": {
        titleColor: "ff8f1c",
        labelColor: "250E62",
        valueColor: "509E2F",
        backgroundColor: "ffffff",
    },
    "omni": {
        titleColor: "FF79C6",
        labelColor: "e7de79",
        valueColor: "E1E1E6",
        backgroundColor: "191622",
    },
    "react": {
        titleColor: "61dafb",
        labelColor: "61dafb",
        valueColor: "ffffff",
        backgroundColor: "20232a",
    },
    "maroongold": {
        titleColor: "F7EF8A",
        labelColor: "F7EF8A",
        valueColor: "E0AA3E",
        backgroundColor: "260000",
    },
    "maroongold": {
        titleColor: "ffff00",
        labelColor: "ffff00",
        valueColor: "ffffff",
        backgroundColor: "002046",
    },
    "blueberry": {
        titleColor: "82aaff",
        labelColor: "89ddff",
        valueColor: "27e8a7",
        backgroundColor: "242938",
    },
}


module.exports = {
    themes,
    set_theme,
}
