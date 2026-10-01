import { defineConfig } from "blume";
import { cloudflare as cloudflareAnalytics } from "blume/analytics";
import { cloudflare as cloudflareDeploy } from "blume/deploy";

// Cloudflare Web Analytics のサイトトークンは、デプロイ前に Cloudflare ダッシュボードの
// 「Web Analytics」から取得し、環境変数 CLOUDFLARE_ANALYTICS_TOKEN に設定すること。
const cloudflareAnalyticsToken = process.env.CLOUDFLARE_ANALYTICS_TOKEN;

export default defineConfig({
  title: "Drakontia Tools Hub",
  description: "ゲーム向けツールの紹介・使い方・改修ログをまとめる個人サイト。",
  github: {
    owner: "drakontia",
    repo: "homepage",
    branch: "main",
  },
  navigation: {
    tabs: [
      { label: "Home", path: "/" },
      { label: "Apps", path: "/apps" },
      { label: "Blog", path: "/blog" },
    ],
  },
  analytics: cloudflareAnalyticsToken
    ? [cloudflareAnalytics({ token: cloudflareAnalyticsToken })]
    : [],
  deployment: cloudflareDeploy(),
  agents: {
    llmsTxt: true,
  },
});
