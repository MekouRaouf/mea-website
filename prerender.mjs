import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const routes = ['/', '/about', '/services', '/team', '/contact', '/news', '/blogs', '/payasyougo'];
const template = readFileSync('./dist/index.html', 'utf-8');

for (const route of routes) {
  const dir = route === '/' ? './dist' : `./dist${route}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, template);
  console.log(`✅ Created ${dir}/index.html`);
}