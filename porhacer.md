# Por hacer — Rendex

## 1. Assets (imágenes y logo)

- [ ] **Logo** — cuando tengas el fichero, reemplaza el texto `RENDEX` + dot en `Nav.astro` y `Footer.astro` por:
  ```html
  <img src="/logo.png" alt="Rendex" height="36">
  ```
- [ ] **Imágenes del portfolio** — descarga los WebP de `rendex.es/assets/images/` a `Rendex/src/assets/renders/` y actualiza los `src` en `Portfolio.astro`
- [ ] **og-image.jpg** — pon un render de alta calidad (1200×630 px mínimo) en `Rendex/public/og-image.jpg` para las previsualizaciones de redes sociales

---

## 2. Formulario de contacto (Resend)

1. Instalar Resend:
   ```bash
   cd Rendex && pnpm add resend
   ```
2. Crear el archivo `Rendex/.env`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxx
   ```
3. Abrir `src/pages/api/contact.ts` y descomentar el bloque de Resend
4. Añadir el adaptador de tu hosting en `astro.config.mjs` (ver paso 4)

---

## 3. URL real del sitio

- [ ] En `Rendex/astro.config.mjs`, cambiar:
  ```js
  site: "https://rendex.studio"  // ← URL real
  ```
- [ ] Lo mismo en `Rendex/src/layouts/Layout.astro` (variable `siteUrl`)

---

## 4. Deploy (Vercel o Netlify)

**Vercel:**
```bash
pnpm add @astrojs/vercel
```
Luego en `astro.config.mjs`:
```js
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  adapter: vercel(),
  integrations: [],
  site: 'https://rendex.studio',
});
```

**Netlify:**
```bash
pnpm add @astrojs/netlify
```
Y en la config: `adapter: netlify()`

---

## 5. Sitemap automático

```bash
pnpm add @astrojs/sitemap
```
En `astro.config.mjs`:
```js
import sitemap from '@astrojs/sitemap';
integrations: [sitemap()],
```
Después, descomentar la línea del Sitemap en `Rendex/public/robots.txt`.

---

## 6. Datos de contacto — verificar con el cliente

- [ ] Email: `hola@rendex.studio` ← confirmar que es correcto
- [ ] Teléfono: `+34 622 345 678` ← confirmar con el cliente
- [ ] Instagram: `@rendex.3d.render` ← confirmar el handle exacto

Si cambia alguno, actualizarlo en:
- `src/components/Contact.astro`
- `src/components/Footer.astro`
- `src/layouts/Layout.astro` (Schema.org)

---

## 7. Páginas legales

La web enlaza a estas páginas que aún no existen:
- [ ] `Rendex/src/pages/politica-de-privacidad.astro`
- [ ] `Rendex/src/pages/aviso-legal.astro` *(opcional)*
- [ ] `Rendex/src/pages/politica-de-cookies.astro` *(opcional)*

---

## 8. Google Business Profile

- [ ] Registrar el estudio en [Google Business Profile](https://business.google.com) con categoría "Servicios de arquitectura" o "Diseño gráfico"
- [ ] Pedir reseñas a los clientes de María García, Carlos Ruiz y Laura Méndez para Google Maps

---

## ✅ Ya está hecho

- SEO técnico completo (`<title>`, `<meta description>`, OG, Twitter Card, Schema.org LocalBusiness)
- Tipografía: Cormorant Garamond + Inter desde Google Fonts
- Paleta de colores fiel al diseño original
- Todos los componentes: Nav, Hero, Portfolio, Services, Testimonials, Contact, Footer
- Animaciones de entrada (replica GSAP con CSS + Intersection Observer)
- Formulario preparado para Resend (estructura lista)
- `robots.txt` creado
- CSS vanilla, cero Tailwind
