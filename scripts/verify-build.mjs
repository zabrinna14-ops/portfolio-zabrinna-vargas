import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import assert from 'node:assert/strict';

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
for (const [file, html] of documents) {
  const name = relative(root, file);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${name}: un solo H1`);
  assert.equal(ids(html).length, new Set(ids(html)).size, `${name}: IDs únicos`);
  assert(!/<script\b/i.test(html), `${name}: sin JavaScript cliente`);
  assert(html.includes('<html lang="es">'), `${name}: idioma español`);
  assert(/<meta name="description" content="[^"]+"/.test(html), `${name}: descripción SEO`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${name}: título único`);
  titles.add(title);
  for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]*)"/g)) {
    const url = new URL(value.replaceAll('&amp;', '&'), `https://portfolio.invalid/${name}`);
    if (url.origin !== 'https://portfolio.invalid') continue;
    const destination = join(root, decodeURIComponent(url.pathname));
    assert(files.includes(destination), `${name}: destino de ${attribute} ${value}`);
    if (url.hash) assert(ids(documents.get(destination) || '').includes(decodeURIComponent(url.hash.slice(1))), `${name}: ancla ${value}`);
  }
}
const home = documents.get(join(root, 'index.html'));
assert(home, 'Existe el inicio');
const projectFiles = (await readdir('src/content/projects')).filter((file) => file.endsWith('.md'));
assert.equal(pages.length, projectFiles.length + 1, 'Una página por proyecto y el inicio');
assert.equal((home.match(/class="project-card(?: featured)?"/g) || []).length, projectFiles.length, 'Una tarjeta por proyecto');
const nextLinks = new Map();
for (const file of projectFiles) {
  const slug = file.slice(0, -3);
  const path = join(root, 'proyectos', `${slug}.html`);
  const html = documents.get(path);
  assert(html, `Se conserva la URL de ${slug}`);
  assert(html.includes('class="case-step"'), `${slug}: relato renderizado`);
  const nav = html.match(/<nav class="project-pagination wrap"[\s\S]*?<\/nav>/)?.[0];
  const links = [...(nav || '').matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  assert(links.includes('/index.html#proyectos'), `${slug}: volver al índice`);
  const next = links.find((link) => link.startsWith('/proyectos/'));
  assert(next && next !== `/proyectos/${slug}.html`, `${slug}: siguiente distinto`);
  nextLinks.set(`/proyectos/${slug}.html`, next);
}
let current = nextLinks.keys().next().value;
const visited = new Set();
while (!visited.has(current)) { visited.add(current); current = nextLinks.get(current); }
assert.equal(visited.size, projectFiles.length, 'Navegación circular por todos los proyectos');
console.log(`OK: ${pages.length} páginas; enlaces y recursos; anclas; SEO; contenido renderizado; navegación circular; cero scripts cliente.`);
