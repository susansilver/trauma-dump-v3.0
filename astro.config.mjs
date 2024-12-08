// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import embeds from "astro-embed/integration";

import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://traumadump.xyz",
  integrations: [
    embeds(),
    mdx(),
    sitemap(),
    tailwind(),
    playformCompress(),
    compressor(),
  ],
});