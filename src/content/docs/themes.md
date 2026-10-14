---
title: Themes
description: How tern follows your Omarchy theme, which files it reads, and how to point it elsewhere.
section: reference
order: 3
---

tern has no theme of its own to configure. It wears your terminal's.

## Omarchy

By default tern reads the active Omarchy theme from:

```
~/.config/omarchy/current/theme
```

When `omarchy-theme-set` repoints that symlink, tern picks up the new colors within about two seconds, with no restart. It checks the directory and the theme files' modification times every two seconds. Editing a theme file in place works the same way.

## Which file it reads

tern tries these in order and uses the first that has colors in it:

| File | What it reads |
|---|---|
| `colors.toml` | `background`, `foreground`, `accent`, `selection_background`, `selection_foreground`, `color0`–`color15` |
| `alacritty.toml` | `[colors.primary]`, `[colors.selection]`, `[colors.normal]`, `[colors.bright]` |
| `kitty.conf` | `background`, `foreground`, `active_border_color` (as the accent), `selection_*`, `color0`–`color15` |
| `ghostty.conf` | `background`, `foreground`, `selection-*`, `palette = N=#rrggbb` |

From those, tern builds its own palette. The accent is the theme's `accent` (or blue, `color4`). Muted and subtle text are blends of foreground into background. The selection is a quiet tint of the accent, which reads better in a dense list than a full-strength highlight. Quoted mail is colored by depth with blue, magenta, cyan and green.

## Other locations

Without Omarchy, point tern at any directory holding one of those files:

```toml
[ui]
theme_dir = "~/.config/tern/theme"
```

Or set it in the environment:

```sh
TERN_THEME_DIR=~/themes/gruvbox tern
```

`theme_dir` in the config wins over `TERN_THEME_DIR`, which wins over the Omarchy default. If no theme is found, tern uses its built-in Tokyo Night. **Settings → Theme** (`,` then `5`) shows which theme is active, its palette and a preview.

## Background and transparency

```toml
[ui]
paint_background = false   # default: leave the terminal's background, so transparency works
```

Set it to `true` to fill the screen with the theme's background color instead.

## Icons

Folder, flag and attachment glyphs come from a Nerd Font, which Omarchy ships (JetBrainsMono Nerd Font). If your terminal font doesn't have them:

```toml
[ui]
icons = false
```
