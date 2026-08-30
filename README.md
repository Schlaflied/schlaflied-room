# Schlaflied — a room by Syna

一个不以“个人品牌”为目的的双语静态网站。它把写作、AI、学习、开源与生活的痕迹放在同一张桌面上；不自动同步私人资料，也不把人生压缩成履历。

## 架构

- **Astro**：静态页面与路由。
- **`/zh/` 与 `/en/`**：完整双语入口；根路径根据浏览器语言做轻量跳转，并始终保留手动语言链接。
- **CSS + Astro View Transitions**：纸页／阅读室视觉，无动画库。
- **Cloudflare Workers 静态资源**：`wrangler.jsonc` 已为 `dist/` 配置。
- **主题**：亮暗模式独立于语言，优先尊重系统设定，手动选择会保存在浏览器本地。

## 本地运行

需要 Node.js 20.3+。

```bash
npm install
npm run dev
```

打开终端显示的本地地址。生产构建：

```bash
npm run build
npm run preview
```

## 如何加内容

- 中文首页：`src/pages/zh/index.astro`
- 英文首页：`src/pages/en/index.astro`
- 首页卡片文案：`src/components/Home.astro`
- 页面外观与主题：`src/layouts/Base.astro`
- 写作页面：`src/pages/{zh,en}/writing.astro`
- 项目页面：`src/pages/{zh,en}/works/index.astro`
- 随记、案件笔记、猫片入口：`src/pages/{zh,en}/notes.astro`

请只把你已经选择为公开的文字、图像和项目事实放进仓库。不要上传私人 vault、法律原始证据、地址、证件信息、未公开当事人信息或含位置元数据的照片。

### 双语内容政策

界面（导航、按钮、摘要、页面标题）始终完整本地化。内容不强制逐段一一翻译：

- 写作以中文原作为先；英文使用作者导读、背景与挑选后认真翻译的节选。
- 项目介绍可分别用两种语言撰写，而不是硬翻译营销话术。
- 找不到对应翻译时，明确标注原文语言或提供英文／中文导读，不悄悄机器翻译。

## GitHub 与 Cloudflare 部署

1. 在 GitHub 建立公开仓库并推送本项目。
2. 登录 Cloudflare，进入 **Workers & Pages**，选择 **Create application → Workers → Import a repository**。
3. 选中这个 GitHub 仓库；构建命令填 `npm run build`，输出目录填 `dist`。
4. Cloudflare 会为每次推送构建，并提供 `*.workers.dev` 测试地址。
5. 确认无误后，在 Workers 的 **Settings → Domains & Routes** 绑定自己的域名。

也可以在本地登录 Wrangler 后部署：

```bash
npx wrangler login
npm run build
npx wrangler deploy
```

部署前请先确认 `wrangler.jsonc` 中的 `name` 没有和自己账号下已有 Worker 重名。Cloudflare 的认证、域名和部署是账户操作，需要网站所有者亲自确认。

## 动效与无障碍

动效刻意保持克制：主题切换、卡片轻微浮起、Astro 页面淡入。`prefers-reduced-motion` 会关闭或大幅缩短这些动效；键盘用户有“跳到正文”链接。

## 许可证与内容权利

源代码采用 [MIT License](LICENSE)。除非页面或文件另行注明，所有文字、图像、故事、项目叙事和其他站点内容的著作权仍归作者所有，**不**因代码开源而自动授权转载、训练、改编或商业使用。
