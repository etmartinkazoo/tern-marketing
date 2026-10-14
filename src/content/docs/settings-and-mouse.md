---
title: Settings and mouse
description: The in-app settings screen, and what the mouse does.
section: reference
order: 4
---

## Settings

`,` opens settings. `?` opens it on the Keys tab. Switch tabs with `h` `l`, `tab`, or the number keys:

| # | Tab | |
|---|---|---|
| `1` | **General** | every `[ui]` option that's useful to change while running |
| `2` | **Accounts** | your accounts, their connection state and folders. `a` adds, `⏎` edits, `d` removes. See [Accounts](/docs/accounts/) |
| `3` | **Calendars** | calendar and contacts servers, and the calendars found on each. `a` `⏎` `d` manage servers, `space` shows or hides a calendar, `*` makes one the default, `$` syncs |
| `4` | **Keys** | every shortcut. `/` filters |
| `5` | **Theme** | the active theme, its palette and a preview |

### General

| Section | Setting | Key in `[ui]` |
|---|---|---|
| Reading | Group into threads | `threads` |
| Reading | Start threads folded | `collapse_threads` |
| Reading | Mark read after | `mark_read_ms` (0–10000 ms) |
| Writing | Undo send window | `undo_send_secs` (0–60 s) |
| Calendar | Time zone | `calendar_timezone` |
| Calendar | Today in mail sidebar | `agenda_in_mail` |
| Calendar | Notifications | `notifications` |
| Calendar | Remind before | `reminder_minutes` (0–120 min) |
| Calendar | Zoom link | `zoom_link` |
| Calendar | Meet account | `meet_account` |
| Layout | Sidebar width | `sidebar_width` (12–60 columns) |
| Layout | Message list width | `list_percent` (20–80 %) |
| Layout | Nerd Font icons | `icons` |
| Layout | Paint background | `paint_background` |
| Layout | Mouse | `mouse` |
| Layout | Date format | `date_format` |
| Files | Download folder | `download_dir` |
| Files | External editor | `editor` |

`⏎` or `space` toggles a switch or starts editing a value. `+` and `-` step numbers. Changes apply immediately and are saved to `config.toml` in place: your comments, ordering and anything tern doesn't manage stay as you wrote them. Each setting is described on the [Configuration](/docs/configuration/) page.

## Mouse

The mouse is on by default (`mouse = true`).

- Click a folder to open it, or a message to select it.
- Double-click a message, or a folded thread, to read it.
- The wheel scrolls whichever pane it's over. Scrolling the list doesn't change which message is selected.
- In the calendar, click an event to select it (double-click shows its details). Clicking a calendar in the sidebar shows or hides it.
- In settings, click a tab or a switch. Click a value twice to edit it.

Shift-drag still selects text in most terminals. To get the terminal's plain selection back, turn **Mouse** off in settings.
