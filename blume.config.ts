import { defineConfig } from "blume";
import { vercel as vercelAnalytics } from "blume/analytics";
import { vercel } from "blume/deploy";

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
      {
        label: "ホーム",
        path: "/",
        items: [
          { label: "ChaosZeroNightmareDeckBuilder", path: "/apps/chaos-zero-nightmare-deck-builder" },
          { label: "ChaosZeroNightmareChallengeChecker", path: "/apps/chaos-zero-nightmare-challenge-checker" },
          { label: "ResonanceRateChecker", path: "/apps/resonance-rate-checker" },
          { label: "ResonanceDeckBuilder", path: "/apps/resonance-deck-builder" },
          { label: "EndfieldComboBuilder", path: "/apps/endfield-combo-builder" },
        ],
      },
      { label: "アプリ", path: "/apps" },
      { label: "ブログ", path: "/blog" },
    ],
  },
  analytics: [vercelAnalytics()],
  deployment: vercel(),
  agents: {
    llmsTxt: true,
  },
});
