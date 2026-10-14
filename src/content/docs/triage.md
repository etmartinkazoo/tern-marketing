---
title: Triage
description: Archive, trash, junk, move, flag and snooze in one key, on one message or many.
section: mail
order: 2
---

Each triage action is one key. It acts on the selected message, or on the conversation when threads are folded. If you've marked messages, it acts on all of them instead.

| Key | |
|---|---|
| `e` | archive |
| `d` `#` `Del` | trash. Inside Trash, or on an account with no Trash folder, it deletes for good |
| `!` | junk |
| `M` | move to a folder. Type to narrow the list, `⏎` to pick |
| `s` | flag / unflag |
| `u` | read / unread |
| `b` | snooze until a time. See [Snooze](/docs/snooze/) |

## Marks

| Key | |
|---|---|
| `x` | mark or unmark the selected row, then move down |
| `X` | mark everything in view, or clear the marks if there are any |
| `esc` | clear marks |

With marks set, `e`, `d`, `!`, `M`, `s`, `u` and `b` apply to every marked message. A common pattern is to filter with `/`, press `X`, then `e`.

## Counts

Moves take a count, as in vim: `5j`, `3k`, `12G`.

## It's instant

Archive, trash, move and flag update the list immediately. The IMAP commands run in the background on that account's own connection. If a connection drops, tern reopens it and retries the command once. In [All inboxes](/docs/unified-inbox/), each message goes to its own account's Archive, Trash or Junk.

## Folder names

Archive, Trash and Junk are found from the server's SPECIAL-USE flags, or failing that from common names. If a key reports that there's no folder to archive to, set it under `[accounts.folders]`. See [Accounts](/docs/accounts/#folders).
