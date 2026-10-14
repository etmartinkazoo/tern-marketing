---
title: Command line
description: Every tern command and flag.
section: reference
order: 6
---

```
tern                     open your mailboxes
tern --demo              explore with a fake mailbox
tern --config <path>     use another config file
tern --init              write an example config to ~/.config/tern/config.toml
tern query <text>        search contacts (mutt query format, for editor completion)
tern contacts sync       pull contacts from every [[dav]] source now
tern auth <account>      sign in with OAuth (Google, Microsoft) in the browser
tern doctor              check every account and server, and say what's wrong
```

## `tern`

Opens the mail view on the first account's inbox. It reads `~/.config/tern/config.toml`, which must contain at least one `[[accounts]]` block.

## `--demo`

A fake mailbox, calendar and contacts list. Nothing connects to a server and nothing is saved. Use it to learn the keys.

## `--config <path>`, `-c <path>`

Use another config file. It combines with the other commands: `tern -c work.toml doctor`.

## `--init`

Writes a commented example config to the config path. If a file is already there, it leaves it alone and says so.

## `query <text>`

Searches the cached contacts and prints them in the mutt/neomutt query format. The first line is a status line, followed by one line per match:

```
tern: 2 matches
maya@northwind.io	Maya Okafor	Northwind
maya.o@gmail.com	Maya Okafor	Northwind
```

The columns are tab-separated: address, name, company. Use it as mutt's `query_command`, or in an editor plugin. It reads only the cache, so it's instant and works offline.

## `contacts sync`

Pulls every address book from every `[[dav]]` source now, and updates the cache. It prints the count and warns about sources that failed.

## `auth <account>`

OAuth sign-in for the account with that name, matched without regard to case. It opens the provider's page in your browser, waits for the redirect on a local port, and saves the tokens. See [OAuth](/docs/oauth/).

## `doctor`

Checks everything and exits `1` if anything failed. See [tern doctor](/docs/doctor/).

## `--help`, `-h` · `--version`, `-V`

Print the usage above, or the version.
