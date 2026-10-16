---
title: Writing a plugin
description: The plugin.toml format, the JSON tern sends and reads back, and complete examples.
section: plugins
order: 2
---

A plugin is a folder in `~/.config/tern/plugins/` with a `plugin.toml` and a program. tern starts the program in the background, writes **one JSON object** to its standard input and reads **JSON lines** from its standard output. That's the whole interface: any language works, and nothing is compiled into tern.

## plugin.toml

```toml
name = "runwell"                  # shown in the picker and the status line (default: the folder name)
description = "Email → Runwell todo"
run = ["./run"]                   # the program and its arguments; ./ is relative to this folder
timeout_secs = 60                 # stopped after this (1 to 3600, default 60)

[[actions]]                       # one or more
id = "todo"                       # passed to the program as "action"
title = "Send to Runwell as a todo"
key = "t"                         # optional: ;t runs it
on = "message"                    # "message": the message, or the marked ones · "marked": needs marks
accounts = ["Brem", "Lumin"]      # optional: only on these accounts (by name in config.toml)
attachments = false               # true: attachments are saved to files the program can read
fields = [                        # optional questions, asked in the status line first
  { name = "title", label = "todo", default = "{subject}" },
  { name = "due", label = "due (optional)" },
]
```

A field's `default` can use `{subject}`, `{from}`, `{from_name}`, `{from_addr}`, `{date}` and `{account}`. What the person types, or leaves, is passed to the program by `name`.

## What the program reads

```json
{
  "plugin": "runwell",
  "action": "todo",
  "fields": { "title": "Send the Q4 proposal", "due": "friday" },
  "account": { "name": "Brem", "email": "ted@brem.io" },
  "messages": [
    {
      "subject": "Q4 proposal",
      "from": "Maya Okafor <maya@northwind.io>",
      "reply_to": "",
      "to": "Ted Martin <ted@brem.io>",
      "cc": "",
      "date": "Wed, 14 Oct 2026 03:45:12 -0400",
      "message_id": "<CA+abc@mail.northwind.io>",
      "folder": "INBOX",
      "text": "Hi Ted, …",
      "has_html": true,
      "attachments": [ { "name": "brief.pdf", "path": "/tmp/tern-plugin-…/0/brief.pdf" } ]
    }
  ]
}
```

- `text` is the plain text of the body. For HTML-only mail it's the text tern shows you.
- `attachments` lists files only when the action has `attachments = true`. They're in a private temporary folder that tern deletes when the program exits, so copy them if you need them afterwards.
- `messages` has one entry per message: the one you're on, or each marked one.

The program also gets these environment variables:

| Variable | |
|---|---|
| `TERN_ACCOUNT` | the account's name, as in `config.toml` |
| `TERN_ACCOUNT_EMAIL` | its address |
| `TERN_PLUGIN_DIR` | the plugin's folder (also the working directory) |

## What the program writes back

One JSON object per line. They're shown as they arrive, so print progress early.

| Line | tern does |
|---|---|
| `{"status": "Creating the todo…"}` | shows it in the status line. Plain, non-JSON lines count as status too |
| `{"done": "todo created (W-218)", "url": "https://…"}` | shows the result, with the link |
| `{"error": "not signed in to Runwell"}` | shows it as an error |
| `{"then": ["archive"]}` | then archives (`archive`), marks read (`read`) or toggles the flag (`flag`) on the messages it was given, if they're still on screen |
| `{"open": "https://…"}` | opens the link in the browser |

If the program exits with an error and hasn't printed an `error`, tern shows the last line it wrote to standard error. If it runs past `timeout_secs`, it's stopped and tern says so.

## A complete example (Python)

A plugin that appends the email to a Markdown file of things to follow up on, then archives it:

```toml
# ~/.config/tern/plugins/follow-up/plugin.toml
name = "follow-up"
description = "Note an email to follow up on, and archive it"
run = ["./run"]

[[actions]]
id = "note"
title = "Follow up later"
key = "f"
fields = [{ name = "why", label = "note" }]
```

```python
#!/usr/bin/env python3
# ~/.config/tern/plugins/follow-up/run  (chmod +x)
import json, sys
from pathlib import Path

req = json.load(sys.stdin)
msg = req["messages"][0]
note = req["fields"].get("why", "")
line = f"- [ ] {msg['subject']} — {msg['from']} ({msg['date']}){': ' + note if note else ''}\n"
with open(Path.home() / "follow-up.md", "a") as f:
    f.write(line)

print(json.dumps({"done": "noted in ~/follow-up.md"}))
print(json.dumps({"then": ["archive"]}))
```

## The same in a shell script

With `jq`:

```sh
#!/bin/sh
# Copy the email's text to the clipboard as Markdown.
jq -r '.messages[0] | "## \(.subject)\n_from \(.from), \(.date)_\n\n\(.text)"' | wl-copy
echo '{"done": "copied as Markdown"}'
```

## Testing a plugin

You don't need tern to try one: give it JSON yourself.

```sh
cd ~/.config/tern/plugins/follow-up
echo '{"action":"note","fields":{"why":"call back"},"account":{"name":"Work","email":"me@work.com"},
       "messages":[{"subject":"Hi","from":"A <a@b.c>","date":"today","text":"Hello"}]}' | ./run
```

Then `tern doctor` checks that tern can read its `plugin.toml`, and lists its actions and keys.

## Good habits

- **Print a status line first** if the work takes more than a moment. It's how the person knows something is happening.
- **Say what was made:** `done` with an id or link beats "ok".
- **Keep secrets out of `plugin.toml`.** Use the plugin's own config file, a password manager command, or the sign-in of the tool's CLI.
- **Use `accounts`** so work plugins don't show up on personal mail.
- **Only ask for `attachments`** if the plugin uses them: they're written to disk for every run.
