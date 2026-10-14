---
title: People
description: Your CardDAV contacts on one screen, each with upcoming meetings and recent mail, editable in place.
section: calendar
order: 4
---

`P` opens the people screen: every contact from every CardDAV address book, sorted by name. The right pane shows the selected person's addresses, phone numbers, company and notes. Below that are your **upcoming meetings** with them, from your calendars, and **recent mail** with them, from the folders you have loaded.

## Keys

| Key | |
|---|---|
| `j` `k` | move |
| `^d` `^u` | half a page |
| `g` `G` | top / bottom |
| `/` | filter by name, address, company or phone. `esc` clears it |
| `m` `⏎` | write to them |
| `a` | add a contact |
| `e` | edit the selected contact |
| `d` | delete it. Asks first; `y` confirms |
| `y` | copy their first address with `wl-copy` |
| `$` | sync contacts now |
| `tab` `l` / `⇧tab` `h` | focus the details / the list |
| `C` | calendar |
| `P` | back to mail |

## Adding and editing

`a` and `e` open a form in the right pane with these fields: Name, Email, More email, Phone and Company. The extra addresses and phone numbers are comma-separated. The body below is the notes. `^s` saves it to the server and resyncs. A contact needs a name or an email, and every address needs an `@`.

From mail, `A` adds the selected message's sender to your first address book. If they're already a contact, it says so.

## Connecting address books

Address books come from the same `[[dav]]` servers as calendars. Each server's address books are discovered automatically. See [Calendar](/docs/calendar/#connecting-calendars) for the config, and use the contacts URL where it differs:

| Server | Contacts URL |
|---|---|
| Fastmail | `https://carddav.fastmail.com/dav/` |
| iCloud | `https://contacts.icloud.com/` |
| Google | `https://www.googleapis.com/.well-known/carddav` |
| Nextcloud | `https://cloud.example.com/remote.php/dav/` |

An older single `[carddav]` block (`url`, `username`, `password` or `password_cmd`) is still read, as a source named "Contacts".

## Sync

Contacts are cached in `~/.cache/tern/contacts.json`. They're refreshed when tern starts if the cache is more than an hour old, after you add, edit or delete a contact, and on demand with `gc` (in mail), `$` (on this screen) or:

```sh
tern contacts sync
```

## Completion in other tools

The composer completes addresses from these contacts as you type. Other programs can use them too:

```sh
tern query maya
```

It prints the mutt query format: a status line, then one `address<TAB>name<TAB>company` line per match. It reads only the cache, so it's instant. In mutt or neomutt:

```
set query_command = "tern query %s"
```
