---
title: Calendar
description: Your CalDAV calendars in the same three panes as mail, with sync, time zones and hidden calendars.
section: calendar
order: 1
---

`C` switches between mail and the calendar. It uses the same three panes:

- **Left**: your calendars, grouped by server, with a small month view.
- **Middle**: the agenda, a running list of days and events. It opens on today, with earlier days a `k` away.
- **Right**: the selected event, with time, place, link, attendees and notes.

Recurring events (including skipped and moved instances), all-day and multi-day events, and events in other time zones are all handled. Each calendar keeps the color the server gives it. Calendars without one get a color from your theme.

## Keys

| Key | |
|---|---|
| `j` `k` | next / previous event |
| `h` `l` | previous / next day |
| `H` `L` | previous / next week |
| `[` `]` | previous / next month |
| `t` | today |
| `gg` `G` | first / last event |
| `^d` `^u` | half a page down / up |
| `⏎` | focus the event details (`j` `k` scroll them) |
| `/` | filter events by title, place or notes. `esc` clears it |
| `o` | open the event's link (a video call, a document) |
| `a` | quick add |
| `A` `e` | new event / edit the selected one in the form |
| `d` | delete (asks first) |
| `gm` `gz` | add a Google Meet / Zoom link to the selected event |
| `space` (sidebar) | show / hide a calendar |
| `$` `^r` | sync now |
| `C` | back to mail |

Creating, editing and deleting events is covered in [Events](/docs/events/).

## Connecting calendars

Add one `[[dav]]` block per server. tern discovers every calendar and address book on it.

```toml
[[dav]]
name = "Fastmail"
url = "https://caldav.fastmail.com/dav/"
username = "you@example.com"
password_cmd = "pass show mail/personal"
# or: account = "Personal" to reuse that mail account's sign-in
```

The URL can be any URL on the server. If the configured URL doesn't lead to calendars, tern tries the way other clients do: the server's `/.well-known/caldav` redirect, then `/dav/`, then Nextcloud's `/remote.php/dav/`.

| Server | URL |
|---|---|
| Fastmail | `https://caldav.fastmail.com/dav/` |
| iCloud | `https://caldav.icloud.com/` |
| Google | `https://apidata.googleusercontent.com/caldav/v2/` (with `account = "<your Google account>"`) |
| Nextcloud | `https://cloud.example.com/remote.php/dav/` |

`account = "<name>"` reuses a mail account's sign-in. That's its OAuth token, or its IMAP password when the `[[dav]]` block has no password of its own. You can also manage servers from **Settings → Calendars** (`,` then `3`): `a` to add, with presets for Fastmail, iCloud, Google and Nextcloud, `⏎` to edit, `d` to remove, `$` to sync.

Microsoft 365 / Outlook calendars use Microsoft Graph, not CalDAV, and aren't supported yet.

## Sync

- Calendars sync when tern starts, when you open the calendar and the last sync is over 5 minutes old, every 15 minutes, and on `$`.
- Only what changed is downloaded when the server supports that.
- The result is cached in `~/.cache/tern/calendars.json`, so the calendar opens instantly and works offline.
- If a server fails, the others still sync, and the error shows next to that server.

## Time zone

Times are shown and entered in one zone, US Eastern (`America/New_York`) by default. Change it under **Settings → General → Time zone**, or in config:

```toml
[ui]
calendar_timezone = "Europe/Berlin"   # any IANA name, or est, cst, mst, pst, utc
```

Daylight time is handled. Events stored in other zones are converted.

## Hidden and default calendars

- `space` on a calendar in the sidebar, or in **Settings → Calendars**, shows or hides it. Hidden calendars are saved per server as `hidden = ["<calendar id>"]` in that `[[dav]]` block.
- `*` on a calendar in **Settings → Calendars** makes it the default. New events and accepted invitations go there. It's saved as `default_calendar = "<server name>/<calendar id>"` under `[ui]`.

Without a default, new events go to the calendar under the sidebar cursor (when the sidebar has focus), then the selected event's calendar, then the first visible one.
