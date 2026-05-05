/**
 * Scan public/images/products/* and generate a JSON manifest
 * mapping each folder to its numbered .jpg image count.
 *
 * Output: src/lib/image-manifest.json
 * Run:    node scripts/generate-image-manifest.mjs
 * Auto-runs as part of prebuild.
 */
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_DIR = join(__dirname, "..", "public", "images", "products");
const OUTPUT = join(__dirname, "..", "src", "lib", "image-manifest.json");

function countImages(folder) {
  let n = 0;
  while (existsSync(join(PRODUCTS_DIR, folder, `${n + 1}.jpg`))) {
    n++;
  }
  return n;
}

function main() {
  if (!existsSync(PRODUCTS_DIR)) {
    console.log("[image-manifest] products dir not found — writing empty manifest.");
    writeFileSync(OUTPUT, "{}\n");
    return;
  }

  const entries = readdirSync(PRODUCTS_DIR, { withFileTypes: true });
  const manifest = {};

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const count = countImages(entry.name);
    if (count > 0) {
      manifest[entry.name] = count;
    }
  }

  writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2) + "\n");
  const total = Object.values(manifest).reduce((a, b) => a + b, 0);
  console.log(
    `[image-manifest] ${Object.keys(manifest).length} folders, ${total} images total`
  );
}

main();
