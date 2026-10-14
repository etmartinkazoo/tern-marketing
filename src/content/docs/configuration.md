---
title: Configuration
description: Every option in config.toml, with its default.
section: reference
order: 2
---

tern reads `~/.config/tern/config.toml`, or another file with `--config <path>`. `tern --init` writes a commented example. The file needs at least one `[[accounts]]` block.

Most `[ui]` options can also be changed in **Settings → General**, which rewrites the file in place and keeps your comments.

## `[[accounts]]`

| Key | Default | |
|---|---|---|
| `name` | required | shown in the sidebar, used by `tern auth` and `account = …`. Must be unique |
| `email` | required | your address on this account |
| `display_name` | none | From becomes `display_name <email>` |
| `save_sent` | `true` | copy sent mail to Sent. Set `false` for Gmail, which files it itself |
| `signature` | none | added below your text. Use `"-- \nName"` |

### `[accounts.imap]`

| Key | Default | |
|---|---|---|
| `host` | required | |
| `port` | `993` | |
| `tls` | `"implicit"` | `implicit`, `starttls` or `none` |
| `username` | required | |
| `password_cmd` | | a shell command that prints the password on its first line |
| `password` | | the password itself (plain text; `tern doctor` warns) |
| `page_size` | `300` | how many of the newest messages to load per folder |
| `poll_secs` | `60` | seconds between checks when the server doesn't support IDLE |

### `[accounts.smtp]`

| Key | Default | |
|---|---|---|
| `host` | required | |
| `port` | `465` | |
| `tls` | `"implicit"` | use `"starttls"` for port 587 |
| `username` | required | |
| `password_cmd` / `password` | | as for IMAP |

### `[accounts.folders]`

Only needed when the server doesn't flag its special folders. Keys: `sent`, `drafts`, `archive`, `trash`, `junk`. Each is a folder name, such as `trash = "Deleted Items"`.

### `[accounts.oauth]`

| Key | Default | |
|---|---|---|
| `provider` | required | `google`, `microsoft` or `custom` |
| `client_id` | required | your OAuth client's id |
| `client_secret` / `client_secret_cmd` | none | Google needs one; Microsoft public clients don't |
| `tenant` | `"common"` | Microsoft tenant, for work accounts |
| `auth_url`, `token_url` | provider's | required for `custom`; override for others |
| `scopes` | provider's | list of scopes |

See [OAuth](/docs/oauth/).

## `[[dav]]`

One per calendar and contacts server.

| Key | Default | |
|---|---|---|
| `name` | required | shown in the calendar sidebar and settings |
| `url` | required | any URL on the server; calendars and address books are discovered |
| `username` | required | |
| `password_cmd` / `password` | | its own credentials |
| `account` | none | a mail account whose sign-in to reuse: its OAuth token, or its IMAP password when this block has none |
| `hidden` | `[]` | calendar ids not shown in the agenda (set by `space`) |

The older `[carddav]` block (`url`, `username`, `password` or `password_cmd`) is still read, as one source named "Contacts".

## `[ui]`

| Key | Default | |
|---|---|---|
| `sidebar_width` | `24` | folder column width, in columns |
| `list_percent` | `40` | share of the remaining width for the message list |
| `icons` | `true` | Nerd Font glyphs |
| `paint_background` | `false` | fill with the theme's background; `false` keeps the terminal's (and its transparency) |
| `theme_dir` | Omarchy's current theme | where to read colors from. See [Themes](/docs/themes/) |
| `date_format` | `"%b %d"` | strftime format for dates older than a week |
| `editor` | `$VISUAL`, `$EDITOR`, then `nvim`/`vim`/`vi`/`nano` | used by `:e` in the composer |
| `download_dir` | `~/Downloads` | where `S` saves attachments |
| `mark_read_ms` | `800` | how long a message stays open before it counts as read; `0` = immediately |
| `mouse` | `true` | click and scroll; `false` gives the terminal its own selection back |
| `threads` | `true` | group the list into conversations |
| `collapse_threads` | `true` | show each conversation as one row until `za` |
| `calendar_timezone` | `"America/New_York"` | IANA name, or `est`, `cst`, `mst`, `pst`, `utc` |
| `undo_send_secs` | `10` | how long a sent message waits so `^z` can take it back; `0` sends at once |
| `agenda_in_mail` | `true` | your next meetings under the folders in the mail view |
| `notifications` | `true` | desktop notifications for new mail and meetings |
| `reminder_minutes` | `10` | minutes before a meeting with no alarm of its own; `0` = only events' own alarms |
| `zoom_link` | none | your Personal Meeting Room link, for `gz` |
| `meet_account` | first Google OAuth account | the account `gm` creates Meet links with |
| `default_calendar` | none | `"<server name>/<calendar id>"`, where new events and accepted invitations go (set with `*`) |

## A complete example

```toml
[[accounts]]
name = "Personal"
email = "you@fastmail.com"
display_name = "Your Name"
signature = "-- \nYour Name"

[accounts.imap]
host = "imap.fastmail.com"
username = "you@fastmail.com"
password_cmd = "pass show mail/fastmail"

[accounts.smtp]
host = "smtp.fastmail.com"
username = "you@fastmail.com"
password_cmd = "pass show mail/fastmail"

[[accounts]]
name = "Work"
email = "you@company.com"
save_sent = false

[accounts.imap]
host = "imap.gmail.com"
username = "you@company.com"

[accounts.smtp]
host = "smtp.gmail.com"
username = "you@company.com"

[accounts.oauth]
provider = "google"
client_id = "1234….apps.googleusercontent.com"
client_secret_cmd = "pass show oauth/google-secret"

[[dav]]
name = "Personal · Calendar"
url = "https://caldav.fastmail.com/dav/"
username = "you@fastmail.com"
account = "Personal"

[[dav]]
name = "Work · Calendar"
url = "https://apidata.googleusercontent.com/caldav/v2/"
username = "you@company.com"
account = "Work"

[ui]
calendar_timezone = "America/New_York"
zoom_link = "https://zoom.us/j/1234567890"
undo_send_secs = 10
```
