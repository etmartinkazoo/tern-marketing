---
title: Threads
description: How conversations are grouped, folded and acted on.
section: mail
order: 3
---

Messages are grouped into conversations from their Message-ID, In-Reply-To and References headers. When those are missing, a message whose subject starts with "Re:" joins the oldest thread with the same subject.

## In the list

Each conversation is one row: who took part, how many messages, and the date of the latest one. A new reply moves the whole thread back to the top.

## In the message pane

With a folded conversation selected, the right pane shows the whole thread, oldest first. Unread messages and the latest one are shown in full. The others shrink to one line. Quoted text is hidden, because the earlier messages are already above it.

## Keys

| Key | |
|---|---|
| `za` | fold / unfold the conversation under the cursor |
| `zo` `zc` | unfold / fold |
| `zM` `zR` | fold all / unfold all |
| `T` | threads on / off for this session |

Unfold a thread with `za` to act on one message in it. While it's folded, archive, delete, junk, move, read/unread, snooze and `x` act on the whole conversation. `s` flags only the latest message.

## Settings

```toml
[ui]
threads = true            # group into conversations
collapse_threads = true   # start with each conversation folded
```

Both are also under **Settings → General → Reading**.

## Limits

Your own replies show in a thread only if they're in the folder you're viewing. tern doesn't merge your Sent folder into conversations yet.
