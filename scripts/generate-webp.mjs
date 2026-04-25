/**
 * Generate WebP siblings for every .jpg / .jpeg / .png under public/images.
 * Skips files where a fresh .webp already exists (mtime >= source).
 *
 * Run: npm run images:webp
 * Auto-runs as prebuild step.
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");
const EXTS = new Set([".jpg", ".jpeg", ".png"]);
const QUALITY = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (EXTS.has(extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function webpPathFor(src) {
  const ext = extname(src);
  return join(dirname(src), basename(src, ext) + ".webp");
}

function isFresh(src, dst) {
  if (!existsSync(dst)) return false;
  try {
    return statSync(dst).mtimeMs >= statSync(src).mtimeMs;
  } catch {
    return false;
  }
}

async function main() {
  if (!existsSync(ROOT)) {
    console.log(`[webp] ${ROOT} does not exist — nothing to do.`);
    return;
  }
  const all = await walk(ROOT);
  let made = 0;
  let skipped = 0;
  let savedBytes = 0;

  for (const src of all) {
    const dst = webpPathFor(src);
    if (isFresh(src, dst)) {
      skipped++;
      continue;
    }
    try {
      const buf = await sharp(src).webp({ quality: QUALITY, effort: 4 }).toBuffer();
      await writeFile(dst, buf);
      const srcSize = (await stat(src)).size;
      savedBytes += srcSize - buf.length;
      made++;
    } catch (err) {
      console.error(`[webp] FAILED ${src}:`, err.message);
    }
  }
  const mb = (savedBytes / 1024 / 1024).toFixed(2);
  console.log(`[webp] generated=${made} skipped=${skipped} total=${all.length} saved≈${mb} MB`);
}

main().catch((err) => {
  console.error("[webp] fatal:", err);
  process.exit(1);
});
