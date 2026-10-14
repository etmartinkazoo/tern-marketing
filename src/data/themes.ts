// The Omarchy themes the site (and its tern screenshots) can wear. Same palettes the
// captures were taken with, so page and screenshots always agree.
export interface Theme {
  id: string;
  name: string;
  light?: boolean;
  bg: string;
  fg: string;
  accent: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
}

export const themes: Theme[] = [
  { id: 'tokyo-night', name: 'Tokyo Night', bg: '#1a1b26', fg: '#a9b1d6', accent: '#7aa2f7', red: '#f7768e', green: '#9ece6a', yellow: '#e0af68', blue: '#7aa2f7', magenta: '#ad8ee6', cyan: '#449dab' },
  { id: 'catppuccin', name: 'Catppuccin', bg: '#1e1e2e', fg: '#cdd6f4', accent: '#89b4fa', red: '#f38ba8', green: '#a6e3a1', yellow: '#f9e2af', blue: '#89b4fa', magenta: '#f5c2e7', cyan: '#94e2d5' },
  { id: 'gruvbox', name: 'Gruvbox', bg: '#282828', fg: '#ebdbb2', accent: '#d79921', red: '#fb4934', green: '#b8bb26', yellow: '#fabd2f', blue: '#83a598', magenta: '#d3869b', cyan: '#8ec07c' },
  { id: 'nord', name: 'Nord', bg: '#2e3440', fg: '#d8dee9', accent: '#88c0d0', red: '#bf616a', green: '#a3be8c', yellow: '#ebcb8b', blue: '#81a1c1', magenta: '#b48ead', cyan: '#88c0d0' },
  { id: 'everforest', name: 'Everforest', bg: '#2d353b', fg: '#d3c6aa', accent: '#a7c080', red: '#e67e80', green: '#a7c080', yellow: '#dbbc7f', blue: '#7fbbb3', magenta: '#d699b6', cyan: '#83c092' },
  { id: 'kanagawa', name: 'Kanagawa', bg: '#1f1f28', fg: '#dcd7ba', accent: '#7e9cd8', red: '#e82424', green: '#98bb6c', yellow: '#e6c384', blue: '#7fb4ca', magenta: '#938aa9', cyan: '#7aa89f' },
  { id: 'rose-pine', name: 'Rosé Pine Dawn', light: true, bg: '#faf4ed', fg: '#575279', accent: '#56949f', red: '#b4637a', green: '#286983', yellow: '#ea9d34', blue: '#56949f', magenta: '#907aa9', cyan: '#d7827e' },
];

export function themeCss(): string {
  return themes
    .map((t, i) => {
      const sel = i === 0 ? `:root,[data-theme="${t.id}"]` : `[data-theme="${t.id}"]`;
      return `${sel}{--bg:${t.bg};--fg:${t.fg};--accent:${t.accent};--red:${t.red};--green:${t.green};--yellow:${t.yellow};--blue:${t.blue};--magenta:${t.magenta};--cyan:${t.cyan};color-scheme:${t.light ? 'light' : 'dark'}}`;
    })
    .join('\n');
}
