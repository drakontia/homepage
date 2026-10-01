import assert from "node:assert/strict";
import {
  lstat,
  mkdtemp,
  mkdir,
  realpath,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { prerenderDepsPlugin } from "blume/astro";

test("concurrent prerender dependency linking is idempotent", async () => {
  const root = await mkdtemp(join(tmpdir(), "homepage-render-deps-"));
  const packageDir = join(root, "node_modules", "fixture");
  const outputDir = join(root, "output");
  const importer = join(root, "src", "page.js");

  try {
    await mkdir(packageDir, { recursive: true });
    await mkdir(join(root, "src"), { recursive: true });
    await writeFile(
      join(packageDir, "package.json"),
      JSON.stringify({ name: "fixture", version: "1.0.0" })
    );

    const plugin = prerenderDepsPlugin(join(root, "blume"));
    await plugin.resolveId.handler.call(
      {
        environment: { name: "prerender" },
        resolve: async () => ({ id: "fixture", external: true }),
      },
      "fixture",
      importer,
      {}
    );

    await Promise.all(
      Array.from({ length: 64 }, () =>
        plugin.writeBundle.call(
          { environment: { name: "prerender" } },
          { dir: outputDir }
        )
      )
    );

    assert.equal(
      await realpath(join(outputDir, "node_modules", "fixture")),
      await realpath(packageDir)
    );
    assert.ok(
      (await lstat(join(outputDir, "node_modules", "fixture"))).isSymbolicLink()
    );
  } finally {
    await rm(root, { force: true, recursive: true });
  }
});
