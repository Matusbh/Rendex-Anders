/**
 * Endpoint de contacto — preparado para Resend.
 *
 * Para activarlo:
 *   1. pnpm add resend
 *   2. Crea .env en la raíz del proyecto:
 *        RESEND_API_KEY=re_xxxxxxxxxxxxxx
 *   3. Cambia astro.config.mjs:
 *        export default defineConfig({ output: 'hybrid', site: '...' })
 *   4. Instala el adaptador de tu hosting:
 *        pnpm add @astrojs/vercel   (o @astrojs/netlify, @astrojs/node)
 *      y añádelo en astro.config.mjs:
 *        import vercel from '@astrojs/vercel/serverless';
 *        export default defineConfig({ adapter: vercel(), output: 'hybrid' })
 *   5. Descomenta el bloque de Resend más abajo.
 */

// import { Resend } from 'resend';
// const resend = new Resend(import.meta.env.RESEND_API_KEY);

import type { APIRoute } from "astro";

// Indica a Astro que este endpoint NO se prerenderiza (requiere output: 'hybrid')
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, email, empresa, tipo, mensaje } = body as Record<
      string,
      string
    >;

    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    /* ── Descomentar cuando tengas RESEND_API_KEY configurada ─────── */
    /*
    const { error } = await resend.emails.send({
      from: 'Rendex Web <noreply@rendex.studio>',
      to: ['hola@rendex.studio'],
      replyTo: email,
      subject: `Nuevo contacto: ${tipo || 'consulta general'}`,
      html: `
        <h2 style="font-family:sans-serif">Nuevo mensaje desde rendex.studio</h2>
        <table style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Nombre:</strong></td><td>${nombre}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Empresa:</strong></td><td>${empresa || '—'}</td></tr>
          <tr><td><strong>Tipo:</strong></td><td>${tipo || '—'}</td></tr>
        </table>
        <p style="font-family:sans-serif;margin-top:16px"><strong>Mensaje:</strong><br>${mensaje}</p>
      `,
    });

    if (error) throw new Error(error.message);
    */

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
