import { defineConfig } from "astro/config";

// En Astro 6, output: 'static' (defecto) ya soporta rutas SSR individuales
// mediante export const prerender = false en cada endpoint.
// Para el deploy añade el adaptador de tu hosting:
//   pnpm add @astrojs/vercel  →  import vercel from '@astrojs/vercel/serverless'
export default defineConfig({
  site: "https://rendex.studio", // TODO: cambiar por la URL real
  integrations: [],
});
