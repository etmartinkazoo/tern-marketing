---
title: tern doctor
description: One command that checks every account, server and local tool, and tells you what to fix.
section: reference
order: 5
---

```sh
tern doctor
tern --config ~/other.toml doctor
```

`tern doctor` tries everything tern depends on and reports each check as `✓` (fine), `!` (a warning) or `✗` (a problem). A common failure comes with a `→` line saying what to do about it. It never sends mail. The only thing it may write is a refreshed OAuth token, the same as tern itself would.

## What it checks

**Config**
- The file parses, and has accounts.
- Account names are unique, and each `email` is an address.

**Each account**
- OAuth accounts: the provider is known, you're signed in, a refresh token was issued, and the token is valid (it's refreshed if needed).
- Password accounts: each `password_cmd` runs and prints something. It warns about passwords stored in plain text.
- IMAP: connects, signs in, and lists the capabilities tern uses (`IDLE`, `MOVE`, `UIDPLUS`, `SPECIAL-USE`, `CONDSTORE`). It warns when there's no IDLE, which means mail is checked every `poll_secs` instead of pushed.
- SMTP: connects and signs in, without sending anything.

**Calendars & contacts**
- Every `[[dav]]` block: its `account` refers to an account that exists, its credentials resolve, and how many calendars and address books it finds.
- `default_calendar` names one of your calendars.

**This machine**
- The theme directory, and whether it has colors tern can read.
- `calendar_timezone` is a real zone.
- An editor for `:e` is available.
- `notify-send`, `wl-copy` and `xdg-open` are installed.
- `zoom_link` is an `https://` link.
- The cache and data directories are writable.

**Waiting**
- Messages stuck in the outbox, with their last error.
- Snoozed messages more than an hour overdue.
- An autosaved message you haven't sent yet.

Each network check times out after 20 seconds.

## Sample output

This run uses a config with a mistyped host, an OAuth account that hasn't signed in, and an unreachable calendar server:

```
tern doctor ~/.config/tern/config.toml

Config
  ✓ config      2 account(s), 1 calendar/contact server(s)

Personal (you@example.com)
  ✗ imap        imap.example.invalid:993 — connecting to imap.example.invalid:993: failed to lookup address information: Name or service not known
    → that host name doesn't resolve: check `host` for typos, and that you're online
  ✗ smtp        smtp.example.invalid:587 — SMTP: Connection error: failed to lookup address information: Name or service not known
    → that host name doesn't resolve: check `host` for typos, and that you're online

Work (you@work.example)
  ✗ oauth       not signed in
    → run `tern auth Work`

Calendars & contacts
  ✗ Calendar    https://dav.example.invalid/ — calendars: Calendar: connecting to https://dav.example.invalid/: connect dav.example.invalid:443
    → can't reach that server: check the URL, and that you're online

This machine
  ✓ theme       built-in colors (no Omarchy theme found)
  ✓ time zone   America/New_York
  ✓ editor      found one on PATH
  ! notify-send not installed — needed for desktop notifications
  ! wl-copy     not installed — needed for copying addresses and links
  ! xdg-open    not installed — needed for opening HTML mail, links and OAuth sign-in
  ✓ cache       ~/.cache/tern
  ✓ data        ~/.local/share/tern

Waiting
  ✓ outbox      empty

4 problem(s), 3 warning(s).
```

When all is well, the last line is `Everything works.`

## Hints it gives

| When it sees | It suggests |
|---|---|
| a refused sign-in (`AUTHENTICATIONFAILED`, `535`, `401`) | check the username and password. Fastmail, iCloud and Gmail without OAuth need an app password |
| a failing `password_cmd` | run the command yourself. It must print the password and exit 0 (is the keyring unlocked?) |
| a missing or expired OAuth token | `tern auth <account>` |
| a host that doesn't resolve | check `host` for typos, and that you're online |
| connection refused | check `host` and `port` |
| a timeout | a firewall, a wrong port, or the server is down |
| a TLS failure | match `tls` to the port: implicit TLS uses 993/465, STARTTLS 143/587 |
| a 404 from a calendar server | use the provider's DAV URL |

## Exit status

| Code | Meaning |
|---|---|
| `0` | nothing failed. Warnings are fine |
| `1` | at least one `✗` |

So it works in scripts:

```sh
tern doctor >/dev/null || notify-send "tern" "mail setup needs attention"
```

Color is used only when the output is a terminal.
