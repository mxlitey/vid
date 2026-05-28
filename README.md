<p align="center">
  <img src="public/favicon.png" alt="Vid Logo" width="80" height="80" />
</p>

<h1 align="center">Vid</h1>

<p align="center">
  <strong>🎨 极简风格的视频播放平台</strong>
</p>

<p align="center">
  基于 React + TypeScript + Video.js 构建的现代化视频播放应用，<br />
  暗色主题、流畅交互、响应式设计，带来沉浸式的观看体验。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Video.js-8.21-049FD9?logo=video.js&logoColor=white" alt="Video.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-5.0-F5A623?logo=zustand&logoColor=white" alt="Zustand" />
</p>

---

## ✨ 特性

- 🎬 **视频播放** — 基于 Video.js 的高品质播放器，支持倍速播放、封面图、响应式布局
- 🔍 **实时搜索** — 按标题和描述即时过滤视频内容
- 🌙 **暗色主题** — 精心设计的深色 UI，减轻视觉疲劳
- 📱 **响应式设计** — 完美适配桌面端与移动端
- ⚡ **快速导航** — React Router 驱动的流畅页面切换
- 🎯 **状态管理** — Zustand 轻量级状态管理，简洁高效
- 🖼 **视频卡片** — 悬停动画、封面预览、时长显示
- 📋 **相关推荐** — 播放页侧边栏推荐更多视频

## 🛠 技术栈

| 技术 | 用途 |
| --- | --- |
| [React](https://react.dev/) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite](https://vite.dev/) | 构建工具 |
| [Video.js](https://videojs.com/) | 视频播放器 |
| [Tailwind CSS](https://tailwindcss.com/) | 样式方案 |
| [Zustand](https://zustand.docs.pmnd.rs/) | 状态管理 |
| [React Router](https://reactrouter.com/) | 路由管理 |
| [Lucide React](https://lucide.dev/) | 图标库 |

## 📁 项目结构

```
vid/
├── public/
│   ├── favicon.png          # 应用图标
│   └── videos.json          # 视频数据源
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # 顶部导航栏（搜索 + Logo）
│   │   ├── VideoCard.tsx    # 视频卡片组件
│   │   └── VideoPlayer.tsx  # Video.js 播放器封装
│   ├── hooks/
│   │   └── useTheme.ts      # 主题切换 Hook
│   ├── lib/
│   │   └── utils.ts         # 工具函数（cn）
│   ├── pages/
│   │   ├── Home.tsx         # 首页（视频列表）
│   │   └── Play.tsx         # 播放页（播放器 + 推荐）
│   ├── store/
│   │   └── videoStore.ts    # Zustand 全局状态
│   ├── types/
│   │   └── video.ts         # TypeScript 类型定义
│   ├── App.tsx              # 根组件（路由配置）
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/mxlitey/vid.git
cd vid

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📝 脚本说明

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器（热更新） |
| `npm run build` | TypeScript 类型检查 + 生产构建 |
| `npm run preview` | 预览生产构建结果 |
| `npm run lint` | ESLint 代码检查 |
| `npm run check` | TypeScript 类型检查 |

## 📦 视频数据

视频数据存储在 `public/videos.json` 中，每条记录包含：

```json
{
  "id": 1,
  "title": "视频标题",
  "description": "视频描述",
  "cover": "封面图 URL",
  "src": "视频源 URL",
  "duration": "05:40"
}
```

## 📄 许可证

MIT License

---

<p align="center">
  设计与开发由 <a href="https://github.com/mxlitey">mxlitey</a> 构建
</p>
