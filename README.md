<h1 align="center">笔受 · Bishow</h1>

<p align="center"><strong>闻其言，成其文。</strong></p>

<p align="center">
  按住一个键说话，松开即把文字输入到当前应用。<br>
  语音识别在 Mac 本地完成，可选接入你自己配置的 AI 服务做润色。
</p>

<p align="center">
  <img alt="macOS, Apple Silicon" src="https://img.shields.io/badge/macOS-Apple%20Silicon-333">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-333"></a>
</p>

## 关于 / About

Bishow（笔受）是一个 macOS 语音听写应用：按住快捷键说话，松开后文字会直接输入到当前应用。语音识别在本地运行；可选启用 AI 润色，修正标点、去掉口头禅，并按应用场景调整语气。

Bishow is a macOS push-to-talk dictation app. Speech recognition runs locally on your Mac, and an optional AI clean-up step can fix punctuation, remove filler words and match the tone of the app you are typing into.

## 来源与署名 / Attribution

Bishow 基于开源项目 **Hush** 开发，在此明确说明原始项目与作者：

- 原始项目：**Hush**
- 仓库：[https://github.com/DeepanshuPal/hush](https://github.com/DeepanshuPal/hush)
- 作者：Deepanshu Pal
- 许可证：MIT
- 原始版权：Copyright (c) 2026 Deepanshu Pal

Bishow 保留了原始项目的 MIT 许可证、版权声明和第三方组件许可。Bishow 与 Hush 原作者没有隶属关系，也未获得其背书；Hush 的名称、图标和原始文案归原作者所有。更多说明见 [ATTRIBUTION.md](ATTRIBUTION.md)、[LICENSE](LICENSE) 和 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 当前状态

这是 Bishow 的初始版本，基于 Hush 1.1.0，并完成了以下调整：

- 修复中文听写因按空格计词而被跳过 AI 润色的问题
- 更换为中式应用图标：宣纸、墨色书吏、朱砂印章与毛笔
- 界面改为「宣纸 + 墨 + 朱砂」配色，标题使用中文宋体回退
- 应用内品牌文案更新为 Bishow

网站以及 bundle identifier（仍为 `com.hush.software`，以便沿用已有配置和已下载模型）会在后续重新开发中逐步替换。

## 下载

从 [Releases](https://github.com/LiuXiYing/bishow/releases) 下载最新的 Apple Silicon DMG。

- 支持 macOS 13 及以上、Apple Silicon（M1 及后续）
- 首次打开若被 Gatekeeper 拦截：右键点击 App → **打开**，或到 **系统设置 → 隐私与安全性** 点 **仍要打开**
- 应用为 ad-hoc 签名，覆盖安装后可能需要在「辅助功能」中重新授权

## 功能

- **按住即说**：按住 <kbd>Fn</kbd> 或自定义快捷键，在任意输入框听写；支持双击保持录音
- **本地识别**：Parakeet、Nemotron、Granite 等模型在本地运行，Metal 加速，可离线
- **可选 AI 润色**：支持 OpenAI 兼容接口（DeepSeek、OpenAI、Ollama 等）以及 Anthropic、Groq 等服务
- **按应用设置风格**：在 Slack 里口语化、在邮件里正式、在编辑器里保留标识符
- **自定义词汇与语音片段**：名字、术语和常用地址可以一次配置、随说随用
- **历史记录**：保存最近的听写文本和音频，可复制或重新处理
- **26 种界面语言**，支持浅色/深色模式

## 从源码构建

需要 macOS、Xcode Command Line Tools、Rust、Bun 和 CMake：

```bash
git clone https://github.com/LiuXiYing/bishow.git
cd bishow
bun install
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri dev
```

打包 Apple Silicon DMG：

```bash
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri build --target aarch64-apple-darwin --bundles dmg
```

生成位置：`src-tauri/target/aarch64-apple-darwin/release/bundle/dmg/`。更多细节见 [BUILD.md](BUILD.md)。

## 与上游同步

```bash
git remote add upstream https://github.com/DeepanshuPal/hush.git
git fetch upstream
git merge upstream/main
```

原始项目的完整 README 保留在 [README.upstream.md](README.upstream.md)，供参考。

## 目录结构

| 目录         | 内容                                               |
| ------------ | -------------------------------------------------- |
| `src/`       | 界面（React、TypeScript、Tailwind）                |
| `src-tauri/` | 核心（Rust、Tauri）：音频、语音识别、AI 润色、粘贴 |
| `website/`   | 上游网站源码（Next.js），尚未针对 Bishow 修改      |
| `docs/`      | 文档与图片                                         |

## 许可证

Bishow 以 [MIT License](LICENSE) 发布。原始项目 Hush © 2026 Deepanshu Pal；Bishow 的修改 © 2026 Bishow contributors。第三方字体、语音模型等组件的许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
