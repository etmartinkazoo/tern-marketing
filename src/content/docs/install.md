---
title: Install
description: Install tern with cargo, straight from GitHub.
section: start
order: 2
---

tern is a single Rust binary, built from [its source on GitHub](https://github.com/etmartinkazoo/tern) with cargo.

## Requirements

- **Rust**: a recent stable toolchain (`rustup`, or your distro's `cargo`). The crate uses edition 2021.
- **A terminal with true color.** For icons, use a Nerd Font. Omarchy ships JetBrainsMono Nerd Font. Without one, set `icons = false`.
- **Linux helpers.** Each of these is optional, and each lights up one feature:

| Tool | Used for |
|---|---|
| `notify-send` | desktop notifications (Omarchy's mako shows them) |
| `wl-copy` | `y`, which copies an address or link to the clipboard |
| `xdg-open` | `o` (HTML mail in the browser), event links, unsubscribe links, the OAuth sign-in page |
| `$EDITOR` (or `nvim`, `vim`, `vi`, `nano`) | `:e` in the composer |

## Build and install

```sh
cargo install --git https://github.com/etmartinkazoo/tern
```

Or from a checkout, if you want to read or change the code:

```sh
git clone https://github.com/etmartinkazoo/tern
cd tern
cargo install --path .
```

That builds a release binary and puts it in `~/.cargo/bin/tern`. If `~/.cargo/bin` isn't on your `PATH`, add it, or link the binary somewhere that is:

```sh
ln -s ~/.cargo/bin/tern ~/.local/bin/tern
```

To build without installing:

```sh
cargo build --release   # in the checkout
./target/release/tern --demo
```

## Check it

```sh
tern --version
tern --demo
```

`--demo` opens a fake mailbox, calendar and contacts list, so you can learn the keys before connecting anything. Next: the [quick start](/docs/quick-start/).

## Updating

Run `cargo install --git https://github.com/etmartinkazoo/tern` again (or `git pull` and `cargo install --path .` in a checkout). The config file and your data in `~/.config/tern`, `~/.cache/tern` and `~/.local/share/tern` are left alone. See [Files](/docs/files/).
