---
title: Notifications and today
description: Desktop notifications for new mail and meetings, and today's agenda under your folders.
section: calendar
order: 5
---

## Desktop notifications

tern sends notifications with `notify-send`, which Omarchy's mako displays. If `notify-send` isn't installed, nothing is shown and nothing breaks.

**New mail**: new unread mail in an inbox, after tern has loaded that inbox once. One message shows the sender, account and subject. Several are summarised as "N new messages", listing up to four. Mail coming back from [snooze](/docs/snooze/) gets its own "Back: …" notification instead.

**Meetings**: a reminder shows the title, how many minutes until it starts, the start time and the place:

- An event with its own alarm reminds you at that alarm.
- Otherwise you're reminded `reminder_minutes` before it starts (10 by default).
- `reminder_minutes = 0` means you're reminded only for events that have their own alarm.
- All-day events don't send reminders.

Reminders need tern to be running.

## Today in the sidebar

The mail view's sidebar shows your next meetings under your folders: today's remaining events, then tomorrow's. That way you see what's coming without leaving your inbox.

## Settings

All of these are under **Settings → General → Calendar**, or in config:

```toml
[ui]
notifications = true      # new mail and meeting reminders
reminder_minutes = 10     # for events without their own alarm; 0 = only those
agenda_in_mail = true     # today's meetings under the folders
```
