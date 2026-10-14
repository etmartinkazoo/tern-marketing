---
title: Sending and drafts
description: The outbox, undo send, automatic retries, autosaved work in progress and server drafts.
section: mail
order: 6
---

tern never sends straight from the composer and hopes for the best. Every message is written to disk first.

## The outbox

When you send, the message goes to `~/.local/share/tern/outbox/`, as its RFC 822 bytes plus a small JSON record, before anything else happens. Then:

1. It waits `undo_send_secs` (10 by default). Press `^z` in that window, and it's taken out of the queue and put back in the composer.
2. It's sent over SMTP from its account.
3. On success, it's copied to Sent (unless `save_sent = false`), the message it answers is flagged `\Answered`, and any server draft it came from is deleted.
4. On failure (you're offline, the server is down, a login fails), it **stays in the outbox**, and the status bar tells you why.

Failed messages are retried after 30 seconds, then 2 minutes, then 10 minutes, then every 30 minutes, including after you restart tern. While anything is waiting, the status bar shows `⇡` and a count.

Set `undo_send_secs = 0` to skip the wait. It's also under **Settings → General → Writing** (0–60 s).

## The outbox panel

`go` opens the outbox: everything waiting, with how many times it was tried and the last error.

| Key | |
|---|---|
| `j` `k` | move |
| `r` | retry now |
| `⏎` `e` | take it out of the queue and edit it |
| `d` | drop it |
| `esc` `q` | close |

## Work in progress is autosaved

While you write, the composer is saved to `~/.local/share/tern/draft.json` every couple of seconds. If tern closes before you send, from a crash, a closed terminal or a quit, the next start tells you an unsent message was found. `gr` picks it up where you left off, with the same sending account.

## Server drafts

| | |
|---|---|
| `:w` in the composer | save the message to the account's Drafts folder |
| `gd` | open Drafts |
| `⏎` on a message in Drafts | continue it in the composer |

When you send a message you continued from Drafts, the draft is deleted from the server.
