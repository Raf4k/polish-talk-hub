import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Only the OVH build uses this config. Lovable keeps using vite.config.ts.
const mediaUrls: Record<string, string> = JSON.parse(
  readFileSync(resolve(".ovh/media-urls.json"), "utf8"),
);

export default defineConfig({
  nitro: false,
  plugins: [
    {
      name: "ovh-media-urls",
      enforce: "pre",
      load(id) {
        const file = id.split("?")[0];
        if (!file?.endsWith(".asset.json")) return;
        const asset = JSON.parse(readFileSync(file, "utf8"));
        return JSON.stringify({ ...asset, url: mediaUrls[asset.original_filename] ?? asset.url });
      },
    },
  ],
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      // All current routes are static; do not crawl document/PDF download links.
      crawlLinks: false,
      failOnError: true,
      concurrency: 4,
    },
  },
});
