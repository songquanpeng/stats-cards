# 网站数据卡片
## 描述
在 README 中展示你在一些流行的网站的数据。

支持以下网站：
- [x] 知乎
- [x] B 站
- [x] LeetCode
- [x] LeetCode 中文站
- [x] 掘金（By [@jiweiyuan](https://github.com/jiweiyuan)）
- [ ] 思否
- [x] 牛客
- [x] CSDN
- [x] Github
- [ ] Steam
- [ ] 网易云音乐

支持多种主题，使用时在 url 后加入 `&theme=<theme_name>` 即可，例如：
`https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=dark`

<p>
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=light" alt="JustSong's LeetCode Stats" width="49%" />
  <img src="https://stats.justsong.cn/api/leetcode/?username=quanpeng&theme=dark" alt="JustSong's LeetCode Stats" width="49%" /> 
</p>

主题列表：`light`、`dark`、`merko`、`gruvbox`、`gruvbox_light`、`tokyonight`、`onedark`...

完整主题列表参见 [common/theme.js](./common/theme.js)。

## 演示
GitHub：`https://stats.justsong.cn/api/github?username=songquanpeng`

![我的 GitHub 数据](https://stats.justsong.cn/api/github?username=songquanpeng)

知乎：`https://stats.justsong.cn/api/zhihu?username=excited-vczh`（注意是你的 id，即点开你的知乎主页，URL 中最后一段）

![轮子哥的知乎数据](https://stats.justsong.cn/api/zhihu?username=excited-vczh)

B 站：`https://stats.justsong.cn/api/bilibili/?id=666`

![id 为 666 的用户的 B 站数据](https://stats.justsong.cn/api/bilibili/?id=666)

LeetCode 英文站：`https://stats.justsong.cn/api/leetcode/?username=quanpeng`

![我的 LeetCode 数据](https://stats.justsong.cn/api/leetcode/?username=quanpeng)

LeetCode 中文站：`https://stats.justsong.cn/api/leetcode?username=quanpeng&cn=true`

![力扣数据](https://stats.justsong.cn/api/leetcode?username=quanpeng&cn=true)

LeetCode 中文站英文站双修：`https://stats.justsong.cn/api/leetcode?username=quanpeng&cn_username=quanpeng`

![我的 LeetCode 数据](https://stats.justsong.cn/api/leetcode/?username=quanpeng&cn_username=quanpeng)

掘金：`https://stats.justsong.cn/api/juejin?id=1556564194374926`

![掘金数据](https://stats.justsong.cn/api/juejin?id=1556564194374926)

CSDN：`https://stats.justsong.cn/api/csdn?id=vczh`

![CSDN 数据](https://stats.justsong.cn/api/csdn?id=vczh)

牛客：`https://stats.justsong.cn/api/nowcoder?id=2004383`

![牛客数据](https://stats.justsong.cn/api/nowcoder?id=2004383)

## 其他
1. [创意参考](https://github.com/anuraghazra/github-readme-stats)
2. 如有爬虫失效，请及时提 issue！
3. 卡片本身带有阴影效果，然而有些博客主题会自动给图片加阴影效果，这样将导致出现双重阴影，解决方法是使用 img 标签和 CSS 来移除博客主题提供的阴影效果，例如：`<img src="https://stats.justsong.cn/api/leetcode?username=username&cn=true" style="box-shadow:none !important">`
4. 点击[查看都有谁在使用](https://github.com/search?q=extension%3Amd+%22stats.justsong.cn%22&type=Code)。
