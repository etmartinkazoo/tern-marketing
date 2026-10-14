---
title: Snooze
description: Hide a message until a time you pick, then get it back unread with a notification.
section: mail
order: 8
---

`b` takes a message out of your way until later. When the time comes, it's back in its folder, unread, with a desktop notification.

## Picking a time

Press `b`, and the prompt offers four presets. Use `↑` `↓` and `⏎`, or type your own:

| Preset | Means |
|---|---|
| later today · 3h | three hours from now |
| tomorrow morning | tomorrow at 08:00 |
| this weekend | Saturday at 09:00 |
| next week | Monday at 08:00 |

What you can type, with the time it resolves to shown as you type:

| You type | Snoozes until |
|---|---|
| `3h`, `90m`, `1h30`, `2 hours` | that long from now |
| `2d` | two days from now |
| `tomorrow`, `fri`, `next mon`, `oct 20` | that day at 08:00 |
| `tomorrow 9am`, `fri 2pm`, `oct 20 14:00` | that day and time |
| `5pm`, `9:30` | the next time it's that time: today, or tomorrow if it has passed |

## What happens

The message moves to a folder called `Snoozed` on its own server, which is created the first time. So it's out of your inbox on your phone too. tern remembers it by Message-ID in `~/.local/share/tern/snoozed.json`, along with where it came from.

While tern is running, it checks every 20 seconds. Each message that's due is found in `Snoozed`, marked unread, and moved back to the folder it came from. A notification shows the subject and sender. Snoozes that came due while tern was closed come back on the next start.

## Many at once

`b` works on marks and folded threads, and in [All inboxes](/docs/unified-inbox/). Each message goes to the `Snoozed` folder on its own account.

## Notes

- A message without a Message-ID header can't be found again, so it's skipped.
- To un-snooze early, open the `Snoozed` folder and move the message back with `M`. When its time comes, tern looks for it, finds it gone, and drops the record.
- `tern doctor` lists snoozes that are more than an hour overdue.
