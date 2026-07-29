# JigokuNozoki.com

千葉県・鋸山の「地獄のぞき」を案内する、日本語の観光サイトです。日系の編集デザイン、実景写真、アクセス比較、料金試算、モデルコース、FAQを備えています。

## 技術構成

- Astro 7 + TypeScript
- Tailwind CSS 4（Vite plugin）
- pnpm
- Cloudflare Workers + `@astrojs/cloudflare`
- データベースなし
- ログインなし
- CMSなし

## ローカル起動

Node.js 22.12.0 以上を使用してください。

```bash
corepack enable
pnpm install
pnpm dev
```

`http://localhost:4321` を開きます。

## ビルド

```bash
pnpm build
pnpm preview
```

## Cloudflare Workers へデプロイ

1. Cloudflare にログインします。
2. `wrangler.jsonc` の `name` を必要に応じて変更します。
3. 次を実行します。

```bash
pnpm deploy
```

カスタムドメイン `JigokuNozoki.com` は Cloudflare Dashboard の Workers & Pages → Custom Domains から接続できます。

## コンテンツ更新

主なデータは以下にあります。

- `src/data/site.ts`：アクセス方法、見どころ、FAQ
- `src/pages/index.astro`：ページ本文、料金、営業時間
- `src/components/VisitPlanner.astro`：ルート案内、ロープウェー運賃
- `src/components/CostCalculator.astro`：料金計算

料金・営業時間は変更されるため、日本寺と鋸山ロープウェーの公式サイトを確認してから更新してください。

## 写真ライセンス

実景写真は Wikimedia Commons の Creative Commons 作品です。著作者・ライセンス・変更内容は `CREDITS.md` と `/photo-credits` に記載しています。写真を差し替える場合も、公開ライセンスと帰属表示を維持してください。
