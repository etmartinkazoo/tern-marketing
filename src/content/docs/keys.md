---
title: Keys
description: Every keybinding in tern, in one place.
section: reference
order: 1
---

The same table is inside tern: press `?` (Settings → Keys), and `/` filters it. `⏎` is Enter, `^` is Ctrl, `⇧` is Shift.

## Move

| Key | |
|---|---|
| `j` `k` | down / up (counts work: `5j`) |
| `h` `l` | focus pane left / right |
| `⏎` | open folder, read message |
| `tab` `⇧tab` | cycle panes |
| `J` `K` | next / previous message from any pane |
| `gg` `G` | top / bottom (`12G` jumps to row 12) |
| `^d` `^u` | half page down / up |
| `^f` `^b` | page down / up |
| `space` | page the message, then the next one |
| `zz` | zoom the message full-screen |
| `esc` | clear filter, marks, zoom |

## Go to

| Key | |
|---|---|
| `gi` | inbox |
| `gu` | all inboxes (unified, several accounts) |
| `gs` `gd` | sent / drafts |
| `ga` `gt` | archive / trash |
| `gj` `gf` | junk / flagged |
| `/` | filter as you type; `⏎` also searches the server |
| `$` `^r` | check for mail now |
| `⏎` `space` `za` | sidebar: fold / unfold an account |
| `h` | sidebar: fold the account you're in |

## Triage

| Key | |
|---|---|
| `e` | archive |
| `d` `#` `del` | trash (deletes for good inside Trash) |
| `!` | junk |
| `M` | move to folder… |
| `s` | flag / unflag |
| `u` | read / unread |
| `b` | snooze until… (`3h`, `tomorrow 9am`, `mon`) |
| `x` | mark (actions then apply to all marked) |
| `X` | mark all / clear marks |

## Threads

| Key | |
|---|---|
| `za` | fold / unfold the conversation |
| `zo` `zc` | unfold / fold |
| `zM` `zR` | fold all / unfold all |
| `T` | threads on / off |

## Message

| Key | |
|---|---|
| `m` `c` | new message |
| `r` `R` | reply / reply all |
| `f` | forward (keeps attachments) |
| `H` | show this message as HTML / as text |
| `a` `t` `n` | meeting invite: yes / maybe / no |
| `o` | open the HTML version in the browser |
| `S` | save attachments |
| `U` | unsubscribe (List-Unsubscribe) |
| `A` | add sender to contacts |
| `ge` | make a calendar event from this message |
| `gr` | resume the unsent message autosaved last time |
| `y` | copy sender's address |
| `:` | plugins: pick an action for this message ([Plugins](/docs/plugins)) |
| `;` + key | run the plugin action bound to that key |
| `gc` | sync contacts now |

## Calendar

| Key | |
|---|---|
| `C` | switch between mail and calendar |
| `P` | people: contacts, with mail and meetings shared |
| `j` `k` | next / previous event |
| `h` `l` | previous / next day |
| `H` `L` | previous / next week |
| `[` `]` | previous / next month |
| `t` | today |
| `a` | quick add: `Lunch fri 12:30 1h @place` |
| `A` `e` | new event / edit in the form |
| `d` | delete (asks first) |
| `gm` `gz` | add a Google Meet / Zoom link to the event |
| `space` | show / hide a calendar (sidebar) |
| `/` | filter events |
| `o` | open the event's link |
| `$` `^r` | sync calendars now |

## People

| Key | |
|---|---|
| `j` `k` · `^d` `^u` · `g` `G` | move |
| `/` | filter |
| `m` `⏎` | write to them |
| `a` `e` `d` | add / edit / delete (asks first) |
| `y` | copy their address |
| `$` | sync contacts |
| `C` `P` | calendar / back to mail |

## App

| Key | |
|---|---|
| `,` | settings |
| `?` | this list |
| `q` `^c` | quit |
| `^z` | undo send (a few seconds after sending) |
| `go` | outbox: queued and failed messages |

## Outbox panel

| Key | |
|---|---|
| `j` `k` | move |
| `r` | retry now |
| `⏎` `e` | edit (takes it out of the queue) |
| `d` | drop |
| `esc` `q` | close |

## Composer · insert

| Key | |
|---|---|
| `tab` | take suggestion, or next field |
| `⇧tab` | previous field |
| `⏎` | take suggestion, or To → Subject → body |
| `^n` `^p` `↑` `↓` | pick a suggestion |
| `^w` `^u` | delete word / to start of line |
| `esc` | normal mode |
| `^s` | send |
| `^t` | attach a file |
| `^f` | send from the next account (signature follows) |

## Composer · normal

| Key | |
|---|---|
| `h` `j` `k` `l` | move (`j` `k` cross between fields) |
| `w` `b` `e` | word forward / back / end |
| `0` `^` `$` | line start / end |
| `{` `}` `gg` `G` | paragraph, top, bottom |
| `i` `a` `I` `A` `o` `O` | insert |
| `x` `X` `D` `C` `S` `r` `J` | delete, change, replace, join |
| `dd` `dw` `db` `cc` `cw` | delete / change line or word |
| `yy` `p` `P` | yank line, paste after / before |
| `v` `V` | visual; then `y` `d` `c` |
| `u` `^r` | undo / redo |
| `ZZ` `:wq` `^s` | send |
| `:w` | save to Drafts |
| `ZQ` `:q!` | discard (`:q` refuses if unsent) |
| `:a <file>` `^t` | attach |
| `:e` `^e` | edit in `$EDITOR`, then come back |
| `:to` `:cc` `:bcc` | jump to a field |
| `:meet` `:zoom` | event form: put a call link in Where |

## Settings

| Key | |
|---|---|
| `j` `k` | move |
| `h` `l` `tab` · `1`–`5` | switch tabs |
| `⏎` `space` | toggle or edit |
| `+` `-` | adjust numbers |
| `/` | filter keys |
| `esc` `q` | close |
| `a` `⏎` `d` | Accounts tab: add / edit / remove |
| `a` `⏎` `d` | Calendars tab: add / edit / remove a server |
| `space` `*` | Calendars tab: show / hide · default calendar |
