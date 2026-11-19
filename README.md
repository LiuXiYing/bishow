<p align="center">
  <img src="src-tauri/icons/128x128.png" width="112" alt="笔受 Penshow 应用图标" />
</p>

<h1 align="center">笔受 · Penshow</h1>

<p align="center">
  <strong>闻其言，成其文。</strong>
</p>

<p align="center">
  为中文表达而设计的 macOS 语音输入工具。<br />
  按住说话，松开成文。让想法自然地进入每一个输入框。
</p>

<p align="center">
  <a href="https://github.com/LiuXiYing/penshow/releases/latest"><strong>下载笔受</strong></a>
  &nbsp;·&nbsp;
  <a href="#三步开始">快速开始</a>
  &nbsp;·&nbsp;
  <a href="#核心能力">了解功能</a>
  &nbsp;·&nbsp;
  <a href="#从源码构建">从源码构建</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/macOS-13%2B-4B5563?style=flat-square" alt="macOS 13+" />
  <img src="https://img.shields.io/badge/Apple_Silicon-ARM64-4B5563?style=flat-square" alt="Apple Silicon" />
  <img src="https://img.shields.io/badge/License-MIT-4B5563?style=flat-square" alt="MIT License" />
</p>

---

## 不只是听写，更是表达

打字要求你一边思考，一边组织词句，一边寻找键盘上的下一个字。说话则不同：想法往往先于文字出现。

**笔受希望缩短这段距离。**

它将语音识别放在 Mac 本地完成；如果你愿意，还能调用自己选择的 AI 服务，把口语中的重复、停顿和自我修正整理成更易阅读的文字。整个过程直接发生在你正在使用的应用里，不必先打开一个转写网页，再复制粘贴。

> **说出想法，留下文字。**

### 一句话，看见区别

**口述原文**

> 我们下周，呃，就是下周三开个会，主要是讨论一下这个新功能的需求。

**开启 AI 润色后（效果示意）**

> 我们下周三开会，主要讨论新功能的需求。

笔受的目标不是替你改写观点，而是在保留原意的前提下，让文字更清楚。实际整理效果取决于所选 AI 模型及提示词。

---

## 为什么选择笔受

### 01 / 中文优先，理解中文表达习惯

笔受不是把一款面向英文的听写软件简单翻译成中文。

- **只呈现支持中文的语音模型**，减少无效选择。
- **内置中文润色规则**，针对口头禅、重复表达、错别字、全角标点、自我纠正和口述数字进行整理。
- **适合中文与英文混合的输入场景**，包括技术名词、产品名称与日常交流。
- **接入国内常用 AI 服务**，无需依赖单一海外厂商。

### 02 / 本地识别，离线也能说

语音识别在 Mac 上运行，使用本地模型与 Metal 加速。模型下载完成后，即使没有网络，也可以进行基础语音听写。

**本地识别与云端润色是两件独立的事。** 不开启 AI 润色，就不需要为了润色把识别文本发送给第三方大模型；开启后，才会调用你配置的服务。你可以按自己的使用场景选择便利性与数据处理方式。

### 03 / 按住即说，不打断手头工作

无需改变原有写作习惯。

- 按住 `Fn` 或自定义快捷键，开始说话。
- 松开按键，识别结果写入当前应用的输入位置。
- 需要说一大段话时，可以双击快捷键保持录音，再按一次结束。

聊天、邮件、笔记、文档、编辑器——输入光标在哪里，文字就去哪里。部分应用可能受系统权限或输入控件限制。

### 04 / 文字有分寸，语气随场景变化

同一句话，不应该在每个场合都用同一种表达方式。

笔受支持按应用设置文本整理规则：日常聊天可以自然一点，邮件可以正式一点，代码编辑器里则可以强调保留标识符、大小写与技术术语。

此外，你还能调整润色提示词、维护自定义词汇与语音片段，并在历史记录中回看、复制或重新处理已识别内容。

---

## 核心能力

| 能力             | 你可以做什么                                   |
| :--------------- | :--------------------------------------------- |
| **快捷语音输入** | 按住说话、松开输入；支持自定义快捷键与保持录音 |
| **本地语音识别** | 使用支持中文的模型，在设备上完成转写           |
| **实时预览**     | 选择流式模型，在说话过程中查看识别进展         |
| **AI 文字整理**  | 可选去口癖、修正明显错误、整理标点与表达       |
| **按应用定制**   | 为不同软件设置不同的文字风格与处理规则         |
| **个人词汇**     | 配置常用专有名词与语音片段                     |
| **历史记录**     | 回看、复制与重新处理识别结果                   |
| **开放模型接口** | 使用预设 AI 服务商，或填写兼容 OpenAI 的接口   |

### 一条尽可能短的输入路径

```text
按住快捷键       本地语音识别          可选 AI 润色        当前输入框
    ●  ────────────→  ●  ────────────→  ●  ────────────→  ●
      说出你的想法       得到原始文本          整理表达            继续工作
```

不需要额外打开转写页面，也不需要在不同应用间来回复制。

---

## 三步开始

**1. 下载并安装**

