import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Sitio 100% estático — no se necesita adaptador ni SSR.
// Deploy: conectar el repo a Vercel/Netlify directamente.
export default defineConfig({
  site: "https://rendex.es",
  integrations: [sitemap()],
  server: {
    allowedHosts: ["rude-peas-grow.loca.lt"],
  },
});
