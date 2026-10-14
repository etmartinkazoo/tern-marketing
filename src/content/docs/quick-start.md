---
title: Quick start
description: From the demo mailbox to your own accounts in a few minutes.
section: start
order: 3
---

## 1. Look around first

```sh
tern --demo
```

The demo has a mailbox, calendars and contacts that change only in memory. Try:

- `j` `k` to move, `⏎` or `l` to read, `space` to page through a message.
- `e` to archive, `d` to trash, `u` to toggle unread, `s` to flag.
- `C` for the calendar, `P` for people, `,` for settings, `?` for every key.
- `q` to quit.

## 2. Write a config

```sh
tern --init
```

This writes an example to `~/.config/tern/config.toml`. If a file is already there, it leaves it alone. Open it and fill in one account:

```toml
[[accounts]]
name = "Personal"
email = "you@example.com"
display_name = "Your Name"

[accounts.imap]
host = "imap.fastmail.com"
port = 993
tls = "implicit"
username = "you@example.com"
password_cmd = "pass show mail/personal"

[accounts.smtp]
host = "smtp.fastmail.com"
port = 465
tls = "implicit"
username = "you@example.com"
password_cmd = "pass show mail/personal"
```

`password_cmd` is any shell command that prints the password on its first line: `pass`, `secret-tool lookup …`, `op read …`. A literal `password = "…"` also works. `tern doctor` warns about it, because the password then sits in plain text.

The config needs at least one `[[accounts]]` entry. Once tern is running, you can add the rest from **Settings → Accounts** (`,` then `2`). Pick Fastmail, Google, iCloud, Microsoft 365 or Other, and the form is prefilled with that provider's mail, calendar and contacts servers. See [Accounts](/docs/accounts/).

Gmail and Microsoft accounts sign in with OAuth instead of a password. See [OAuth](/docs/oauth/).

## 3. Check it

```sh
tern doctor
```

`tern doctor` signs in to every IMAP and SMTP server without sending anything. It also runs your password commands, checks OAuth tokens, finds your calendars and address books, and looks over your local setup. Each problem comes with what to do about it. See [tern doctor](/docs/doctor/).

## 4. Run it

```sh
tern
```

You land in the first account's inbox. A few things to know on day one:

- A message counts as read only after it's been open for 800 ms (`mark_read_ms`), so skimming past with `j` doesn't mark everything read.
- Archive, trash and move update the list at once. The server catches up in the background.
- New mail is pushed to the folder you're in. `$` checks now.
- Sending goes through an outbox with a 10-second undo window (`^z`). See [Sending](/docs/sending/).

## 5. Add calendars and contacts

If you added the account from Settings with a preset, its calendar and contacts servers are already set up. Otherwise add a `[[dav]]` block:

```toml
[[dav]]
name = "Fastmail"
url = "https://caldav.fastmail.com/dav/"
username = "you@example.com"
account = "Personal"   # reuse that account's password or OAuth sign-in
```

Then press `C` for the calendar and `P` for people. See [Calendar](/docs/calendar/) and [People](/docs/people/).