前往 [GitHub Releases](https://github.com/LiuXiYing/penshow/releases/latest)，下载适用于 Apple Silicon 的 `Penshow-*-aarch64.dmg`，将应用拖入「应用程序」文件夹。

**2. 完成首次设置**

启动笔受，根据提示授予「麦克风」和「辅助功能」权限，并选择、下载一个中文语音识别模型。首次下载模型需要网络连接。

**3. 开始说话**

将光标放入任意可用的输入框，按住 `Fn` 说话，松开即可输入识别出的文字。如需自动整理表达，可以进一步配置 AI 润色服务。

> **运行环境：** macOS 13 或更新版本，Apple Silicon（ARM64）。当前提供的发行版面向 Apple Silicon，不代表 Windows、Linux 或 Intel Mac 已获支持。

<details>
<summary><strong>首次打开被 macOS 拦截？</strong></summary>

当前发布包使用 ad-hoc 签名，macOS 可能提示无法验证开发者。请先确认文件来自本仓库的 Releases 页面，再尝试右键应用选择「打开」；如有需要，前往「系统设置 → 隐私与安全性」完成确认。

如果覆盖安装或重新构建后辅助功能权限失效，可以退出应用，并在终端执行：

```bash
tccutil reset Accessibility com.hush.software
```

随后重新启动笔受并授权。当前版本沿用上游 Hush 的 bundle identifier `com.hush.software`，以兼容既有配置；如果你同时使用 Hush，请留意这一点。

</details>

---

## 选择适合自己的识别模型

笔受提供多种支持中文的本地语音模型，方便在识别质量、响应速度与设备资源之间作出选择。

| 本地模型                    | 适用场景                             | 默认量化模型体积（约） |
| :-------------------------- | :----------------------------------- | ---------------------: |
| **Qwen3-ASR 1.7B** · 推荐   | 日常中文、较复杂的语音内容、中英混排 |                 2.2 GB |
| **Qwen3-ASR 0.6B**          | 更重视响应速度与内存占用             |                 850 MB |
| **Nemotron Streaming 0.6B** | 希望在说话过程中看到实时识别预览     |                 700 MB |

模型从 Hugging Face 下载，下载过程包含 SHA-256 校验，已经下载的模型可以复用。以上为模型文件的近似体积，并非应用整体内存占用或性能保证；实际体验会随设备与语音内容变化。

---

## AI 润色：选择权在你手中

本地识别已经能完成基础听写。**AI 润色是可选的增强能力，不是使用笔受的前提。**

需要更完整的文字整理时，可以使用自己配置的 API Key，连接以下服务：

**DeepSeek** · **Kimi** · **智谱 GLM** · **阿里云百炼** · **硅基流动** · **火山方舟**

也支持填写自定义的 **OpenAI 兼容接口**。模型名称可手动填写，也可以尝试从服务商的模型列表接口读取。

默认的中文提示词可修改，你可以决定文字需要被整理到什么程度：只修正明显的口语冗余，或者进一步调整某个应用中的行文语气。

### 关于隐私与网络

- **语音识别：** 在本机执行；模型文件首次下载需要联网。
- **不启用 AI 润色：** 基础听写无需调用云端大模型。
- **启用 AI 润色：** 识别出的文本会发送至你选择并配置的第三方服务进行处理；请遵循对应服务商的隐私政策与计费规则。
- **敏感内容：** 如果不希望文本发送到第三方服务，关闭 AI 润色，仅使用本地识别即可。

---

## 从源码构建

笔受使用 **Tauri 2 + Rust** 构建桌面核心，以 **React + TypeScript** 实现设置界面；语音识别由本地原生组件处理。

需要一台 Mac，并预先安装 Xcode Command Line Tools、Rust、Bun 与 CMake。

```bash
# 获取源码
git clone https://github.com/LiuXiYing/penshow.git
cd penshow

# 安装前端依赖
bun install

# 启动开发版本
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri dev
```

构建适用于 Apple Silicon 的 DMG：

```bash
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri build \
  --target aarch64-apple-darwin --bundles dmg
```

构建产物位于：

```text
src-tauri/target/aarch64-apple-darwin/release/bundle/dmg/
```

目录结构简览：

```text
penshow/
├── src/             # React / TypeScript 界面
├── src-tauri/       # Rust / Tauri 桌面核心与语音处理
├── assets/          # 项目资源
├── docs/            # 文档
└── scripts/         # 项目脚本
```

---

## 开源与致谢

笔受基于 [Hush](https://github.com/DeepanshuPal/hush)（作者：[Deepanshu Pal](https://github.com/DeepanshuPal)）继续开发，遵循 **MIT License**。

在 Hush 的开源基础上，Penshow 将重点放在中文用户的实际输入体验：中文模型筛选、中文 AI 润色流程修正、国内 AI 服务适配，以及以「宣纸、墨、朱砂」为灵感的视觉设计。

我们尊重并保留上游项目的版权及许可声明。Penshow 是独立的社区衍生项目，与 Hush 原作者不存在隶属或背书关系。更多信息请参阅 [ATTRIBUTION.md](ATTRIBUTION.md)、[LICENSE](LICENSE) 与 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

欢迎通过 [Issues](https://github.com/LiuXiYing/penshow/issues) 反馈问题与建议，也欢迎阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 参与改进。

---

<p align="center">
  <strong>笔受 · Penshow</strong><br />
  <sub>让语言自然流动，让文字恰好落笔。</sub>
</p>
