# Rendex — Estudio de Renders 3D Arquitectónicos

## Vista en vivo

> **[rendex.studio](https://rendex.studio)**

---

## Vista previa

![Vista previa de la web](./public/images/Miniatura-web.webp)

---

## Descripción

Sitio web de portfolio y captación de clientes para **Rendex**, estudio especializado en renders 3D arquitectónicos ubicado en La Orotava, Tenerife. El objetivo del sitio es transmitir calidad visual premium y convertir visitas en presupuestos solicitados.

---

## Arquitectura

### Stack tecnológico

| Capa                | Tecnología                                                             |
| ------------------- | ---------------------------------------------------------------------- |
| Framework           | [Astro 6](https://astro.build) — generación estática con SSR opcional  |
| Lenguaje            | TypeScript (modo estricto)                                             |
| Estilos             | CSS vanilla — sin frameworks de utilidades                             |
| Tipografías         | Cormorant Garamond (titulares) + Inter (cuerpo) via Google Fonts       |
| Gestor de paquetes  | pnpm                                                                   |
| Runtime mínimo      | Node.js ≥ 22.12.0                                                      |
| Email transaccional | [Web3Forms](https://web3forms.com) — envío directo sin backend         |

### Estructura de carpetas

```
Rendex/
├── public/
│   ├── images/          # Imagen de previsualización (Miniatura-web.webp)
│   ├── favicon.ico / favicon.svg
│   └── robots.txt
├── src/
│   ├── components/      # Componentes Astro por sección
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Portfolio.astro
│   │   ├── Services.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout global: SEO, fuentes, estilos base
│   └── pages/
│       └── index.astro   # Página principal (SPA con anclas)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### Modelo de página

El sitio es una **Single Page Application con anclas** (`#portfolio`, `#servicios`, `#resenas`, `#contacto`). El navegador hace scroll suave entre secciones sin recargar. El formulario de contacto envía directamente a la API de [Web3Forms](https://web3forms.com) desde el cliente — no requiere backend ni SSR.

---

## SEO

### Meta tags y Open Graph

Definidos en `src/layouts/Layout.astro` y aplicados en todas las páginas:

- `<title>` — "Renders 3D Arquitectónicos en Tenerife | Rendex"
- `<meta name="description">` — descripción optimizada para el negocio local
- `<link rel="canonical">` — URL canónica apuntando a `https://rendex.studio`
- Open Graph completo: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:locale="es_ES"`, `og:site_name`
- Twitter Card: `summary_large_image` con título, descripción e imagen

### Datos estructurados (Schema.org JSON-LD)

Implementado el tipo **LocalBusiness** con:

```json
{
  "@type": "LocalBusiness",
  "name": "Rendex",
  "telephone": "+34622345678",
  "email": "info@rendex.es",
  "address": {
    "streetAddress": "La Orotava",
    "postalCode": "38300",
    "addressLocality": "Tenerife",
    "addressCountry": "ES"
  },
  "geo": {
    "latitude": 28.3941,
    "longitude": -16.5228
  }
}
```

Esto permite aparecer en el **Knowledge Panel de Google** y en resultados de búsqueda local enriquecidos.

### robots.txt

Ubicado en `public/robots.txt`. Permite el acceso a todos los crawlers y tiene la URL del sitemap comentada (lista para descomentar al desplegar).

### Sitemap

Pendiente de activar con la integración `@astrojs/sitemap`. Instrucciones en [porhacer.md](./porhacer.md).

### Señales SEO adicionales

- `lang="es"` en el `<html>` — indica idioma al motor de búsqueda
- Jerarquía de encabezados correcta: `<h1>` único en Hero, `<h2>` por sección
- `loading="lazy"` en imágenes del portfolio
- Atributos `alt` descriptivos en todas las imágenes
- CSS con soporte para `prefers-reduced-motion` (accesibilidad)
- Fuentes cargadas con `display=swap` para evitar FOIT

---

## Secciones de la web

| Sección         | Descripción                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Nav**         | Navegación sticky con scroll suave y menú hamburguesa en móvil                           |
| **Hero**        | Pantalla completa con parallax, titular principal y CTA                                  |
| **Portfolio**   | Galería masonry de 8 renders (1 destacado 2×2)                                           |
| **Servicios**   | 3 planes de precios: Render Individual (€150), Pack Profesional (€390), Pack Full (€750) |
| **Testimonios** | 3 reseñas de clientes sobre fondo oscuro                                                 |
| **Contacto**    | Formulario + datos de contacto (email, teléfono, ubicación, Instagram)                   |
| **Footer**      | Marca, enlaces legales y copyright                                                       |

---

## Desarrollo local

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Previsualizar build
pnpm preview
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz con:

```env
PUBLIC_WEB3FORMS_KEY=tu_access_key_de_web3forms
```

Obtén la clave en [web3forms.com](https://web3forms.com) registrándote con el correo del cliente. Los mensajes del formulario llegarán directamente a esa cuenta. La clave es pública y queda embebida en el HTML en tiempo de build.

---

## Despliegue

El proyecto está preparado para desplegar en **Vercel** o **Netlify**. Consulta [porhacer.md](./porhacer.md) para los pasos de configuración del adaptador correspondiente.

---

## Pendiente antes de lanzar

### Formulario de contacto

- [ ] Registrarse en [web3forms.com](https://web3forms.com) con el correo del cliente
- [ ] Crear `.env` en la raíz con `PUBLIC_WEB3FORMS_KEY=tu_clave`
- [ ] Verificar que los mensajes llegan correctamente al correo del cliente haciendo una prueba de envío en local (`pnpm dev`)
- [ ] Confirmar datos de contacto con el cliente: email `info@rendex.es`, teléfono `+34 622 345 678`, Instagram `@rendex.3d.render` — actualizar en `Contact.astro`, `Footer.astro` y `Layout.astro` si cambian

### Assets

- [ ] **Logo** — cuando esté listo, reemplazar el texto `RENDEX` en `Nav.astro` y `Footer.astro` por `<img src="/logo.svg" alt="Rendex" height="36">`
- [ ] **Imágenes del portfolio** — descargar los WebP a `src/assets/renders/` y actualizar los `src` en `Portfolio.astro` (ahora apuntan a URLs externas)
- [ ] **og-image.jpg** — imagen 1200×630 px en `public/og-image.jpg` para las previsualizaciones al compartir en redes sociales (Twitter, WhatsApp, LinkedIn)

### Páginas legales (obligatorias por RGPD)

- [ ] Crear `src/pages/politica-de-privacidad.astro`
- [ ] Crear `src/pages/aviso-legal.astro`
- [ ] Crear `src/pages/politica-de-cookies.astro`
- [ ] Actualizar los enlaces del `Footer.astro` una vez creadas las páginas

### Banner de cookies (RGPD)

- [ ] Crear componente `CookieBanner.astro` con botones "Aceptar" y "Rechazar"
- [ ] Guardar la preferencia del usuario en `localStorage` para no volver a mostrar el banner
- [ ] Solo cargar scripts de analítica (Google Analytics, etc.) si el usuario acepta
- [ ] Añadir enlace a la política de cookies dentro del banner

### Analítica

- [ ] Crear cuenta en [Google Analytics 4](https://analytics.google.com) o [Plausible](https://plausible.io) (alternativa sin cookies)
- [ ] Añadir el script de seguimiento en `Layout.astro` condicionado a la aceptación de cookies
- [ ] Configurar evento de conversión en el envío del formulario de contacto

### SEO técnico

- [x] Instalar `@astrojs/sitemap` y configurado en `astro.config.mjs`
- [x] Sitemap activado en `public/robots.txt`
- [x] URL del sitio confirmada: `https://rendex.es` en `astro.config.mjs` y `Layout.astro`

### Despliegue

- [ ] Elegir plataforma: Vercel (`pnpm add @astrojs/vercel`) o Netlify (`pnpm add @astrojs/netlify`)
- [ ] Añadir la variable de entorno `PUBLIC_WEB3FORMS_KEY` en el panel de la plataforma de hosting
- [ ] Apuntar el dominio `rendex.studio` a la plataforma elegida
- [ ] Verificar la propiedad en [Google Search Console](https://search.google.com/search-console) y enviar el sitemap

### Google Business Profile

- [ ] Registrar el estudio en [Google Business Profile](https://business.google.com) con categoría "Servicios de arquitectura"
- [ ] Solicitar reseñas a los primeros clientes para mejorar el posicionamiento local

---

## Licencia

Proyecto propietario — todos los derechos reservados © Rendex.

_Desarrollado por [Matus Behun](mailto:matusbehun03@gmail.com)_
