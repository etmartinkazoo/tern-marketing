---
title: Files
description: Everything tern reads and writes on disk, and what's safe to delete.
section: reference
order: 7
---

tern follows the XDG base directories. The paths below are the defaults. `XDG_CONFIG_HOME`, `XDG_CACHE_HOME` and `XDG_DATA_HOME` move them.

## Config

| Path | |
|---|---|
| `~/.config/tern/config.toml` | your accounts, servers and settings. Written by `--init`, and edited in place by Settings |
| `~/.config/omarchy/current/theme/` | read for colors (or `theme_dir`, `TERN_THEME_DIR`) |

## Data (keep these)

`~/.local/share/tern/` holds things that would be lost if deleted:

| Path | |
|---|---|
| `outbox/<id>.eml`, `outbox/<id>.json` | messages waiting to send, or retrying. Each is the message itself plus a small record |
| `draft.json` | the message you were writing, autosaved every couple of seconds. `gr` resumes it |
| `snoozed.json` | snoozed messages: account, Message-ID, subject, when, and where they go back to |
| `oauth/<account>.json` | OAuth access and refresh tokens, readable only by you |

## Cache (safe to delete)

`~/.cache/tern/` is rebuilt from your servers:

| Path | |
|---|---|
| `contacts.json` | every contact from your CardDAV address books |
| `calendars.json` | every calendar and its events, so the calendar opens instantly and works offline |
| `state.json` | which accounts are folded in the sidebar |
| `view/<uid>.html` | messages opened in the browser with `o` |
| `drafts/` | temporary files while you edit a message in `$EDITOR` with `:e` |

## Elsewhere

| Path | |
|---|---|
| `download_dir` (default `~/Downloads`) | attachments saved with `S` |

## Mail itself

Mail stays on your IMAP server. tern doesn't keep a local copy of your mailbox, so there's no Maildir to sync and nothing to rebuild.
