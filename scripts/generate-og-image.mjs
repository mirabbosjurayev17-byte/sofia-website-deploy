/**
 * Generates public/og-image.jpg (1200x630) for Telegram / Twitter / Facebook previews.
 * Uses an existing sofa photo + SVG overlay with SOFIA·MEBEL brand text.
 *
 * Run: npm run images:og
 */
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public", "images", "products", "valensia", "1.jpg");
const OUT = join(ROOT, "public", "og-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"  stop-color="#2A2520" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="#2A2520" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#2A2520" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#shade)"/>

  <!-- Top eyebrow -->
  <text x="80" y="200"
        fill="#C9A57B" font-family="Georgia, 'Times New Roman', serif"
        font-size="22" letter-spacing="6" font-weight="500">
    SOFIA · MEBEL
  </text>

  <!-- Brand wordmark -->
  <text x="80" y="320"
        fill="#FAF6F3" font-family="Georgia, 'Times New Roman', serif"
        font-size="78" font-weight="400">
    Мягкая мебель
  </text>
  <text x="80" y="400"
        fill="#FAF6F3" font-family="Georgia, 'Times New Roman', serif"
        font-size="78" font-style="italic" font-weight="400">
    достойного качества
  </text>

  <!-- Tagline -->
  <text x="80" y="478"
        fill="#FAF6F3" opacity="0.78"
        font-family="Helvetica, Arial, sans-serif"
        font-size="24" letter-spacing="0.5">
    Ташкент · доставка по Узбекистану
  </text>

  <!-- Bottom rule + url -->
  <rect x="80" y="530" width="60" height="2" fill="#C9A57B"/>
  <text x="80" y="568"
        fill="#FAF6F3" opacity="0.85"
        font-family="Helvetica, Arial, sans-serif"
        font-size="20" letter-spacing="2">
    sofiamebel.uz
  </text>
</svg>
`);

async function main() {
  const buf = await sharp(SRC)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
    .composite([{ input: overlay }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
  await sharp(buf).toFile(OUT);
  console.log(`[og-image] wrote ${OUT}`);
}

main().catch((err) => {
  console.error("[og-image] fatal:", err);
  process.exit(1);
});
