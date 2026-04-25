import { useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from "react";
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
const AUTOPLAY_MS = 2000;
const SWIPE_THRESHOLD = 50;

export function ProductCard({ product }: { product: Product }) {
  const { lang } = useLocale();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  // Stagger autoplay start so multiple cards on screen don't flip in unison.
  const offsetRef = useRef<number>(Math.floor(Math.random() * AUTOPLAY_MS));

  const total = product.images.length;

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  const onTouchStart = (e: ReactTouchEvent) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: ReactTouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    const start = touchStartRef.current;
    const end = touchEndRef.current;
    if (start === null || end === null) return;
    const delta = start - end;
    if (delta > SWIPE_THRESHOLD) next();
    else if (delta < -SWIPE_THRESHOLD) prev();
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  useEffect(() => {
    if (paused || total <= 1) return;
    let interval: ReturnType<typeof setInterval> | undefined;
    const startDelay = Math.max(200, AUTOPLAY_MS - offsetRef.current);
    const initial = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, AUTOPLAY_MS);
    }, startDelay);
    return () => {
      clearTimeout(initial);
      if (interval) clearInterval(interval);
    };
  }, [paused, total]);

  const isSale = !!product.oldPrice;
  const fmtPrice = (value: string) => (lang === "uz" ? value.replace("UZS", "so'm") : value);

  return (
    <div className="group flex flex-col">
      <div
        className="relative overflow-hidden bg-muted aspect-[4/5] touch-pan-y"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {product.badge && (
          <span
            className={`absolute top-3 left-3 z-20 text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 ${
              isSale ? "bg-red-600 text-white" : "bg-[var(--camel)] text-white"
            }`}
          >
            {localize(product.badge, lang)}
          </span>
        )}

        {/* Stacked, absolute-positioned images with opacity fade */}
        <div className="absolute inset-0">
          {product.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${localize(product.title, lang)} — ${i + 1}`}
              loading="lazy"
              width={1024}
              height={1280}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {product.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`${localize(product.title, lang)} — ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  current === i ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
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
                {fmtPrice(product.oldPrice as string)}
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
