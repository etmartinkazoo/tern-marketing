# tern-marketing

The website and documentation for **tern**, a terminal client for mail, calendar and
contacts: mutt's ideas rebuilt for 2026.

Built with [Astro](https://astro.build). No UI framework and no CSS framework. One
dependency.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run deploy     # build, then publish to the tern-marketing Worker on Cloudflare
```

Live at https://tern-marketing.ted-df5.workers.dev (static assets on a Cloudflare
Worker, config in `wrangler.jsonc`).

## Layout

| Path | What |
|---|---|
| `src/pages/index.astro` | the landing page |
| `src/content/docs/*.md` | every docs page (frontmatter: `title`, `description`, `section`, `order`) |
| `src/layouts/Docs.astro` | docs sidebar, search (`/`), table of contents, prev/next |
| `src/data/themes.ts` | the Omarchy palettes the site can wear |
| `src/captures/*.html` | real tern screens, generated, don't edit |
| `src/styles/captures.css` | their colors per theme, generated |
| `scripts/captures/` | how the captures are made |

## The screenshots are real

Every terminal on the landing page is `tern --demo`, captured from tmux in each of the
seven themes. `build_caps.py` aligns the seven captures cell by cell and turns each
distinct color into a CSS variable. So there's one HTML grid per screen, and the theme
picker recolors it along with the rest of the page.

To regenerate after tern's UI changes (needs `tmux` and a built `tern`):

```sh
cd scripts/captures
TERN_BIN=/path/to/tern ./all.sh                 # → out/<theme>/<screen>.txt
python3 build_caps.py out ../../src/captures ../../src/styles/captures.css
```

## Writing docs

Docs are checked against tern's source. A key, default, path or behavior that isn't
in the code doesn't go in the docs. Link between pages as `/docs/<slug>/`.

## Fonts

JetBrains Mono (OFL) and the Nerd Fonts symbols (MIT), each cut down to the glyphs
the site uses. Licenses are in `public/fonts/`.
