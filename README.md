# 株式会社バリアントコード コーポレートサイト

Astro + Tailwind CSS + React で構築したコーポレートサイトです。Cloudflare Pages でホスティングしています。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的サイトを生成
npm run preview  # ビルド結果のプレビュー
```

## デプロイ

`main` への push で Cloudflare Pages が `npm run build` を実行し、`dist/` を配信します（[wrangler.toml](wrangler.toml)）。

## サイト設定

- サイト URL: [astro.config.mjs](astro.config.mjs) の `site`
- sitemap: `@astrojs/sitemap` により `/sitemap-index.xml` を自動生成
- robots: [public/robots.txt](public/robots.txt)
- セキュリティヘッダ: [public/_headers](public/_headers)
- PWA manifest: [public/site.webmanifest](public/site.webmanifest)
- OG / Twitter / JSON-LD などのメタ情報: [src/layouts/Layout.astro](src/layouts/Layout.astro)
- 404 ページ: [src/pages/404.astro](src/pages/404.astro)
