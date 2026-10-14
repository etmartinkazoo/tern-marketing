---
title: Call links
description: Put a fresh Google Meet link or your Zoom room on any event with one key.
section: calendar
order: 3
---

## Where you can add a link

| Where | Meet | Zoom |
|---|---|---|
| On a selected event in the calendar | `gm` | `gz` |
| In the event form | `:meet` | `:zoom` |
| In quick add | `… @meet` | `… @zoom` |

The link goes into **Where** if that's empty, into the event's URL (so `o` opens it), and at the top of the notes as "Join Meet: …" or "Join Zoom: …". The event is saved straight away. Adding the same link twice doesn't duplicate it.

## Google Meet

`gm` asks Google for a new Meet space through the Meet REST API, so each event gets its own link. To set it up:

1. A Google account that signs in with [OAuth](/docs/oauth/).
2. The **Google Meet REST API** enabled in the same Google Cloud project as your OAuth client.
3. A sign-in that includes the Meet scope. If you signed in before enabling it, run `tern auth <account>` again.

Links are made with the account named in `meet_account` under `[ui]` (**Settings → General → Meet account**). If none is named, the first account that signs in with Google OAuth is used.

If Google refuses, tern's error tells you which of these is missing.

## Zoom

`gz` uses your Personal Meeting Room link. It's the same link every time, and there's no API or sign-in. Set it once:

```toml
[ui]
zoom_link = "https://zoom.us/j/1234567890"
```

Or set it under **Settings → General → Zoom link**. `tern doctor` checks that it's an `https://` link.
