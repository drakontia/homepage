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
      { label: "Home", path: "/" },
      { label: "Apps", path: "/apps" },
      { label: "Blog", path: "/blog" },
    ],
    featured: [
      { label: "ChaosZeroNightmareDeckBuilder", href: "/apps/chaos-zero-nightmare-deck-builder" },
      { label: "ChaosZeroNightmareChallengeChecker", href: "/apps/chaos-zero-nightmare-challenge-checker" },
      { label: "ResonanceRateChecker", href: "/apps/resonance-rate-checker" },
      { label: "ResonanceDeckBuilder", href: "/apps/resonance-deck-builder" },
      { label: "EndfieldComboBuilder", href: "/apps/endfield-combo-builder" },
    ],
  },
  analytics: [vercelAnalytics()],
  deployment: vercel(),
  agents: {
    llmsTxt: true,
  },
});
