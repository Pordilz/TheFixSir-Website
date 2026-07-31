/**
 * Per-route SEO prerendering (postbuild step).
 *
 * The app is a client-rendered SPA, so every route is served the same
 * build/index.html — whose static <title>, canonical and og:* tags all point
 * at the homepage. react-helmet-async only corrects them after JavaScript runs,
 * which Googlebot does on a delayed, unreliable second pass. That mismatch is
 * what triggers Search Console canonical/indexing problems.
 *
 * This script runs after `craco build` and writes a dedicated
 * build/<route>/index.html for each static route, with the correct canonical,
 * og:url, og:title, og:description, <title> and meta description baked into the
 * raw HTML. Vercel serves these static files before falling back to the
 * catch-all rewrite, so each page now ships its true canonical with zero JS
 * dependency. The React bundle still loads and hydrates normally.
 *
 * Dynamic routes (e.g. /blog/:slug) keep using the SPA rewrite + Helmet.
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const INDEX = path.join(BUILD_DIR, 'index.html');
const ORIGIN = 'https://www.thefixsir.co.za';

// Per-route metadata — kept in sync with each page's <Helmet> block.
const ROUTES = [
  {
    path: 'about',
    title: 'About Us | The FixSir - Sports Massage & Hijama in Durban',
    description:
      'Learn about The FixSir — certified sports massage therapist and Hijama cupping practitioner in Musgrave, Durban.',
  },
  {
    path: 'blog',
    title: 'Blog | The FixSir - Sports Therapy & Wellness Tips',
    description:
      'Read the latest articles on sports massage, Hijama cupping therapy, injury recovery, and wellness tips from The FixSir in Durban.',
  },
  {
    path: 'terms',
    title: 'Terms of Service | The FixSir',
    description:
      'Terms of Service for The FixSir — booking policies, medical disclaimers, and service conditions.',
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | The FixSir',
    description:
      'Privacy Policy for The FixSir — how we collect, use, and safeguard your personal information.',
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Replace the FIRST match of `regex` in `html` with `replacement`.
// Throws if the tag isn't found, so a template change can't silently break SEO.
function replaceTag(html, regex, replacement, label, route) {
  if (!regex.test(html)) {
    throw new Error(
      `prerender-seo: could not find ${label} tag while generating /${route}. ` +
        'The index.html template may have changed — update prerender-seo.js.'
    );
  }
  return html.replace(regex, replacement);
}

function buildRouteHtml(template, route) {
  const url = `${ORIGIN}/${route.path}`;
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);

  let html = template;
  html = replaceTag(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${title}</title>`,
    '<title>',
    route.path
  );
  html = replaceTag(
    html,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta name="description" content="${description}" />`,
    'meta description',
    route.path
  );
  html = replaceTag(
    html,
    /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`,
    'canonical',
    route.path
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`,
    'og:url',
    route.path
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:title" content="${title}" />`,
    'og:title',
    route.path
  );
  html = replaceTag(
    html,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
    `<meta property="og:description" content="${description}" />`,
    'og:description',
    route.path
  );
  return html;
}

function main() {
  if (!fs.existsSync(INDEX)) {
    throw new Error(`prerender-seo: ${INDEX} not found. Run the build first.`);
  }
  const template = fs.readFileSync(INDEX, 'utf8');

  for (const route of ROUTES) {
    const outDir = path.join(BUILD_DIR, route.path);
    fs.mkdirSync(outDir, { recursive: true });
    const html = buildRouteHtml(template, route);
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    console.log(`prerender-seo: wrote build/${route.path}/index.html (canonical ${ORIGIN}/${route.path})`);
  }
  console.log(`prerender-seo: done (${ROUTES.length} routes).`);
}

main();
