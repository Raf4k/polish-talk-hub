import { readFile, writeFile } from "node:fs/promises";

// Lovable may write sandbox registry URLs into its lockfile. Override only
// those download locations in CI, keeping package versions and integrity hashes.
const lockPath = new URL("../bun.lock", import.meta.url);
const original = await readFile(lockPath, "utf8");
let changed = 0;
const normalized = original.replace(
  /^(\s*"[^"]+": \["([^"]+)", )"(https:\/\/[^"\s]+)"/gm,
  (line, prefix, identity, location) => {
    const url = new URL(location);
    if (!/^europe-west\d+-npm\.pkg\.dev$/.test(url.hostname)) return line;
    if (
      !url.pathname.startsWith("/lovable-core-prod/sandbox-npm-cache/") &&
      !url.pathname.startsWith(
        "/artifacts-downloads/namespaces/lovable-core-prod/repositories/sandbox-npm-cache/downloads/",
      )
    )
      return line;
    const split = identity.lastIndexOf("@");
    const name = identity.slice(0, split);
    const version = identity.slice(split + 1);
    if (
      !/^(?:@[a-z0-9._-]+\/)?[a-z0-9._-]+$/i.test(name) ||
      !/^\d+\.\d+\.\d+[a-z0-9.+-]*$/i.test(version)
    ) {
      throw new Error(`Unexpected package identity: ${identity}`);
    }
    changed++;
    return `${prefix}"https://registry.npmjs.org/${name}/-/${name.split("/").at(-1)}-${version}.tgz"`;
  },
);
if (normalized.includes("sandbox-npm-cache")) {
  throw new Error(
    "Unrecognized Lovable registry URL; refusing to install from the sandbox registry",
  );
}
await writeFile(lockPath, normalized);
console.log(
  `OVH install: ${changed} sandbox download URLs replaced; versions and integrity hashes preserved.`,
);
