import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--frabjous-rabanadas-5b9c7d.netlify.app",
  integrations: [preact()]
});