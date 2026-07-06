/**
 * Static export writes every page with the root layout's lang="zh-Hant-TW".
 * Rewrite <html lang> for the /en and /ja subtrees so crawlers see the right language.
 * (next dev is handled at runtime by <LangSetter/>.)
 */
import fs from 'fs';
import path from 'path';

// With a custom distDir (NEXT_DIST_DIR), `output: 'export'` writes the export there instead of out/
const OUT = path.join(process.cwd(), process.env.NEXT_DIST_DIR || 'out');
const TARGETS = [
  { dir: 'en', lang: 'en' },
  { dir: 'ja', lang: 'ja' },
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

let count = 0;
for (const { dir, lang } of TARGETS) {
  for (const file of walk(path.join(OUT, dir))) {
    const html = fs.readFileSync(file, 'utf8');
    const fixed = html.replace('<html lang="zh-Hant-TW"', `<html lang="${lang}"`);
    if (fixed !== html) {
      fs.writeFileSync(file, fixed);
      count++;
    }
  }
}
console.log(`fix-lang: updated ${count} HTML files`);
