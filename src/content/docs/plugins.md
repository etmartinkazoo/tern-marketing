---
title: Plugins
description: Add your own actions to tern, like turning an email into a todo, without changing tern itself.
section: plugins
order: 1
---

Plugins let tern do things that belong to *your* way of working rather than to a mail client: send an email to your project manager as a todo, file it in a CRM, log it to a ticket, ask an assistant about it. They live outside tern, so they never make the core bigger, and you can write one in an afternoon, in any language.

## Using a plugin

On a message, press `:`. A picker lists every plugin action that fits the account you're in. Type to filter, `↑` `↓` to choose, `⏎` to run it.

Actions can also have a key of their own: `;` and that key runs it directly. A todo plugin bound to `t` is `;t`.

Some actions ask a few questions first. They appear one at a time in the status line, already filled in from the email, for example the todo's title from the subject. `⏎` moves to the next one and `esc` cancels.

Then the plugin runs in the background. Its progress and its result show in the status line (`runwell: todo created (W-218): Send the Q4 proposal`), and you keep reading mail while it works.

## Which messages it gets

An action works on the message you're on, or on every marked message (`x`) if you've marked some. A folded conversation counts as all of its messages. An action can also insist on marked messages, for example to file a whole thread at once.

The plugin gets the text tern has loaded, so open a message before running an action on it. Marked messages tern hasn't loaded yet are left out.

## What a plugin can and can't do

- **It reads** the messages you run it on: headers, the text of the body, and the attachments, if the plugin asks for them.
- **It can't send or delete mail.** It can ask tern to *archive*, *mark read* or *flag* the messages it was given, and tern only does that if you're still looking at them.
- **It never blocks tern.** It runs in the background and is stopped after its time limit, a minute unless it sets another.
- **It only shows where it applies.** A plugin can limit itself to some accounts: a work todo plugin shows up on your work mail and nowhere else.

## Installing one

A plugin is a folder in `~/.config/tern/plugins/`. Copy or clone it there, and it shows up the next time you press `:`, with no restart. [`tern doctor`](/docs/doctor) lists your plugins and their keys, and points out any whose `plugin.toml` doesn't make sense.

To remove a plugin, delete its folder.

## Example: email → todo

A common one: a client emails a request, and it should become a todo in your project manager, with the email attached as context.

```
~/.config/tern/plugins/todo/
  plugin.toml     the action: its title, key, accounts and questions
  run             the program that makes the todo
  config.toml     the plugin's own settings (tern doesn't read this)
```

```toml
# plugin.toml
name = "todo"
description = "Turn an email into a todo"
run = ["./run"]

[[actions]]
id = "create"
title = "Send to the project manager as a todo"
key = "t"
accounts = ["Work"]
fields = [
  { name = "title", label = "todo", default = "{subject}" },
  { name = "project", label = "project (empty = inbox)" },
]
```

On a work email, `;t` asks for the todo's title (the subject is already there) and a project, then runs `./run`. That program reads the email from its input, creates the todo through your tool's command-line client or API, and prints one line back:

```json
{"done": "todo created (W-218): Send the Q4 proposal", "url": "https://pm.example.com/w/218"}
```

How to write that program is in [Writing a plugin](/docs/writing-plugins).

### Tools with an MCP server

Many tools now offer an MCP server for AI assistants. A plugin can use it too:

- **If the tool has a command-line client** that wraps its MCP server (one command per tool, JSON output), the plugin just runs it. That's the simplest and fastest way, and the sign-in stays with the client.
- **To let an assistant decide** the title, project and due date from a messy email, the plugin can hand the email to an assistant that has the tool's MCP connector, for example Claude Code in non-interactive mode (`claude -p`). It's slower and costs tokens, but it reads the email the way a person would.

One account per sign-in: if you use the same tool for two companies, give each tern account its own sign-in in the plugin's config. The plugin is told which account the email came from.
