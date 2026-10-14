---
title: Composing
description: The built-in modal editor, contact completion, attachments, signatures and choosing who it's from.
section: mail
order: 5
---

Messages are written in the right-hand pane, with the list still in view. There's no separate editor window unless you ask for one with `:e`.

## Starting a message

| Key | |
|---|---|
| `m` `c` | new message, from the account you're in |
| `r` | reply to the sender (or Reply-To) |
| `R` | reply all. You're left off; everyone else on To and Cc goes in Cc |
| `f` | forward, with the original's attachments |
| `m` on the people screen | write to that person |

Replies quote the original below your cursor, under an "On …, … wrote:" line. The subject gets `Re:` or `Fwd:` only if it doesn't already start with one. Replies keep In-Reply-To and References, so they thread properly everywhere, and the original is marked `\Answered` once the reply is sent.

## Fields

The fields are To, Cc, Subject and the body. Bcc appears when you tab to it.

In the address fields, tern suggests contacts from your CardDAV address books as you type, matching names, addresses and companies. Matches at the start of a name or address come first.

| Insert mode | |
|---|---|
| `tab` | take the suggestion, or go to the next field |
| `⇧tab` | previous field |
| `⏎` | take the suggestion, or jump To → Subject → body |
| `^n` `^p` `↑` `↓` | pick a suggestion |
| `^w` `^u` | delete a word / to the start of the line |
| `esc` | normal mode |
| `^s` | send |
| `^t` | attach a file |
| `^f` | send from your next account |

## The editor is modal

The body works like vim. You start in insert mode. `esc` drops to normal mode.

| Normal mode | |
|---|---|
| `h` `j` `k` `l` | move. `j` and `k` cross between fields |
| `w` `b` `e` | word forward / back / end |
| `0` `^` `$` | line start / end |
| `{` `}` `gg` `G` | paragraph, top, bottom |
| `i` `a` `I` `A` `o` `O` | insert |
| `x` `X` `D` `C` `S` `r` `J` | delete, change, replace, join |
| `dd` `dw` `db` `cc` `cw` | delete or change a line or word |
| `yy` `p` `P` | yank a line, paste after / before |
| `v` `V` | visual, then `y` `d` `c` |
| `u` `^r` | undo / redo |

Commands:

| | |
|---|---|
| `ZZ` `:wq` `:x` `^s` | send |
| `:w` | save to the server's Drafts folder |
| `ZQ` `:q!` | discard. `:q` refuses while there are unsent changes |
| `:a <file>` `^t` | attach (`~/` works). `^t` or a bare `:a` asks for the path |
| `:e` `^e` | edit the whole message in `$EDITOR`, then come back |
| `:to` `:cc` `:bcc` `:subject` | jump to a field |

## Line wrapping

Long lines wrap on screen only. The message goes out with one line per paragraph, so phones and desktop clients each wrap it to fit. You won't see the ragged hard-wrapped lines that 72-column mail turns into on a phone.

## External editor

`:e` (or `^e`) writes the message, headers included, to a file in `~/.cache/tern/drafts/`. It opens that file in your editor, then reads it back into the composer. The editor is `editor` under `[ui]`, then `$VISUAL`, then `$EDITOR`, then the first of `nvim`, `vim`, `vi` or `nano` it finds. Vim-like editors open with the cursor on the Subject line (new mail) or on the body (replies).

## Signatures

An account's `signature` is placed below where you type in new messages, replies and forwards. See [Accounts](/docs/accounts/#signatures).

## Choosing who it's from

A reply is sent from the account the original was delivered to, even in [All inboxes](/docs/unified-inbox/). To send from another account, press `^f` in the composer. Each press moves to the next account, and the From line and the signature change to match.

## When you're done

Sending goes through the [outbox](/docs/sending/). There's a 10-second undo (`^z`), and if you're offline the message waits and retries. While you write, the message is autosaved, so a crash doesn't lose it.
