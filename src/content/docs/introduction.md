---
title: Introduction
description: What tern is, how it's laid out, and what it deliberately leaves out.
section: start
order: 1
---

tern is a terminal client for mail, calendar and contacts. It takes the ideas that made mutt and neomutt last: plain text, the keyboard and no chrome. Then it builds them into one fast, dense app for 2026. You read, triage, reply, schedule and look people up without leaving the home row or opening a browser tab.

## One screen, three panes

```
 tern you@x.com         │ Inbox  412 · 6 unread                  │ Re: Q4 roadmap — final cut before Friday
▎ Inbox              6  │ ●  Maya Okafor   Re: Q4 roadmap…  03:45 │ From    Maya Okafor <maya@northwind.io>
  Drafts                │    GitHub        [omarchy] feat…  03:22 │ To      Ted Martin <ted@example.com>
  Sent                  │ ●  Priya Raman   Contract draft…    Tue │ Date    Wed 14 Oct 2026 03:45
  Archive               │                                         │ ──────────────────────────────── all
  Trash                 │                                         │ Hey,
```

- **Sidebar**: your folders, one fold per account, and below them today's remaining meetings.
- **List**: 40% of the remaining width by default (`list_percent`). One row per conversation.
- **Message**: the rest. Mail, replies and event forms open here, so the list stays visible while you write.

The calendar (`C`) and the people screen (`P`) use the same three panes, so moving between them feels the same.

## What's in it

- **Mail** over IMAP and SMTP, with push (IMAP IDLE) on the folder you're in. Several accounts, plus a combined inbox for all of them (`gu`).
- **Triage keys** that each take one press: `e` archive, `d` trash, `!` junk, `M` move, `s` flag, `b` snooze. Marks (`x`) and counts (`5j`) work too.
- **A built-in, vim-style composer** in the right pane. Contact completion, attachments, and `:e` to finish a message in `$EDITOR`.
- **An outbox** with undo send (`^z`) and automatic retries. Your work in progress is autosaved, so a crash or a closed terminal doesn't lose it.
- **Calendars** over CalDAV. Natural-language quick add, an event form, invitations answered from the message, and Meet or Zoom links.
- **Contacts** over CardDAV, plus a people screen with your recent mail and upcoming meetings with each person.
- **Desktop notifications** for new mail and for meetings about to start.
- **Omarchy themes**, followed live, plus Nerd Font glyphs.
- **`tern doctor`**, which checks every account and server and tells you what to fix.

## What it deliberately doesn't do

tern is opinionated about staying small and fast. Today it doesn't have:

- **HTML composing.** You write plain text. Received HTML mail renders as readable text in the terminal (`H`), and `o` opens the original in your browser.
- **PGP or S/MIME.**
- **Local mail storage.** tern talks to your IMAP server directly; there's no Maildir or notmuch backend. Calendars and contacts are cached locally, so they open instantly and work offline.
- **Microsoft 365 calendars.** Outlook and Microsoft 365 mail works over IMAP with OAuth, but their calendars need Microsoft Graph, which tern doesn't read yet.
- **Editing one occurrence of a recurring event.** Edits and deletes apply to the whole series.
- **Your Sent folder in threads.** Your own replies show in a conversation only if they're in the folder you're viewing.

## Where to go next

- [Install](/docs/install/) tern with one `cargo install`.
- [Quick start](/docs/quick-start/): explore the demo mailbox, then connect your own accounts.
- [Keys](/docs/keys/): every shortcut on one page.
