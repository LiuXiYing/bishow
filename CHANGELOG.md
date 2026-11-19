# Changelog

All notable changes to Penshow. Downloads are on [GitHub Releases](https://github.com/LiuXiYing/penshow/releases).

## Penshow 1.1.0 (2026-11-19)

First Penshow release, based on Hush 1.1.0. Penshow is an independent fork; see
[ATTRIBUTION.md](ATTRIBUTION.md) for the original project and author.

- **Chinese dictation now reaches AI clean-up.** The word minimum counted only
  whitespace-separated tokens, so a Chinese sentence without spaces was treated
  as one word and skipped the provider. Han characters now count at roughly two
  per word, while English behavior is unchanged.
- **New Chinese-style identity.** An illustrated scholar icon (rice paper,
  ink and cinnabar), plus a rice-paper/ink/cinnabar palette and Chinese serif
  fallbacks for display text.
- **Chinese-first defaults.** The speech-model list now hides models that don't
  understand Chinese, Qwen3-ASR 1.7B is the featured pick, and the built-in
  clean-up prompt is a Chinese prompt (existing untouched English defaults are
  upgraded; edited prompts are left alone).
- **Mainland-China AI providers only.** The clean-up provider list now offers
  DeepSeek, Kimi, 智谱 GLM, 阿里云百炼, 硅基流动, 火山方舟 and a custom
  OpenAI-compatible endpoint. Model names can be typed or fetched from the
  provider's `/models` endpoint.
- **Rebranded app.** The bundle, window title, menu bar label and in-app copy
  now say Penshow. The bundle identifier remains `com.hush.software` for this
  release so existing settings and downloaded models keep working.

## 1.1.0 (2026-10-16)

Faster to control, quieter while you talk, and simpler to set up.

- **Double-tap for hands-free.** Double-tap your shortcut to keep recording without holding the key, even in Hold mode. Tap again to finish.
- **Paste last transcript.** Ctrl+Cmd+V (or your own shortcut) pastes your most recent dictation again. Also in the menu bar, with "Copy last transcript".
- **Your music pauses while you dictate**, and resumes when you're done, only if Hush paused it. Or choose Lower volume, Mute all sound or Do nothing.
- **Simpler settings.** Everyday options first; power-user controls in collapsed Advanced groups; extra AI providers behind "More providers".
- **Clearer model choice.** Fast (Parakeet V3, recommended), Live preview (Nemotron Streaming) and Most accurate (Granite Speech 4.1, for Macs with 16 GB or more).
- **Polish everywhere.** Every screen uses the same design system as hush.software, in light and dark mode.

Upgrading: install over 1.0. The first launch spends up to a minute preparing the speech engine for your Mac's GPU, once. "Mute while recording" becomes "Mute all sound".

## 1.0.0 (2026-10-16)

Hush is free and open source under the MIT license. No trial, no license key, no account.

- **Faster speech recognition** on the GPU with Metal, about twice as fast as 0.8 on an M1. The model warms up at launch.
- **Hold or tap** Fn to talk; **live preview** of your words as you speak.
- **AI clean-up, rebuilt:** one system with a provider (Groq, OpenAI, Anthropic, OpenRouter, Cerebras, a custom endpoint or Apple Intelligence) and a level. Falls back to your raw text after 4 seconds.
- **Per-app styles:** Default, Message, Email, Code or Raw.
- **Voice snippets** that match regardless of capitals and punctuation, inside a sentence.
- **Filler-word removal without AI**, in many languages.
- **More models**, every download verified against a checksum.
- **More reliable** pasting, microphone-disconnect recovery, a Secure Input warning, and recordings kept when transcription fails.
- **New look:** a cream and burgundy design system with a proper dark mode.
