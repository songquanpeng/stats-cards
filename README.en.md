<p align="right">
    <a href="./README.md">中文</a> | <strong>English</strong>
</p>

<div align="center">

# Stats Cards

_✨ Show your LeetCode & GitHub stats in GitHub Profile. ✨_

</div>

<p align="center">
  <a href="https://raw.githubusercontent.com/songquanpeng/stats-cards/master/LICENSE">
    <img src="https://img.shields.io/github/license/songquanpeng/stats-cards?color=brightgreen" alt="license">
  </a>
  <a href="https://github.com/songquanpeng/stats-cards/releases/latest">
    <img src="https://img.shields.io/github/v/release/songquanpeng/stats-cards?color=brightgreen&include_prereleases" alt="release">
  </a>
  <a href="https://stats.justsong.cn/">
    <img src="https://stats.justsong.cn/api/website/?url=https://stats.justsong.cn/" alt="release">
  </a>
</p>

<p align="center">
  <a href="#Description">Description</a>
  ·
  <a href="#Demonstration">Demonstration</a>
  ·
  <a href="https://stats.justsong.cn/reward.html">Reward</a>
  ·
  <a href="https://github.com/songquanpeng/stats-cards/issues">Feedback</a>
</p>

## Description

### Supported Websites

Currently, we support the following websites, PR is welcomed:

- [x] Zhihu
- [x] Bilibili
- [x] LeetCode
- [x] LeetCode (China Version)
- [x] Juejin（By [@jiweiyuan](https://github.com/jiweiyuan)）
- [x] NowCoder
- [x] CSDN
- [x] GitHub
- [ ] Steam
- [ ] NetEase Music
- [x] Custom Website Monitoring

### Supported Themes

We support multiple themes.

Multiple themes are supported, just add `&theme=<theme_name>` after the url. For example:
`https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=dark`

<p>
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=light" alt="JustSong's LeetCode Stats" width="49%" />
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=dark" alt="JustSong's LeetCode Stats" width="49%" /> 
</p>

Theme list: `light`、`dark`、`merko`、`gruvbox`、`gruvbox_light`、`tokyonight`、`onedark`...

For a complete list of themes see [common/theme.js](./common/theme.js)
, or see [theme list of github-readme-stats](https://github.com/anuraghazra/github-readme-stats/tree/master/themes).

### Supported Languages

The default language is English. If you want to change it to Chinese, just add `&lang=zh-CN` after the url, for example:
<p>
  <img src="https://stats.justsong.cn/api/juejin?id=1556564194374926&lang=zh-CN" alt="掘金酱的掘金数据" width="49%" />
  <img src="https://stats.justsong.cn/api/bilibili/?id=483246073&lang=zh-CN" alt="蓝天的 B 站数据" width="49%" /> 
</p>

For the support of other languages, PR is always welcomed.

## Demonstration

### Custom Website Monitoring

Custom website monitoring：`https://stats.justsong.cn/api/website/?url=https://github.com/&style=flat&logo=github`

Where style and logo are optional, for specific values please refer
to [shield.io](https://shields.io/category/monitoring#:~:text=PREFIX%3E%26suffix%3D%3CSUFFIX%3E-,Styles,-The%20following%20styles)
.

> Note that monitoring is not real-time, it is affected by the set cache time

![GitHub monitoring](https://stats.justsong.cn/api/website/?url=https://github.com/&style=flat)
![Google monitoring](https://stats.justsong.cn/api/website/?url=https://www.google.com/&style=flat)
![Zhihu monitoring](https://stats.justsong.cn/api/website/?url=https://www.zhihu.com/&style=flat)

### Website Stats Display

GitHub: `https://stats.justsong.cn/api/github?username=songquanpeng`

![My GitHub Stats](https://stats.justsong.cn/api/github?username=songquanpeng)

Zhihu: `https://stats.justsong.cn/api/zhihu?username=excited-vczh`

![vczh's Zhihu Stats](https://stats.justsong.cn/api/zhihu?username=excited-vczh)

Bilibili：`https://stats.justsong.cn/api/bilibili/?id=666`

![id 为 666 的用户的 B 站数据](https://stats.justsong.cn/api/bilibili/?id=666)

LeetCode: `https://stats.justsong.cn/api/leetcode/?username=quanpeng`

![我的 LeetCode 数据](https://stats.justsong.cn/api/leetcode/?username=quanpeng)

LeetCode (China Version): `https://stats.justsong.cn/api/leetcode?username=quanpeng&cn=true`

![力扣数据](https://stats.justsong.cn/api/leetcode?username=quanpeng&cn=true)

Juejin: `https://stats.justsong.cn/api/juejin?id=1556564194374926`

![掘金数据](https://stats.justsong.cn/api/juejin?id=1556564194374926)

CSDN: `https://stats.justsong.cn/api/csdn?id=vczh`

![CSDN 数据](https://stats.justsong.cn/api/csdn?id=vczh)

Nowcoder: `https://stats.justsong.cn/api/nowcoder?id=6484283`

![牛客数据](https://stats.justsong.cn/api/nowcoder?id=6484283)

## Deployment

You can deploy through Vercel, or deploy to your own server.

### Environment Variables

When deploying, there are some environment variables that can be set, all of which are optional:

1. `BILIBILI_SESSDATA`: Bilibili's `SESSDATA` cookie.
2. `GITHUB_TOKEN`: GitHub token.
3. `STEAM_ID`: Steam personal ID, use browser to login Steam, then click personal profile, the id behind the profiles in the URL is the STEAM_ID
4. `STEAM_API_TOKEN`: According the link to get the token，https://steamcommunity.com/dev/apikey
5. `CACHE_TIME`: cache time, the unit is second, default value is  `6000`, namely 100 minutes.
6. `MAX_CACHE_ITEMS`: maximum cache items, default value is `1024`.
7. `PORT`: service port number, default value is `3000`.

### Deploy to Vercel

1. fork this repo。
2. Import your repo on [Vercel](https://vercel.com/new).
3. Set the above environment variables.。

### Deploy to Your Own Server

Steps:

```shell
git clone https://github.com/songquanpeng/stats-cards.git
cd stats-cards
npm i
node ./app.js
# or
pm2 start ./app.js --name stats-cards
```

Set environment variables: `ENV_NAME=value cmd`

+ For example: `PORT=3000 node ./app.js`

## Others

1. [Idea reference & theme reference](https://github.com/anuraghazra/github-readme-stats)
2. If any crawler fails, please file an issue in time!
3. The card itself has a shadow effect, but some blog themes will automatically add a shadow effect to the image, which
   will cause a double shadow. The solution is to use the img tag and CSS to remove the shadow effect provided by the
   blog theme. For
   example: `<img src="https://stats.justsong.cn/api/leetcode?username=username&cn=true" style="box-shadow:none !important">`
4. Click to [check who is using this](https://github.com/search?q=extension%3Amd+%22stats.justsong.cn%22&type=Code).
