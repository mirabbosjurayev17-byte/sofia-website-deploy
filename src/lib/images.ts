import manifest from "./image-manifest.json";

const counts = manifest as Record<string, number>;

/**
 * Generate product image paths from the auto-scanned manifest.
 * Drop a new .jpg into public/images/products/{folder}/ and rebuild — done.
 */
export function productImages(folder: string): string[] {
  const count = counts[folder];
  if (!count) {
    console.warn(`[productImages] No images found for folder "${folder}"`);
    return [];
  }
  return Array.from({ length: count }, (_, i) => `/images/products/${folder}/${i + 1}.jpg`);
}
