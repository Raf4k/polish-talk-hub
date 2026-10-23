// @lovable.dev/vite-tanstack-config already includes TanStack Start, React,
// Tailwind, path aliases, and the Nitro integration used by Lovable.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isOvhStaticBuild: boolean = process.env.OVH_STATIC_BUILD === "1";

export default defineConfig({
  tanstackStart: {
    ...(isOvhStaticBuild
      ? {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
            failOnError: true,
          },
        }
      : {
          server: {
            entry: "server",
          },
        }),
  },
  ...(isOvhStaticBuild
    ? {
        nitro: {
          preset: "node-server",
          output: {
            dir: ".output",
            serverDir: ".output/server",
            publicDir: ".output/public",
          },
        },
      }
    : {}),
});
