import { useState, useEffect } from "react";
import { localize, useLocale, ui } from "@/lib/i18n";

export function Header() {
  const { lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--ivory)] border-b border-[var(--charcoal)]/10">
      {/* Promotional top bar */}
      <div className="bg-[var(--charcoal)] text-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10 h-8 lg:h-9 flex items-center justify-center">
          <p className="font-sans text-[11px] lg:text-[12px] tracking-[0.05em] text-center text-white/95 truncate">
            {localize(ui.topBarPromo, lang)}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl lg:text-2xl tracking-tight text-[var(--charcoal)]">
          SOFIA<span className="text-[var(--camel)]">·</span>MEBEL
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {ui.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--charcoal)]/80 hover:text-[var(--camel)] transition-colors tracking-wide"
            >
              {localize(n.label, lang)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-[var(--charcoal)] hover:text-[var(--camel)] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z"/>
            </svg>
          </a>
          <a href="tel:+998970003334" className="text-sm text-[var(--charcoal)] hover:text-[var(--camel)] transition-colors tracking-wide">
            +998 97 000 33 34
          </a>
          <div className="text-sm tracking-wide text-[var(--charcoal)]/60">
            <button
              onClick={() => setLang("ru")}
              className={`transition-colors ${lang === "ru" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`}
            >
              RU
            </button>
            <span className="px-2">|</span>
            <button
              onClick={() => setLang("uz")}
              className={`transition-colors ${lang === "uz" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`}
            >
              UZ
            </button>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2.5">
          <div className="font-sans text-[13px] tracking-wide text-[var(--charcoal)]/70 flex items-center">
            <button
              onClick={() => setLang("ru")}
              className={`transition-colors px-1 ${lang === "ru" ? "text-[var(--charcoal)] font-semibold" : "hover:text-[var(--camel)]"}`}
              aria-label="Русский"
            >
              RU
            </button>
            <span className="text-[var(--charcoal)]/30">|</span>
            <button
              onClick={() => setLang("uz")}
              className={`transition-colors px-1 ${lang === "uz" ? "text-[var(--charcoal)] font-semibold" : "hover:text-[var(--camel)]"}`}
              aria-label="O'zbekcha"
            >
              UZ
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Меню"
            className="text-[var(--charcoal)] p-2 -mr-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-[var(--ivory)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#FAF6F3" }}
      >
        <div className="h-16 px-5 flex items-center justify-between border-b border-[var(--charcoal)]/10">
          <span className="font-serif text-xl text-[var(--charcoal)]">SOFIA<span className="text-[var(--camel)]">·</span>MEBEL</span>
          <div className="flex items-center gap-4">
            <div className="text-sm tracking-wide text-[var(--charcoal)]/60">
              <button
                onClick={() => setLang("ru")}
                className={`transition-colors ${lang === "ru" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`}
              >
                RU
              </button>
              <span className="px-2">|</span>
              <button
                onClick={() => setLang("uz")}
                className={`transition-colors ${lang === "uz" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`}
              >
                UZ
              </button>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Закрыть" className="p-2 -mr-2 text-[var(--charcoal)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-[calc(100%-4rem)] justify-between p-6">
          <nav className="flex flex-col gap-1 mt-4">
            {ui.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-sans font-medium text-xl py-3 text-[var(--charcoal)] border-b border-[var(--charcoal)]/10 tracking-tight"
              >
                {localize(n.label, lang)}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pb-6">
            <a
              href="https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--camel)] text-white text-center py-4 tracking-wide text-sm uppercase"
            >
              {localize(ui.writeTelegram, lang)}
            </a>
            <a
              href="tel:+998970003334"
              className="border border-[var(--charcoal)] text-[var(--charcoal)] text-center py-4 tracking-wide text-sm uppercase"
            >
              {localize(ui.call, lang)}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
