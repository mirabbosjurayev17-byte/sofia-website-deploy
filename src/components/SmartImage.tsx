import type { ImgHTMLAttributes } from "react";

/**
 * Renders <picture> with a WebP <source> + original <img> fallback.
 * Auto-derives the .webp path from src (replaces .jpg/.jpeg/.png with .webp).
 *
 * Pass any standard <img> props — they apply to the inner <img>.
 * Use `wrapperClassName` if you need to style the outer <picture>.
 */
export interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  wrapperClassName?: string;
}

const RX = /\.(jpe?g|png)(\?.*)?$/i;

function toWebp(src: string): string | null {
  if (!RX.test(src)) return null;
  return src.replace(RX, ".webp$2");
}

export function SmartImage({ src, alt = "", wrapperClassName, ...rest }: SmartImageProps) {
  const webp = toWebp(src);
  return (
    <picture className={wrapperClassName}>
      {webp && <source srcSet={webp} type="image/webp" />}
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
