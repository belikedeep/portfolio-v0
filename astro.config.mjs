import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({
      experimentalStreamingRendering: true,
    }),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: "dracula",
      langs: [],
      wrap: true,
    },
  },
});
