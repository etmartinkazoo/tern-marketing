---
title: Events
description: Quick add in plain words, the event form, edits and deletes, invitations, and turning an email into an event.
section: calendar
order: 2
---

## Quick add

`a` in the calendar opens a one-line prompt. Type the event the way you'd say it:

```
Lunch with Maya fri 12:30 1h @Osteria Morini
Dentist tomorrow at 3pm for 45m
Offsite oct 20 all day
Standup 9-9:15am
Review 2026-11-02 14:00-15:30
Retro next fri 2pm
Design review fri 2pm 45m @meet
```

Everything that isn't a date, time, length or place becomes the title.

| Part | Examples | Notes |
|---|---|---|
| Date | `today`, `tomorrow` (`tmrw`), `fri`, `friday`, `next fri`, `oct 20`, `20 oct`, `2026-11-02` | A weekday means the next one, counting today. A month and day already past this year means next year. No date means the day under the cursor |
| Time | `12:30`, `3pm`, `3:15pm`, `15h` | Bare numbers aren't times |
| Range | `9-10am`, `9-9:15am`, `14:00-15:30` | |
| Length | `1h`, `45m`, `1h30`, `90min`, `2 hours` | Default 1 hour |
| All day | `all day`, `allday`, `all-day`, or no time at all | |
| Place | `@Osteria Morini` | Everything after ` @` |
| Call | `@meet`, `@zoom` | Creates a Meet link, or uses your Zoom link. See [Call links](/docs/call-links/) |

Glue words (`at`, `on`, `for`) before a date, time or length are dropped. The event goes to your default calendar. See [Calendar](/docs/calendar/#hidden-and-default-calendars).

## The event form

`A` opens a new event in the right pane, and `e` edits the selected one. The fields are:

| Field | Accepts |
|---|---|
| Title | anything |
| Date | `2026-10-16`, `fri`, `tomorrow`, `oct 20` |
| Start | `14:00`, `3pm`. Leave empty for all day |
| End | `15:30`, or a length like `1h`. For all-day events, the last day |
| Where | a place or a link |

The body below the fields is the event's notes. The form uses the composer's keys. `^s` saves, `:meet` and `:zoom` put a call link in Where, and `ZQ` discards.

Edits change only the title, times, place and notes. Everything else in the event (attendees, alarms, time zone, recurrence) stays as it was. Editing a recurring event edits the whole series. tern can't edit a single occurrence yet.

Changes show at once and are then written to the server. If the server refuses, the next sync puts back what the server has.

## Deleting

`d` asks before deleting. On a recurring event, the prompt says the whole series will go.

## Invitations

Meeting invitations (iCalendar `REQUEST`) show as a card at the top of the message: when, where, who's coming, your current answer, and any events in your calendars that overlap it.

| Key | |
|---|---|
| `a` | accept |
| `t` | tentative |
| `n` | decline |

Each one sends the organizer a standard iTIP reply from your account. It also marks the message answered and updates your calendar: accept and tentative add the event, or update your copy. Decline removes your copy if you have one.

## An email into an event

`ge` on any message opens a new event, prefilled:

- **Title**: the subject, without `Re:` or `Fwd:`.
- **Date and time**: the first ones the message mentions, such as "Thursday at 2pm" or "Oct 20, 10:30–11:30". Words like "may" count only next to a number.
- **Where**: any Meet, Zoom, Teams, Whereby or Webex link in the message.
- **Notes**: where it came from, the people on the message, and the first lines of its text.

The note under the form tells you what was found. Check it and press `^s`.
