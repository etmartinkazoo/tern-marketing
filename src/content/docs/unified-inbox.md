---
title: All inboxes
description: Every account's inbox in one list, with actions and replies routed to the right account.
section: mail
order: 7
---

With more than one account, `gu` (or **All inboxes** at the top of the sidebar) shows every account's inbox as one list, newest first. Each message is tagged with its account.

## Everything works as usual

- **Triage**: `e`, `d`, `!`, `M`, `s`, `u` and `b` go to each message's own account. Archive goes to that account's Archive, trash to its Trash. Marked messages from several accounts are handled in one go.
- **Replies** are sent from the account the message came to, with that account's signature.
- **Search**: `/` filters the combined list, and `⏎` searches every account's inbox on the server.
- **Threads** group within the combined list.

## Switching identity

The From address follows the message you're answering. To send from a different account, press `^f` in the composer. It cycles through your accounts and swaps the signature. For new messages (`m`), the account is the one the selected message belongs to.

## Notes

- `gu` does nothing with a single account. There's nothing to combine.
- New mail notifications and push work per account, as usual.
- `gi` takes you back to the selected account's own inbox.
