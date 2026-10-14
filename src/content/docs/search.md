---
title: Search
description: Filter the list as you type, then search the server with one more key.
section: mail
order: 4
---

## Filter as you type

`/` opens the filter prompt. The list narrows with each keystroke. It matches subject, sender name, sender address and recipients, without regard to case.

`⏎` keeps the filter and **also searches the server** (IMAP `SEARCH TEXT`). That covers message bodies and mail older than what's loaded, which is the newest `page_size` messages (300 by default). Server hits join the filtered list as they arrive, up to 500 of them.

In [All inboxes](/docs/unified-inbox/), the server search runs on every account's inbox.

`esc` clears the filter.

## Flagged

`gf` opens the account's flagged folder when the server has one: Gmail's Starred, or any folder with the `\Flagged` SPECIAL-USE flag. On servers without one, filter the inbox instead.

## Acting on results

Filter, press `X` to mark everything in view, then triage them all at once with `e`, `d`, `M` or `b`.

## Calendar and people

`/` filters in the calendar and on the people screen too. In the calendar it matches event titles, places and notes. On the people screen it matches names, addresses, companies and phone numbers.
