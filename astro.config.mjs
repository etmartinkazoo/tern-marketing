// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ternmail.dev',
  trailingSlash: 'always',
  markdown: {
    // Code takes its colors from the active theme, like the rest of the page.
    shikiConfig: { theme: 'css-variables', wrap: false },
  },
});
