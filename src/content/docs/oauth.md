---
title: OAuth (Gmail, Outlook)
description: Sign in to Google and Microsoft accounts with your own OAuth client and tern auth.
section: start
order: 5
---

Google and Microsoft no longer accept passwords for IMAP and SMTP on most accounts. tern signs in with OAuth instead: the authorization code flow with PKCE, through your browser. After that, it refreshes the token on its own.

## 1. Get an OAuth client

tern doesn't ship a client id, so you bring your own.

- **Google**: in the Google Cloud console, create an OAuth client of type **Desktop app**. Enable the Gmail API, and the CalDAV and CardDAV APIs if you want the calendar and contacts. To create Meet links with `gm`, also enable the **Google Meet REST API**.
- **Microsoft**: register an app in Azure (Entra ID) with `http://localhost` as a redirect URI.

## 2. Add it to the account

```toml
[accounts.oauth]
provider = "google"                 # google | microsoft | custom
client_id = "1234….apps.googleusercontent.com"
client_secret_cmd = "pass show oauth/google-secret"   # or client_secret = "…"
# tenant = "contoso.onmicrosoft.com"  # Microsoft work accounts; default "common"
```

Google requires a client secret even for desktop apps. Microsoft public clients don't need one. You can also add the account from **Settings → Accounts** with the Google or Microsoft 365 preset, then fill in OAuth client and OAuth secret.

The IMAP and SMTP blocks still need `host` and `username`. They just don't need a password.

## 3. Sign in

```sh
tern auth Work
```

The argument is the account's `name`, matched without regard to case. tern prints the sign-in URL and opens it with `xdg-open`. It then listens on a local loopback port for the browser to come back, and saves the tokens:

```
~/.local/share/tern/oauth/<account>.json
```

From then on, IMAP, SMTP and any `[[dav]]` source with `account = "<name>"` use the token, and refresh it a minute before it expires.

## Scopes

| Provider | Scopes requested |
|---|---|
| Google | `https://mail.google.com/`, `…/auth/calendar`, `…/auth/carddav`, `…/auth/meetings.space.created` |
| Microsoft | `IMAP.AccessAsUser.All`, `SMTP.Send`, `offline_access` |

Google is asked for offline access with a consent prompt, so it issues a refresh token. If you signed in before Meet support existed, run `tern auth <account>` again to grant the Meet scope.

## Custom providers

`provider = "custom"` with `auth_url`, `token_url` and `scopes` works for any standard OAuth 2.0 provider whose IMAP and SMTP servers accept XOAUTH2. The same three keys also override the built-in providers' defaults.

## When it stops working

- **"isn't signed in"**: run `tern auth <account>`.
- **"refresh refused"** or **"token expired"**: the refresh token was revoked or has lapsed. Run `tern auth <account>` again.
- **No refresh token issued**: tern warns at sign-in, and `tern doctor` flags it. The account will stop working within the hour.

`tern doctor` checks all of this for every OAuth account.

Microsoft 365 calendars use Microsoft Graph rather than CalDAV, and tern doesn't read Graph yet. Mail works.
