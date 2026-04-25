import { localize, useLocale, ui } from "@/lib/i18n";

const TELEGRAM_URL =
  "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20";

export function FloatingTelegram() {
  const { lang } = useLocale();
  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={localize(ui.floatingTelegramAria, lang)}
      className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-40 inline-flex items-center gap-2.5 pl-4 pr-5 py-3 lg:py-3.5 rounded-full bg-[#229ED9] hover:bg-[#1c8cc1] text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)] hover:shadow-[0_10px_28px_rgba(34,158,217,0.45)] transition-all duration-200 hover:-translate-y-0.5 font-sans"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z" />
      </svg>
      <span className="text-sm lg:text-[15px] font-medium tracking-tight whitespace-nowrap">
        {localize(ui.floatingTelegramLabel, lang)}
      </span>
    </a>
  );
}
