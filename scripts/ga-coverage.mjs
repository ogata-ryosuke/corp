// scripts/ga-coverage.mjs
// 柱A / A1 — 計装ドリフト検知:
// PR の追加行に新規 `<a>` / `<button>` があり `data-ga-event` が欠落していれば exit 1。
// サイトは増改築されるため「存在チェック」は枯れるが、この差分チェックは枯れない（09-pillar-a-catalog.md §3）。
//
// 判定対象: src/**/*.astro の「追加された」インタラクティブ要素のみ。
// パースは正規表現で十分（Astro の <a>/<button> はほぼ行内で開く）。AST 依存は YAGNI。
//
// 除外したい場合は要素に data-ga-ignore を付ける（計測不要なアンカー等）。

import { execSync } from 'node:child_process';

const BASE = process.env.GITHUB_BASE_REF || 'main';

function getDiff() {
  // CI では origin/<base>...HEAD。ローカルで origin が無い場合は base ブランチへフォールバック。
  const candidates = [`origin/${BASE}...HEAD`, `${BASE}...HEAD`, 'HEAD~1...HEAD'];
  for (const range of candidates) {
    try {
      return execSync(`git diff ${range} -- "src/**/*.astro"`, { encoding: 'utf8' });
    } catch {
      /* try next */
    }
  }
  return '';
}

const diff = getDiff();
const addedLines = diff
  .split('\n')
  .filter(l => l.startsWith('+') && !l.startsWith('+++'));

const interactive = addedLines.filter(l => /<a[\s>]|<button[\s>]/.test(l));
const missing = interactive.filter(
  l => !l.includes('data-ga-event') && !l.includes('data-ga-ignore')
);

if (missing.length === 0) {
  console.log('[ga-coverage] OK: 追加された <a>/<button> はすべて data-ga-event を持つ（または data-ga-ignore）。');
  process.exit(0);
}

console.error('[ga-coverage] FAIL: data-ga-event の無い新規 <a>/<button> を検出:');
missing.forEach(l => console.error('  ', l.trim()));
console.error('\n各要素に data-ga-event="<event_name>" を付与するか、計測不要なら data-ga-ignore を付けてください。');
process.exit(1);
