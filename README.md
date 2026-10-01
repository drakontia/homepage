# homepage
ゲーム用ツールを紹介する個人サイト

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

- Blumeベースで構築
- Cloudflare Workersデプロイ想定（`blume.config.ts`で`cloudflare()`設定）
- `llms.txt`/`llms-full.txt`を生成

## Cloudflare Workers Builds

CloudflareのWorkerにGitHubリポジトリを接続し、ビルドコマンドを `pnpm build`、
デプロイコマンドを `pnpm exec wrangler deploy`、
プレビューコマンドを `pnpm exec wrangler preview` に設定します。
Wranglerはプロジェクトの開発依存としてインストールされます。
Cloudflare Web Analyticsを使う場合は、ビルド環境変数
`CLOUDFLARE_ANALYTICS_TOKEN` にサイトトークンを設定します。
