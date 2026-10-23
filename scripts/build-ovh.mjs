import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
const allowMissing = process.argv.includes("--allow-missing-assets");
const out = path.join(root, "ovh-dist");
const stage = path.join(root, ".ovh");
const missing = [];
const urls = {};
const mappings = JSON.parse(await readFile("ovh/media-urls.json", "utf8"));
await mkdir(stage, { recursive: true });
// Fixed paths inside this checkout; never delete a user-supplied directory.
await rm(out, { recursive: true, force: true });

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const name = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Symbolic link is not allowed: ${name}`);
      return entry.isDirectory() ? files(name) : [name];
    }),
  );
  return nested.flat();
}

for (const file of (await files("src/assets")).filter((f) => f.endsWith(".asset.json"))) {
  const asset = JSON.parse(await readFile(file, "utf8"));
  const name = asset.original_filename;
  if (!name || path.basename(name) !== name || /[\\/\r\n]/.test(name)) {
    throw new Error(`Invalid asset filename: ${file}`);
  }
  if (existsSync(path.join("public/media", name))) {
    if ((await stat(path.join("public/media", name))).size === 0)
      throw new Error(`Empty file: ${name}`);
    urls[name] = `/media/${encodeURIComponent(name)}`;
  } else {
    const external = mappings[name] ?? asset.url;
    if (typeof external === "string" && external.startsWith("https://")) {
      const response = await fetch(external, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`Asset unavailable (${response.status}): ${name}`);
      const contentType = response.headers.get("content-type")?.split(";")[0];
      if (contentType !== asset.content_type)
        throw new Error(`Unexpected content type for ${name}: ${contentType}`);
      await response.body?.cancel();
      urls[name] = external;
    } else {
      missing.push(name);
    }
  }
}
await writeFile(path.join(stage, "media-urls.json"), JSON.stringify(urls, null, 2));
await writeFile(path.join(stage, "missing-assets.json"), JSON.stringify(missing, null, 2));
if (missing.length) {
  console.warn(`Missing media (${missing.length}):\n${missing.map((n) => `  ${n}`).join("\n")}`);
  if (!allowMissing) {
    throw new Error(
      "Add the original files to public/media/ or HTTPS URLs to ovh/media-urls.json. For an incomplete test build only, use build:ovh:preview.",
    );
  }
  console.warn("INCOMPLETE PREVIEW ONLY — publication is blocked until media is supplied.");
}

// Start's default output folders are fixed by this config. Clear old route HTML
// so a removed route cannot be accidentally included in the next publication.
await rm(path.join(root, "dist"), { recursive: true, force: true });
const result = spawnSync(
  process.execPath,
  ["node_modules/vite/bin/vite.js", "build", "--config", "vite.ovh.config.ts"],
  {
    stdio: "inherit",
    env: { ...process.env, NODE_ENV: "production" },
  },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
await cp("dist/client", out, { recursive: true });
// Include Apache settings only in the OVH artifact, never in Lovable's public/.
await cp("ovh/apache.htaccess", path.join(out, ".htaccess"));
await writeFile(
  path.join(out, "404.html"),
  '<!doctype html><html lang="pl"><meta charset="utf-8"><title>Nie znaleziono strony</title><h1>Nie znaleziono strony</h1><a href="/">Strona główna</a></html>',
);

// Check every route, not only the homepage, for actual prerendered content.
const tree = await readFile("src/routeTree.gen.ts", "utf8");
const routes = [...new Set([...tree.matchAll(/fullPath: '([^']+)'/g)].map((m) => m[1]))];
if (!routes.length) throw new Error("No routes found in generated route tree.");
for (const route of routes) {
  if (route.includes("$"))
    throw new Error(`Dynamic route requires explicit static paths: ${route}`);
  const html = await readFile(path.join(out, route.replace(/^\//, ""), "index.html"), "utf8");
  if (!html.includes("<h1") || html.includes("Ta strona nie załadowała się")) {
    throw new Error(`Route did not prerender its content: ${route}`);
  }
}
const outputFiles = await files(out);
for (const file of outputFiles.filter((f) => /\.(html|js|css|json)$/.test(f))) {
  const content = await readFile(file, "utf8");
  if (!allowMissing && content.includes("/__l5e/assets-v1/")) {
    throw new Error(`Unresolved Lovable asset in ${file}`);
  }
}
const bytes = (await Promise.all(outputFiles.map(async (f) => (await stat(f)).size))).reduce(
  (a, b) => a + b,
  0,
);
// Leave room for the previous deployment's hashed bundles on a 100 MB account.
if (bytes > 80_000_000)
  throw new Error(`OVH artifact exceeds the 80 MB safety budget: ${bytes} bytes`);
const report = { deployable: missing.length === 0, missingAssets: missing, routes, bytes };
await writeFile(path.join(out, "ovh-build-report.json"), JSON.stringify(report, null, 2));
console.log(
  `OVH: ${routes.length} routes, ${(bytes / 1e6).toFixed(2)} MB. Deployable: ${report.deployable}`,
);
