---
title: Reading mail
description: Move through folders and messages, page through mail, view HTML, and save attachments.
section: mail
order: 1
---

## The panes

Focus is on one pane at a time: sidebar, list or message. `h` and `l` move focus left and right. `tab` and `⇧tab` cycle through the panes.

- In the **sidebar**, `j` `k` move between folders, and `⏎` or `l` opens one.
- In the **list**, `j` `k` move between messages, and the selected message shows on the right as you go. `⏎` or `l` moves focus into it.
- In the **message**, `j` `k` scroll.

`J` and `K` go to the next or previous message from any pane. When you're reading in the right pane, that's the fastest way through a folder.

## Moving

| Key | |
|---|---|
| `j` `k` | down / up. Counts work: `5j` |
| `gg` `G` | top / bottom. `12G` jumps to row 12 |
| `^d` `^u` | half a page down / up |
| `^f` `^b` | a full page down / up (also `PgDn` `PgUp`) |
| `J` `K` | next / previous message, from any pane |
| `space` | page down through the message; at the end, go to the next one |
| `zz` | zoom: the message fills the screen. `zz` or `esc` again to return |
| `esc` | clear the filter, then marks, then zoom |

`space` is made for reading a whole folder: keep pressing it, and you page through each message and on to the next.

## Going to folders

| Key | Folder |
|---|---|
| `gi` | Inbox |
| `gu` | All inboxes (with more than one account) |
| `gs` `gd` | Sent / Drafts |
| `ga` `gt` | Archive / Trash |
| `gj` `gf` | Junk / Flagged (where the server has a flagged folder, like Gmail's Starred) |

These go to the folder on the account you're in. `$` or `^r` checks for new mail now. New mail is pushed to the open folder when the server supports IMAP IDLE. Otherwise tern checks every `poll_secs` (60 by default). A refresh keeps your cursor on the same message.

## When a message counts as read

A message is marked read once it has been open for `mark_read_ms`, 800 ms by default. Skimming down the list with `j` doesn't mark everything you pass. Set it to `0` to mark at once. `u` toggles read and unread by hand.

## Plain text and HTML

Mail shows as plain text. Lines wrap to the pane, and quoted text is colored by depth.

| Key | |
|---|---|
| `H` | switch this message to its HTML part, laid out for the terminal, and back |
| `o` | open the message's HTML in your browser |

In the HTML view, headings, bold, italics, links, lists, code and tables keep their shape. The email's own colors are dropped, so it stays readable on a dark theme. `o` writes the HTML to `~/.cache/tern/view/` and opens it with `xdg-open`. A message without HTML opens as preformatted text.

## Attachments, unsubscribe, the sender

| Key | |
|---|---|
| `S` | save every attachment to `download_dir` (default `~/Downloads`). Names that already exist get a new one |
| `U` | unsubscribe through the List-Unsubscribe header. A `mailto:` opens a prefilled message for you to send; a link opens in the browser |
| `A` | add the sender to your contacts (the first CardDAV address book) |
| `y` | copy the sender's address with `wl-copy` |

Attachments are listed in the message header.

## Meeting invitations

An invitation shows as a card at the top of the message: when, where, who's coming, your current answer, and anything it overlaps in your calendars. `a`, `t` and `n` answer yes, maybe and no. See [Events](/docs/events/#invitations).
