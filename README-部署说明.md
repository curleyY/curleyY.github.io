# 完整网站 · 静态部署包

这是你的**整个网站**（原 `curleyy.github.io`）的完整静态内容，纯前端，**无需构建、无需 npm install**。

## 包含内容

- `index.html` — 主站入口：真题阅读练习（四六级 / 考研）
- `assets/` — 主站 JS/CSS 打包文件 + `cet-listening`（听力）+ `cet6-pdf`（试卷 PDF）+ logo
- `clothesline/` — 子站（晾衣绳首页），访问路径 `/clothesline/`
- `contents/` — 136 套试卷正文数据（按 id 拆分，全部含正文，共约 3.4 MB）
- `listening/` — 75 套听力数据（每套的分段/题目映射）
- `sw.js` — 自注销 Service Worker（清旧缓存后自动卸载，无需理会）
- `404.html`、`.nojekyll`

## 真题数据说明（重要）

- **试卷目录（题库列表）**已编译进 `assets/index-*.js`，打开首页即可看到全部套数。
- **正文**在 `contents/*.json`（136 套），**全部在包内，本地读取，不依赖外网**。
- **听力音频**是**外链**：75 套的 `src` 指向 `cdn.jsdelivr.net`（62 套）与 `ghproxy.net`（13 套）上的公开 GitHub 音频，需要联网才能播放；`assets/cet-listening/` 里另有 2 个本地音频文件。
- **试卷 PDF** 在 `assets/cet6-pdf/`（5 份，文件名含中文「第N套」，**打包/解压务必保留 UTF-8 文件名**，否则页面拼出的 PDF 路径会 404）。

## 在新对话怎么部署

这是**静态站点**，把本文件夹作为部署目录即可，用静态托管（底层 `python3 -m http.server $PORT --bind 0.0.0.0`）。

| 参数 | 值 |
| --- | --- |
| directory | 本文件夹绝对路径 |
| language | `static`（或 `auto`） |
| port | `3000` |
| installCmd | 留空 |
| startCmd | 留空（静态站自动托管） |
| entryHtml | `index.html` |
| userAskedToPublish | `true`（你明确要发布时） |

最省事：在新对话里直接说
> 部署 `D:\workbuddy\2026-10-14-15-53-23\site-web-package`，这是静态站点

## 注意

- 纯静态站：只能托管前端，无法提供后端/数据库（本站本来也不需要）。
- 原站托管在 GitHub Pages（`curleyy.github.io`）。若要**沿用原域名**，那是往 GitHub 仓库 `git push`（走的是另一套发布流程，不是这个静态托管包）；本包用于「在新对话/新环境重新托管一份完整网站」。
- 子站 `clothesline` 是 `/clothesline/` 下的独立页面，主入口仍是根 `index.html`。
