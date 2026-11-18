import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import remarkYoutube from "./src/plugins/remark-youtube.mjs";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://darthpackman.com/",
  markdown: { remarkPlugins: [remarkYoutube] },
  integrations: [preact(), sitemap()]
});