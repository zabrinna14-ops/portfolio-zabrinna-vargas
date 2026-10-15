import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';

const origin = new URL(process.argv[2] || 'http://127.0.0.1:4322').origin;
// Astro's route guard treats browser navigation differently from fetch's */*.
const headers = { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' };
const projects = (await readdir('src/content/projects')).filter((file) => file.endsWith('.md'));
const pending = ['/', '/index.html', ...projects.map((file) => `/proyectos/${file.slice(0, -3)}.html`)];
const documents = new Map();
async function read(path) {
  if (!documents.has(path)) {
    const response = await fetch(new URL(path, origin), { headers });
    assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
    documents.set(path, await response.text());
  }
  return documents.get(path);
}
const visited = new Set();
let anchors = 0;
while (pending.length) {
  const path = pending.shift();
  if (visited.has(path)) continue;
  visited.add(path);
  const html = await read(path);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: contenido de la página`);
  for (const [, href] of html.matchAll(/\bhref="([^"]*)"/g)) {
    const url = new URL(href.replaceAll('&amp;', '&'), origin + path);
    if (url.origin !== origin || /\.(css|ico)$/.test(url.pathname)) continue;
    pending.push(url.pathname);
    if (url.hash) {
      const destination = await read(url.pathname);
      const ids = [...destination.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
      assert(ids.includes(decodeURIComponent(url.hash.slice(1))), `${path}: ancla ${href}`);
      anchors++;
    }
  }
}
console.log(`OK: ${visited.size} rutas y ${anchors} anclas en ${origin}, con cabeceras de navegador.`);
