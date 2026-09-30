# JigokuNozoki.com

千葉県・鋸山の「地獄のぞき（地獄窺視 / Jigoku Nozoki, View of Hell）」を案内する非公式の観光サイトです。
日本語・英語・繁体中文の三言語に対応し、日系の編集デザイン、実景写真、アクセス比較、料金試算、モデルコース、FAQ、長尾ガイド（行き方／拝観ガイド）を備えています。

## 技術構成

- Astro 7 + TypeScript
- Tailwind CSS 4（Vite plugin）
- pnpm
- Cloudflare Workers + `@astrojs/cloudflare`（`output: 'server'`）
- データベースなし / ログインなし / CMSなし

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
2. `wrangler.jsonc` の `name` / `assets.directory` を確認します（Astro 7 + アダプタの生成物は `dist/client` と `dist/server` に分かれるため、`assets.directory` は `./dist/client`）。
3. 次を実行します。

```bash
pnpm deploy
```

カスタムドメイン `JigokuNozoki.com` は Cloudflare Dashboard の Workers & Pages → Custom Domains から接続できます。

### ドメイン正規化（重要）

`http://`、`https://www.` を `https://jigokunozoki.com` に統一する 301 リダイレクトは、Workers 静的アセットの `_redirects` ではドメイン単位のルールを扱えません。Cloudflare コンソールで次を設定してください。

- **Always Use HTTPS**：ON（SSL/TLS → Edge Certificates）
- **Redirect Rules**：`www.jigokunozoki.com/*` → `https://jigokunozoki.com/${1}`（301）

`public/_headers` で HSTS などのセキュリティヘッダーを配信しています。

## 多言語構成

| 言語 | ルート | 説明 |
| --- | --- | --- |
| 日本語（既定） | `/`、`/access`、`/guide` | x-default も日本語版を指します |
| English | `/en`、`/en/access`、`/en/guide` | |
| 繁體中文 | `/zh`、`/zh/access`、`/zh/guide` | |

- `src/pages/404.astro`、`/privacy`、`/photo-credits` は日本語のみです。`i18n={false}` を指定して hreflang を出力しないようにしています（存在しない言語版へのリンクを避けるため）。
- 言語切替は `<Header>` と `<Footer>` にあります。単語ページでは `showLanguages={false}` で非表示にできます。

## コンテンツ更新

主なデータは以下にあります。

- `src/data/site.ts`：景点の事実（住所・電話・Plus Code・座標・Google マップ URL・評価スナップショット・拝観料・拝観時間）。**唯一の情報源**です。
- `src/i18n.ts`：ロケール定義、`pagePath()`、`hreflangAlternates()`、ナビゲーションやボタンなどの UI 文字列。
- `src/content/guide.ts`：ホームページの全文案（ja / en / zh）。
- `src/content/topics.ts`：長尾ガイド（`/access`、`/guide`）の全文案（ja / en / zh）。
- `src/lib/schema.ts`：TouristAttraction・WebSite・FAQPage・BreadcrumbList の構造化データ生成。
- `src/components/`：セクション単位のコンポーネント（すべて `locale` もしくはコンテンツオブジェクトを受け取ります）。

料金・営業時間は変更されるため、日本寺と鋸山ロープウェーの公式サイトを確認してから更新してください。

### 言語を追加する場合

1. `src/i18n.ts` の `locales` と `localeMeta`、`ui` に追加。
2. `src/content/guide.ts` と `src/content/topics.ts` に同じキーで文案を追加。
3. `src/pages/<locale>/` に `index.astro`、`access.astro`、`guide.astro` を作成（既存ファイルをコピーして `locale` を書き換えるだけ）。
4. `src/pages/sitemap.xml.ts` は `locales` を見るため変更不要です。

## SEO メモ

- 站点名は「景点名称 + 城市 + 旅游指南」形式：`src/data/site.ts` の `siteNames`（`withSiteName()` で子页タイトルに付与）。
- 各ページは canonical / hreflang（ja・en・zh-Hant・x-default）/ OG / Twitter Card を出力。
- 構造化データ：全ページに `TouristAttraction`（`@id` は `https://jigokunozoki.com#attraction` 固定で三言語を同一実体に）＋ `WebSite`、ホームとガイドに `FAQPage`、ガイドに `BreadcrumbList`。
- 評価（`ratingSnapshot`）は Google マップ掲載値の参考スナップショットです。変動するため必ず出典と取得時期を併記してください。

## 写真ライセンス

実景写真は Wikimedia Commons の Creative Commons 作品です。著作者・ライセンス・変更内容は `CREDITS.md` と `/photo-credits` に記載しています。写真を差し替える場合も、公開ライセンスと帰属表示を維持してください。
