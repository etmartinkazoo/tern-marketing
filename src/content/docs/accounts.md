---
title: Accounts
description: Add mail accounts from settings or config.toml, with passwords, TLS, folders and signatures.
section: start
order: 4
---

Each account is one `[[accounts]]` block in `~/.config/tern/config.toml`. You can write the blocks yourself or manage them from inside tern.

## From settings

Open **Settings → Accounts** with `,` then `2`.

| Key | |
|---|---|
| `a` | add an account: pick a provider, then fill in the form |
| `⏎` `e` | edit the selected account |
| `d` | remove it (asks first) |

The provider presets fill in the servers, including calendar and contacts, so one form sets up all three:

| Preset | IMAP | SMTP | Calendar / contacts | Sign-in |
|---|---|---|---|---|
| Fastmail | `imap.fastmail.com:993` | `smtp.fastmail.com:465` | `caldav.fastmail.com/dav/`, `carddav.fastmail.com/dav/` | app password |
| Google (Gmail) | `imap.gmail.com:993` | `smtp.gmail.com:465` | Google CalDAV v2, Google CardDAV | OAuth |
| iCloud | `imap.mail.me.com:993` | `smtp.mail.me.com:587` | `caldav.icloud.com`, `contacts.icloud.com` | app-specific password |
| Microsoft 365 / Outlook | `outlook.office365.com:993` | `smtp.office365.com:587` | none (needs Graph, not supported yet) | OAuth |
| Other (IMAP / SMTP) | you fill in | you fill in | optional | password command |

The form's fields are Name, Email, Your name, Password cmd, IMAP, SMTP, Calendar, Contacts, OAuth client and OAuth secret. The signature goes in the body. Server fields take `host:port`. The port decides the encryption: 993 and 465 mean TLS, 143 and 587 mean STARTTLS. To override that, add a scheme:

- `imap://host:3143` or `smtp://host:2525`: no encryption, only for local bridges such as Proton Bridge
- `starttls://host:2525`: force STARTTLS
- `imaps://` or `smtps://`: force TLS

Saving writes `config.toml` in place and keeps your comments and layout. The account connects right away. A calendar or contacts URL becomes a `[[dav]]` block named `<account> · Calendar` or `<account> · Contacts`, which signs in through the account (`account = "<name>"`). Removing an account also removes the `[[dav]]` blocks that sign in through it.

**Provider notes:**

- **Fastmail**: make an app password under Settings → Privacy & Security → Manage app passwords. Give it mail, contacts *and* calendars access, or CalDAV will refuse it.
- **iCloud**: make an app-specific password at account.apple.com → Sign-In and Security.
- **Gmail**: `save_sent` is turned off, because Gmail files sent mail itself.

## In config.toml

```toml
[[accounts]]
name = "Work"                     # shown in the sidebar; must be unique
email = "you@company.com"
display_name = "Your Name"        # optional; From becomes "Your Name <you@company.com>"
save_sent = true                  # copy sent mail to Sent (false for Gmail)
signature = "-- \nYour Name · Company"

[accounts.imap]
host = "imap.company.com"
port = 993                        # default 993
tls = "implicit"                  # implicit (default) | starttls | none
username = "you@company.com"
password_cmd = "pass show mail/work"
page_size = 300                   # newest messages loaded per folder (default 300)
poll_secs = 60                    # check interval when the server has no IDLE (default 60)

[accounts.smtp]
host = "smtp.company.com"
port = 465                        # default 465
tls = "implicit"                  # 587 → "starttls"
username = "you@company.com"
password_cmd = "pass show mail/work"
```

### Passwords

Each server takes either:

- `password_cmd`: a shell command run with `sh -c`. tern uses the first line it prints. It must exit 0. This is the recommended form.
- `password`: the password itself, in plain text. `tern doctor` warns about this.

### TLS

| `tls` | Meaning | Usual ports |
|---|---|---|
| `implicit` | TLS from the first byte (default) | IMAP 993, SMTP 465 |
| `starttls` | plain connection upgraded with STARTTLS | IMAP 143, SMTP 587 |
| `none` | no encryption: local bridges only | anything |

### Folders

tern finds Sent, Drafts, Archive, Trash, Junk and Flagged from the server's SPECIAL-USE flags. Without those flags, it falls back to common names such as "Sent Items", "Deleted Messages", "Spam" and "All Mail". If it still guesses wrong, name the folders yourself:

```toml
[accounts.folders]
sent = "Sent Items"
drafts = "Drafts"
archive = "Archive"
trash = "Deleted Items"
junk = "Junk E-mail"
```

When an account has no archive folder, `e` uses the "All Mail" folder if there is one. Otherwise tern tells you to set `archive`.

### Signatures

`signature` is added below your text in new messages, replies and forwards. Start it with `-- ` (dash, dash, space) on its own line, as usual. When you switch the sending account with `^f`, the signature switches too.

## Several accounts in the sidebar

With more than one account, each account is a fold in the sidebar. To open or close one, press `⏎`, `space` or `za` on its heading, or click it. `h` on a folder closes that account. A closed account shows its inbox's unread count. Folds are remembered between runs.

With more than one account you also get **All inboxes**, every inbox in one list. See [All inboxes](/docs/unified-inbox/).
