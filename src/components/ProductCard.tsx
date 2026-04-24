import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { localize, type LocalizedText, useLocale, ui } from "@/lib/i18n";

export interface Product {
  title: LocalizedText;
  description: LocalizedText;
  price: string;
  oldPrice?: string;
  images: string[];
  badge?: LocalizedText;
}

const TG = "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20";

export function ProductCard({ product }: { product: Product }) {
  const { lang } = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const isSale = !!product.oldPrice;
  const fmtPrice = (value: string) => (lang === "uz" ? value.replace("UZS", "so'm") : value);

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-muted aspect-[4/5]">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-10 text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 ${
              isSale ? "bg-red-600 text-white" : "bg-[var(--camel)] text-white"
            }`}
          >
            {localize(product.badge, lang)}
          </span>
        )}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {product.images.map((src, i) => (
              <div className="flex-[0_0_100%] min-w-0 h-full overflow-hidden" key={i}>
                <img
                  src={src}
                  alt={`${localize(product.title, lang)} — изображение ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        {snaps.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {snaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "w-5 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="pt-5 pb-2 flex flex-col gap-2">
        <h3 className="font-sans font-bold text-[15px] text-[var(--charcoal)] leading-snug tracking-tight">
          {localize(product.title, lang)}
        </h3>
        <p className="text-[13px] text-[var(--charcoal)]/60 leading-relaxed font-sans">
          {localize(product.description, lang)}
        </p>
        <div className="flex items-baseline gap-3 pt-1">
          {isSale ? (
            <>
              <span className="font-sans font-bold text-[var(--charcoal)] tracking-tight">
                {fmtPrice(product.price)}
              </span>
              <span className="text-sm text-[var(--charcoal)]/40 line-through font-sans">
                {fmtPrice(product.oldPrice)}
              </span>
            </>
          ) : (
            <span className="font-sans font-bold text-[var(--charcoal)] tracking-tight">
              {fmtPrice(product.price)}
            </span>
          )}
        </div>
      </div>

      <a
        href={TG}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center border border-[var(--charcoal)]/25 text-[var(--charcoal)] text-sm tracking-wide py-3 px-4 transition-colors hover:bg-[var(--charcoal)] hover:text-white hover:border-[var(--charcoal)] font-sans"
      >
        {localize(ui.askAvailability, lang)}
      </a>
    </div>
  );
}
