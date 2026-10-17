import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import assert from 'node:assert/strict';
import config from '../astro.config.mjs';

// Base de publicación (subcarpeta de GitHub Pages); los enlaces absolutos la incluyen.
const base = config.base ?? '/';

const root = resolve('dist');
const list = async (dir) => (await Promise.all((await readdir(dir)).map(async (name) => {
  const path = join(dir, name);
  return (await stat(path)).isDirectory() ? list(path) : [path];
}))).flat();
const files = await list(root);
const pages = files.filter((file) => file.endsWith('.html'));
const documents = new Map(await Promise.all(pages.map(async (file) => [file, await readFile(file, 'utf8')])));
const ids = (html) => [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const titles = new Set();
const canonicals = new Set();
const attr = (html, pattern) => html.match(pattern)?.[1];
for (const [file, html] of documents) {
  const name = relative(root, file);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${name}: un solo H1`);
  assert.equal(ids(html).length, new Set(ids(html)).size, `${name}: IDs únicos`);
  // Solo la portada lleva JavaScript: mejora progresiva del filtro, empaquetada por Astro.
  const scripts = [...html.matchAll(/<script\b[^>]*>/gi)].map((match) => match[0]);
  if (name === 'index.html') {
    assert.equal(scripts.length, 1, `${name}: un único script, el del filtro`);
    assert(/type="module"/.test(scripts[0]) && !/src="https?:/.test(scripts[0]), `${name}: script propio de tipo módulo`);
  } else if (name.startsWith('proyectos/')) {
    // Demo de la ficha flotante: un único script propio por caso.
    assert.equal(scripts.length, 1, `${name}: un único script, el de la ficha`);
    assert(/type="module"/.test(scripts[0]) && !/src="https?:/.test(scripts[0]), `${name}: script propio de tipo módulo`);
  } else {
    assert.equal(scripts.length, 0, `${name}: sin JavaScript cliente`);
  }
  assert(html.includes('<html lang="es">'), `${name}: idioma español`);
  assert(/<meta name="description" content="[^"]+"/.test(html), `${name}: descripción SEO`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${name}: título único`);
  titles.add(title);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
  assert(canonical && /^https:\/\//.test(canonical) && !canonicals.has(canonical), `${name}: URL canónica absoluta y única`);
  canonicals.add(canonical);
  assert.equal(attr(html, /<meta property="og:url" content="([^"]+)"/), canonical, `${name}: og:url igual a la canónica`);
  const image = attr(html, /<meta property="og:image" content="([^"]+)"/);
  const card = attr(html, /<meta name="twitter:card" content="([^"]+)"/);
  assert.equal(card, image ? 'summary_large_image' : 'summary', `${name}: twitter:card acorde a la imagen`);
  if (image) {
    assert(image.startsWith(new URL(canonical).origin), `${name}: og:image en el propio sitio`);
    assert(files.includes(join(root, decodeURIComponent(new URL(image).pathname.slice(base.length)))), `${name}: existe og:image`);
  }
  for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]*)"/g)) {
    const url = new URL(value.replaceAll('&amp;', '&'), `https://portfolio.invalid/${name}`);
    if (url.origin !== 'https://portfolio.invalid') continue;
    if (value.startsWith('/')) assert(value.startsWith(base), `${name}: ${attribute} ${value} incluye la base ${base}`);
    const destination = join(root, decodeURIComponent(value.startsWith('/') ? `/${url.pathname.slice(base.length)}` : url.pathname));
    assert(files.includes(destination), `${name}: destino de ${attribute} ${value}`);
    if (url.hash) assert(ids(documents.get(destination) || '').includes(decodeURIComponent(url.hash.slice(1))), `${name}: ancla ${value}`);
  }
  // Los enlaces que salen del portfolio se abren en una pestaña nueva.
  for (const [tag, href] of html.matchAll(/<a\b[^>]*\bhref="(https?:[^"]*)"[^>]*>/g)) {
    assert(tag.includes('target="_blank"') && /rel="[^"]*noopener/.test(tag), `${name}: ${href} se abre en pestaña nueva`);
  }
}
const home = documents.get(join(root, 'index.html'));
assert(home, 'Existe el inicio');
const projectFiles = (await readdir('src/content/projects')).filter((file) => file.endsWith('.md'));
assert.equal(pages.length, projectFiles.length + 1, 'Una página por proyecto y el inicio');
assert.equal((home.match(/class="project-card(?: featured)?"/g) || []).length, projectFiles.length, 'Una tarjeta por proyecto');
assert(home.includes('data-filter-status'), 'El filtro anuncia los resultados');
// Filtros y proyectos deben corresponderse: cada área ofrecida muestra algún proyecto y cada área
// de un proyecto, incluido el destacado, tiene su filtro.
const filterIds = [...home.matchAll(/id="f-([^"]+)"/g)].map((match) => match[1]).filter((id) => id !== 'todos');
const cardAreas = [...home.matchAll(/<article class="project-card(?: featured)?" data-areas="([^"]*)"/g)]
  .map(([, list]) => ({ areas: list.split(' ') }));
assert.equal(cardAreas.length, projectFiles.length, 'Cada tarjeta declara sus áreas');
for (const id of filterIds) assert(cardAreas.some(({ areas }) => areas.includes(id)), `Filtro ${id}: muestra al menos un proyecto`);
for (const { areas } of cardAreas) for (const id of areas) assert(filterIds.includes(id), `Área ${id}: tiene filtro`);
const nextLinks = new Map();
for (const file of projectFiles) {
  const slug = file.slice(0, -3);
  const path = join(root, 'proyectos', `${slug}.html`);
  const html = documents.get(path);
  assert(html, `Se conserva la URL de ${slug}`);
  assert(html.includes('class="case-step"'), `${slug}: relato renderizado`);
  const nav = html.match(/<nav class="project-pagination wrap"[\s\S]*?<\/nav>/)?.[0];
  const links = [...(nav || '').matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  assert(links.includes(`${base}index.html#proyectos`), `${slug}: volver al índice`);
  const next = links.find((link) => link.startsWith(`${base}proyectos/`));
  assert(next && next !== `${base}proyectos/${slug}.html`, `${slug}: siguiente distinto`);
  nextLinks.set(`${base}proyectos/${slug}.html`, next);
}
let current = nextLinks.keys().next().value;
const visited = new Set();
while (!visited.has(current)) { visited.add(current); current = nextLinks.get(current); }
assert.equal(visited.size, projectFiles.length, 'Navegación circular por todos los proyectos');
const pending = [];
if (![...documents.values()].some((html) => html.includes('property="og:image"'))) pending.push('sin imagen para compartir (og:image)');
if (pending.length) console.warn(`PENDIENTE antes de publicar: ${pending.join('; ')} (ver docs/ANTES-DE-PUBLICAR.md).`);
console.log(`OK: ${pages.length} páginas; enlaces y recursos; anclas; enlaces externos en pestaña nueva; filtros y áreas; SEO y metadatos para compartir; contenido renderizado; navegación circular; JavaScript solo en el filtro de la portada y la ficha de los casos.`);
