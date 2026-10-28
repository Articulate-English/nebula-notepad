# WTE Nebula

A cosmic-themed offline-first notepad with draggable/resizable note cards, tabs, themes, password-locked private tabs, and a built-in background image picker.

Two views, switched from the header (remembered between visits):

- **Board** — Trello-style lists (Inbox / Doing / Done by default) with cards you drag between lists. Cards carry labels, due dates and checklists; clicking one opens a full card back with the same tabbed editor, password-locked tabs and HTML mode. The ☰ menu holds search, label filters, board stats and an activity feed.
- **Canvas** — the original free-form floating-note desktop.

Data lives in localStorage (`nebula` for notes, `nebula-board` for lists + activity). Existing notes migrate automatically into the first list — nothing is lost.

## Live Web App
https://articulate-english.github.io/nebula-notepad/

## Install
- **Desktop (browser):** Open the live link → Chrome/Edge/Safari menu → Install app
- **iOS:** Safari → Share → Add to Home Screen
- **Android:** Chrome menu → Add to Home Screen
- **Desktop binaries:** Download from GitHub Releases (Windows MSI, macOS DMG, Linux AppImage)

## Desktop Build
Requires Rust + Tauri:
```bash
cargo install tauri-cli --version 1.6.6 --locked
cargo tauri build
```

`cargo tauri build` runs `scripts/stage-web-assets.js` first (wired as
`beforeBuildCommand`), which copies the web assets into `dist/`. Tauri refuses a
`distDir` that contains `src-tauri/`, so the assets are staged into `dist/`
rather than read from the repo root — that also keeps GitHub Pages serving
`index.html` from the root unchanged. `dist/` is gitignored.

Binaries land in `src-tauri/target/release/bundle/` (MSI on Windows, DMG on
macOS, AppImage/deb on Linux). CI builds all three on every push to `main`.

## Logo Placeholder
See `logo-placeholder/LOGO_PLACEHOLDER.txt` for the art prompt. Replace files in `icons/` and `screenshots/` before release.

## Store Roadmap
See `STORE.md`.
