import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, createContext, useContext, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
const LocaleContext = createContext(null);
function LocaleProvider({ children }) {
  const [lang, setLang] = useState("ru");
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return /* @__PURE__ */ jsx(LocaleContext.Provider, { value, children });
}
function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
function localize(text, lang) {
  return text[lang];
}
const ui = {
  brandDescription: {
    ru: "«Sofia-Mebel» — шикарный выбор для тех, кто ценит не только комфорт, но и качество мягкой мебели.",
    uz: "«Sofia-Mebel» — qulaylik va sifatli yumshoq mebelni qadrlaydiganlar uchun ajoyib tanlov."
  },
  nav: [
    { href: "#catalog", label: { ru: "Каталог", uz: "Katalog" } },
    { href: "#promo", label: { ru: "Акции", uz: "Aksiyalar" } },
    { href: "#chairs", label: { ru: "Кресла-качалки", uz: "Kreslo-kachalkalar" } },
    { href: "#installments", label: { ru: "Рассрочка", uz: "Muddatli to'lov" } },
    { href: "#custom", label: { ru: "На заказ", uz: "Buyurtma asosida" } },
    { href: "#contacts", label: { ru: "Контакты", uz: "Kontaktlar" } }
  ],
  heroDescription: {
    ru: "Удобные механизмы, ортопедические пружины и ткани с водоотталкивающей пропиткой.",
    uz: "Qulay mexanizmlar, ortopedik prujinalar va suv qaytaruvchi matolar."
  },
  showCatalog: { ru: "Смотреть каталог", uz: "Katalogni ko'rish" },
  sectionHits: { ru: "Хиты продаж: Мягкая мебель", uz: "Ommabop: Yumshoq mebellar" },
  sectionPromo: { ru: "Акции и скидки", uz: "Aksiya va chegirmalar" },
  sectionChairs: { ru: "Кресла-качалки", uz: "Kreslo-kachalkalar" },
  collectionEyebrow: { ru: "Коллекция 2026", uz: "To'plam 2026" },
  specialPriceEyebrow: { ru: "Специальные цены", uz: "Maxsus narxlar" },
  cozyEyebrow: { ru: "Уют и расслабление", uz: "Shinamlik va hordiq" },
  helpEyebrow: { ru: "Помощь", uz: "Yordam" },
  paymentsEyebrow: { ru: "Удобная оплата", uz: "Qulay to'lov" },
  customEyebrow: { ru: "Индивидуальное производство", uz: "Individual ishlab chiqarish" },
  customDescription: {
    ru: "В SOFIA-MEBEL мы создаём мебель, идеально вписанную в ваше пространство. Вы выбираете параметры и обивку. Срок изготовления — до 15 дней.",
    uz: "SOFIA-MEBEL da biz sizning xonadoningizga mukammal mos tushuvchi mebel yaratamiz. O'lcham va matoni o'zingiz tanlaysiz. Tayyorlash muddati — 15 kungacha."
  },
  fabrics: { ru: "350+ тканей\nобивки", uz: "350+ xil mato" },
  productionDays: { ru: "дней\nизготовление", uz: "kun\nishlab chiqarish" },
  customSizes: { ru: "возможных\nразмеров", uz: "mumkin bo'lgan\no'lchamlar" },
  discussOrder: { ru: "Обсудить заказ", uz: "Buyurtmani muhokama qilish" },
  discountBadge: { ru: "Скидка", uz: "Chegirma" },
  askAvailability: { ru: "Уточнить наличие", uz: "Mavjudligini bilish" },
  writeTelegram: { ru: "Написать в Telegram", uz: "Telegram orqali yozish" },
  call: { ru: "Позвонить", uz: "Qo'ng'iroq qilish" },
  installment12: { ru: "Рассрочка на 12 месяцев", uz: "12 oygacha muddatli to'lov" },
  installment6: { ru: "На 6 месяцев (+15%)", uz: "6 oyga (+15%)" },
  installment12plus: { ru: "На 12 месяцев (+25%)", uz: "12 oyga (+25%)" },
  installmentNote: {
    ru: "*Рассрочка не распространяется на товары со скидкой. Доставка оплачивается отдельно.",
    uz: "*Muddatli to'lov chegirmadagi tovarlarga amal qilmaydi. Yetkazib berish xizmati alohida hisoblanadi."
  },
  faqTitle: { ru: "Часто задаваемые вопросы", uz: "Ko'p so'raladigan savollar" },
  faq: [
    {
      q: { ru: "У вас есть рассрочка?", uz: "Sizda muddatli to'lov bormi?" },
      a: { ru: "Да, через Uzum, Anor и Open Bank.", uz: "Ha, Uzum, Anor va Open Bank orqali mavjud." }
    },
    {
      q: { ru: "Вы делаете доставку в другие города?", uz: "Boshqa shaharlarga yetkazib berish bormi?" },
      a: {
        ru: "Бесплатная доставка по всему Узбекистану (кроме акционных товаров).",
        uz: "Ha, O'zbekiston bo'ylab yetkazib berish bepul (aksiyadagi tovarlardan tashqari)."
      }
    },
    {
      q: { ru: "У вас есть шоу-рум?", uz: "Tayyor mebellarni ko'rish uchun shourumingiz bormi?" },
      a: {
        ru: "Ташкент, ул.Мукими 98А. Без выходных с 10:00 до 19:00.",
        uz: "Toshkent sh., Muqimiy ko'chasi, 98A. Dam olish kunlarisiz, 10:00 dan 19:00 gacha ishlaymiz."
      }
    },
    {
      q: { ru: "Мебель только готовая или под заказ?", uz: "Mebellar faqat tayyormi yoki buyurtma ham olasizlarmi?" },
      a: {
        ru: "Есть в наличии и под заказ, срок до 15 дней.",
        uz: "Tayyor mebellar ham mavjud, shuningdek buyurtma asosida ham yasab beramiz (15 kungacha)."
      }
    },
    {
      q: { ru: "У вас мебель местного производства?", uz: "Mebellar mahalliy ishlab chiqarishmi?" },
      a: {
        ru: "Да, труд местных мастеров с использованием премиальных импортных материалов.",
        uz: "Ha, mahalliy ustalarimiz mehnati hamda yuqori sifatli import materiallardan foydalaniladi."
      }
    }
  ],
  landmark: {
    ru: "Ориентир: напротив ресторана «Фламинго» или ресторан «Сазанчик»",
    uz: "Mo'ljal: Flamingo restorani yoki Sazanchik ro'parasida"
  },
  everyday: { ru: "Ежедневно 10:00 — 19:00", uz: "Har kuni 10:00 — 19:00" },
  rights: { ru: "Все права защищены.", uz: "Barcha huquqlar himoyalangan." },
  addressLabel: { ru: "Адрес", uz: "Manzil" },
  phonesLabel: { ru: "Телефоны", uz: "Telefonlar" },
  scheduleLabel: { ru: "Часы работы", uz: "Ish vaqti" },
  socialLabel: { ru: "Социальные сети", uz: "Ijtimoiy tarmoqlar" },
  telegramChannel: { ru: "Telegram канал", uz: "Telegram kanal" },
  managerTelegram: { ru: "Менеджер (Telegram)", uz: "Menejer (Telegram)" },
  cityCountry: { ru: "Ташкент, Узбекистан", uz: "Toshkent, O'zbekiston" },
  addressLine: { ru: "Ташкент, ул. Мукими 98А", uz: "Toshkent, Muqimiy ko'chasi 98A" }
};
function Header() {
  const { lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-[var(--ivory)] border-b border-[var(--charcoal)]/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "font-serif text-xl lg:text-2xl tracking-tight text-[var(--charcoal)]", children: [
        "SOFIA",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)]", children: "·" }),
        "MEBEL"
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-9", children: ui.nav.map((n) => /* @__PURE__ */ jsx(
        "a",
        {
          href: n.href,
          className: "text-sm text-[var(--charcoal)]/80 hover:text-[var(--camel)] transition-colors tracking-wide",
          children: localize(n.label, lang)
        },
        n.href
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-5", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Telegram",
            className: "text-[var(--charcoal)] hover:text-[var(--camel)] transition-colors",
            children: /* @__PURE__ */ jsx("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z" }) })
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "tel:+998970003334", className: "text-sm text-[var(--charcoal)] hover:text-[var(--camel)] transition-colors tracking-wide", children: "+998 97 000 33 34" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm tracking-wide text-[var(--charcoal)]/60", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setLang("ru"),
              className: `transition-colors ${lang === "ru" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`,
              children: "RU"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "px-2", children: "|" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setLang("uz"),
              className: `transition-colors ${lang === "uz" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`,
              children: "UZ"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpen(true),
          "aria-label": "Меню",
          className: "lg:hidden text-[var(--charcoal)] p-2 -mr-2",
          children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M3 6h18M3 12h18M3 18h18" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `lg:hidden fixed inset-0 z-[60] bg-[var(--ivory)] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`,
        style: { backgroundColor: "#FAF6F3" },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "h-16 px-5 flex items-center justify-between border-b border-[var(--charcoal)]/10", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-serif text-xl text-[var(--charcoal)]", children: [
              "SOFIA",
              /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)]", children: "·" }),
              "MEBEL"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-sm tracking-wide text-[var(--charcoal)]/60", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setLang("ru"),
                    className: `transition-colors ${lang === "ru" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`,
                    children: "RU"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "px-2", children: "|" }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setLang("uz"),
                    className: `transition-colors ${lang === "uz" ? "text-[var(--camel)]" : "hover:text-[var(--camel)]"}`,
                    children: "UZ"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), "aria-label": "Закрыть", className: "p-2 -mr-2 text-[var(--charcoal)]", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-[calc(100%-4rem)] justify-between p-6", children: [
            /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-1 mt-4", children: ui.nav.map((n) => /* @__PURE__ */ jsx(
              "a",
              {
                href: n.href,
                onClick: () => setOpen(false),
                className: "font-sans font-medium text-xl py-3 text-[var(--charcoal)] border-b border-[var(--charcoal)]/10 tracking-tight",
                children: localize(n.label, lang)
              },
              n.href
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pb-6", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[var(--camel)] text-white text-center py-4 tracking-wide text-sm uppercase",
                  children: localize(ui.writeTelegram, lang)
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+998970003334",
                  className: "border border-[var(--charcoal)] text-[var(--charcoal)] text-center py-4 tracking-wide text-sm uppercase",
                  children: localize(ui.call, lang)
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const TG = "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20";
function ProductCard({ product }) {
  const { lang } = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);
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
  const fmtPrice = (value) => lang === "uz" ? value.replace("UZS", "so'm") : value;
  return /* @__PURE__ */ jsxs("div", { className: "group flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-muted aspect-[4/5]", children: [
      product.badge && /* @__PURE__ */ jsx(
        "span",
        {
          className: `absolute top-3 left-3 z-10 text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 ${isSale ? "bg-red-600 text-white" : "bg-[var(--camel)] text-white"}`,
          children: localize(product.badge, lang)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden h-full", ref: emblaRef, children: /* @__PURE__ */ jsx("div", { className: "flex h-full", children: product.images.map((src, i) => /* @__PURE__ */ jsx("div", { className: "flex-[0_0_100%] min-w-0 h-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt: `${localize(product.title, lang)} — изображение ${i + 1}`,
          loading: "lazy",
          width: 1024,
          height: 1280,
          className: "w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        }
      ) }, i)) }) }),
      snaps.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: snaps.map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => emblaApi?.scrollTo(i),
          "aria-label": `Слайд ${i + 1}`,
          className: `h-1.5 rounded-full transition-all ${selected === i ? "w-5 bg-white" : "w-1.5 bg-white/60"}`
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-5 pb-2 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[15px] text-[var(--charcoal)] leading-snug tracking-tight", children: localize(product.title, lang) }),
      /* @__PURE__ */ jsx("p", { className: "text-[13px] text-[var(--charcoal)]/60 leading-relaxed font-sans", children: localize(product.description, lang) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-3 pt-1", children: isSale ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-[var(--charcoal)] tracking-tight", children: fmtPrice(product.price) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-[var(--charcoal)]/40 line-through font-sans", children: fmtPrice(product.oldPrice) })
      ] }) : /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-[var(--charcoal)] tracking-tight", children: fmtPrice(product.price) }) })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: TG,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "mt-3 inline-flex items-center justify-center border border-[var(--charcoal)]/25 text-[var(--charcoal)] text-sm tracking-wide py-3 px-4 transition-colors hover:bg-[var(--charcoal)] hover:text-white hover:border-[var(--charcoal)] font-sans",
        children: localize(ui.askAvailability, lang)
      }
    )
  ] });
}
const sofas = [
  {
    title: { ru: 'Угловой диван "VALENSIA"', uz: 'Burchakli divan "VALENSIA"' },
    description: {
      ru: "Размер 340x250 см. Модульная система по турецкой технологии, ножки из натурального дерева.",
      uz: "O'lchami 340x250 sm. Turkiya texnologiyasi asosidagi modulli tizim, tabiiy yog'och oyoqchalar."
    },
    price: "11 000 000 UZS",
    images: ["/images/products/valensia/1.jpg", "/images/products/valensia/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "EVA"', uz: 'Burchakli divan "EVA"' },
    description: {
      ru: "Размер 270x230 см. В комплекте два пуфа с открыванием и бельевой отсек.",
      uz: "O'lchami 270x230 sm. To'plamda ochiladigan ikki puf va saqlash qutisi bor."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/eva/1.jpg", "/images/products/eva/2.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Тик-так"', uz: `Yig'iladigan divan "Tik-tak"` },
    description: {
      ru: 'Ширина 240 см. Механизм "еврокнижка", идеален для ежедневного сна.',
      uz: 'Kengligi 240 sm. Mexanizm "evroknijka", har kuni uxlash uchun juda qulay.'
    },
    price: "5 800 000 UZS",
    images: ["/images/products/tik-tak/1.jpg", "/images/products/tik-tak/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Bella"', uz: 'Burchakli divan "Bella"' },
    description: {
      ru: "Размер 270x155 см. Вместительный бельевой отсек в атаманке и подлокотниках.",
      uz: "O'lchami 270x155 sm. Atamanka va qo'ltiqtayoqlarda katta saqlash qutisi bor."
    },
    price: "7 000 000 UZS",
    images: ["/images/products/Bella/1.jpg", "/images/products/Bella/2.jpg", "/images/products/Bella/3.jpg"]
  },
  {
    title: { ru: 'Кухонный уголок "Ракушка"', uz: 'Oshxona burchagi "Rakushka"' },
    description: {
      ru: "Размер 215x165 см. Турецкий дизайн, ящики для хранения, моющаяся обивка.",
      uz: "O'lchami 215x165 sm. Turkiya dizayni, saqlash qutilari va yuviladigan qoplama."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/Ракушка/1.jpg", "/images/products/Ракушка/2.jpg"]
  },
  {
    title: { ru: 'Комплект "Йорк" (Тройка)', uz: `"York" to'plami (Troyka)` },
    description: {
      ru: "Диван 210 см и 2 кресла. Откидная спинка имеет три положения, полностью откидывается.",
      uz: "Divan 210 sm va 2 ta kreslo. Orqa suyanchiği uch holatda sozlanadi va to'liq yotadi."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/york/1.jpg", "/images/products/york/2.jpg"]
  },
  {
    title: { ru: 'Раздвижной диван "VIOLA"', uz: `Yig'iladigan divan "VIOLA"` },
    description: {
      ru: "Длина 225 см. Широкое спальное место и вместительный бельевой ящик.",
      uz: "Uzunligi 225 sm. Keng yotoq joyi va katta saqlash qutisi mavjud."
    },
    price: "6 200 000 UZS",
    images: ["/images/products/VIOLA/1.jpg", "/images/products/VIOLA/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Мартелл"', uz: 'Burchakli divan "Martell"' },
    description: {
      ru: 'Размер 280x155 см. Съёмные подушки на подлокотниках, механизм "дельфин".',
      uz: `O'lchami 280x155 sm. Qo'ltiq qismlarida olinadigan yostiqlar, mexanizm "delfin".`
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Мартелл/1.jpg", "/images/products/Мартелл/2.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Мини-Йорк"', uz: `Yig'iladigan divan "Mini-York"` },
    description: {
      ru: "Ширина 160 см. Двойной механизм (дельфин + откидная спинка), спальное место 130x190 см.",
      uz: "Kengligi 160 sm. Ikki mexanizm (delfin + bukiladigan orqa qism), yotoq joyi 130x190 sm."
    },
    price: "4 500 000 UZS",
    images: ["/images/products/Мини-Йорк/1.jpg", "/images/products/Мини-Йорк/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Нота PLUS"', uz: 'Burchakli divan "Nota PLUS"' },
    description: {
      ru: "Размер 260x160 см. Два бельевых ящика, просторное спальное место 220x155 см.",
      uz: "O'lchami 260x160 sm. Ikki saqlash qutisi, keng yotoq joyi 220x155 sm."
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Нота PLUS уголок/1.jpg", "/images/products/Нота PLUS уголок/2.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Нота Plus"', uz: `Yig'iladigan divan "Nota Plus"` },
    description: {
      ru: "Длина 235 см. Широкое спальное место (200x155 см) полностью заменяет двуспальную кровать.",
      uz: "Uzunligi 235 sm. Keng yotoq joyi (200x155 sm) ikki kishilik karavotni to'liq almashtiradi."
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Нота Plus/1.jpg", "/images/products/Нота Plus/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "ORIGINAL"', uz: 'Burchakli divan "ORIGINAL"' },
    description: {
      ru: "Размер 290x230 см. В комплекте два открывающихся пуфа и вместительный бельевой отсек.",
      uz: "O'lchami 290x230 sm. To'plamda ochiladigan ikki puf va katta saqlash qutisi mavjud."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/original/1.jpg", "/images/products/original/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "BAR-уголок"', uz: 'Burchakli divan "BAR-burchak"' },
    description: {
      ru: 'Размер 265x150 см. Механизм "дельфин", ортопедические пружины, сторона угла меняется.',
      uz: `O'lchami 265x150 sm. Mexanizm "delfin", ortopedik prujinalar, burchak tomoni almashtiriladi.`
    },
    price: "6 800 000 UZS",
    images: ["/images/products/BAR-уголок/1.jpg", "/images/products/BAR-уголок/2.jpg"]
  },
  {
    title: { ru: "Классическая тройка (Диван и 2 кресла)", uz: "Klassik troyka (Divan va 2 kreslo)" },
    description: {
      ru: 'Диван 220 см и два кресла по 90 см. Механизм "книжка", имеется бельевой ящик.',
      uz: 'Divan 220 sm va 90 sm dan 2 ta kreslo. Mexanizm "knijka", saqlash qutisi bor.'
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Classic Troyka/1.jpg", "/images/products/Classic Troyka/2.jpg"]
  },
  {
    title: { ru: 'Комплект "Ласетти" (Тройка)', uz: `"Lasetti" to'plami (Troyka)` },
    description: {
      ru: "Облегчённый дизайн. Откидная спинка имеет три положения и у дивана, и у кресел.",
      uz: "Yengil dizayn. Bukiladigan orqa qism divanda ham, kreslolarda ham uch holatda sozlanadi."
    },
    price: "5 800 000 UZS",
    images: ["/images/products/lacetti/1.jpg", "/images/products/lacetti/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Venera"', uz: 'Burchakli divan "Venera"' },
    description: {
      ru: "Размер 280x225 см. Два открывающихся пуфа (55x55 см), вместительный бельевой ящик.",
      uz: "O'lchami 280x225 sm. Ikki ochiladigan puf (55x55 sm), katta saqlash qutisi bor."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/venera/1.jpg", "/images/products/venera/2.jpg"]
  },
  {
    title: { ru: 'Угловой диван "VIOLA"', uz: 'Burchakli divan "VIOLA"' },
    description: {
      ru: "Размер 245x160 см. Два бельевых ящика, удобные большие мягкие подушки.",
      uz: "O'lchami 245x160 sm. Ikki saqlash qutisi, qulay katta yumshoq yostiqlar bilan."
    },
    price: "7 300 000 UZS",
    images: ["/images/products/VIOLA уголок/1.jpg", "/images/products/VIOLA уголок/2.jpg"]
  },
  {
    title: { ru: 'Диван с механизмом "Аккордеон"', uz: 'Divan "Akkordeon" mexanizmi bilan' },
    description: {
      ru: "Ширина 195 см. Спальное место 160х210 см. Ортопедические подушки в комплекте.",
      uz: "Kengligi 195 sm. Yotoq joyi 160x210 sm. To'plamda ortopedik yostiqlar bor."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/akkordeon/1.jpg", "/images/products/akkordeon/2.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "SPARK"', uz: `Yig'iladigan divan "SPARK"` },
    description: {
      ru: "Ширина 190 см. Двойной механизм, глубокое сидячее место, спинка полностью откидывается.",
      uz: "Kengligi 190 sm. Ikki mexanizm, chuqur o'rindiq va to'liq yotadigan orqa qism."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/spark/1.jpg", "/images/products/spark/2.jpg"]
  }
];
const promos = [
  {
    title: { ru: 'Угловой диван "HAPPY"', uz: 'Burchakli divan "HAPPY"' },
    description: {
      ru: 'Размер 260x150 см. Механизм "дельфин", ортопедические пружины.',
      uz: `O'lchami 260x150 sm. Mexanizm "delfin", ortopedik prujinalar.`
    },
    price: "4 760 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/happy/1.jpg", "/images/products/happy/2.jpg"],
    badge: ui.discountBadge
  },
  {
    title: { ru: 'Угловой диван "ESTEL"', uz: 'Burchakli divan "ESTEL"' },
    description: {
      ru: "Размер 260x160 см. Металлический каркас, сторона угла меняется.",
      uz: "O'lchami 260x160 sm. Metall karkas, burchak tomoni almashtiriladi."
    },
    price: "5 840 000 UZS",
    oldPrice: "7 300 000 UZS",
    images: ["/images/products/estel/1.jpg", "/images/products/estel/2.jpg", "/images/products/estel/3.jpg"],
    badge: ui.discountBadge
  },
  {
    title: { ru: 'Угловой диван "LAURA"', uz: 'Burchakli divan "LAURA"' },
    description: {
      ru: "Размер 265x150 см. ППУ 48 плотности, вместительный отсек.",
      uz: "O'lchami 265x150 sm. PPU 48 zichlik, katta saqlash qutisi."
    },
    price: "5 440 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/laura/1.jpg", "/images/products/laura/2.jpg"],
    badge: ui.discountBadge
  },
  {
    title: { ru: 'Раскладной диван "Йорк PLUS"', uz: `Yig'iladigan divan "York PLUS"` },
    description: {
      ru: 'Ширина 193 см. ППУ с эффектом памяти "memory foam", двойной механизм.',
      uz: 'Kengligi 193 sm. PPU "memory foam" effekti bilan, ikki mexanizm.'
    },
    price: "4 400 000 UZS",
    oldPrice: "5 500 000 UZS",
    images: ["/images/products/york plus/1.jpg", "/images/products/york plus/2.jpg"],
    badge: ui.discountBadge
  }
];
const chairs = [
  {
    title: { ru: "Кресло-качалка (До 150 кг)", uz: "Kreslo-kachalka (150 kg gacha)" },
    description: {
      ru: "Материал: прессованная фанера. Эффект амортизации, выдерживает вес до 150 кг. Гарантия качества.",
      uz: "Material: presslangan fanera. Amortizatsiya effekti bor, 150 kg gacha vazn ko'taradi. Sifat kafolati."
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 3/1.jpg", "/images/products/rocking - 3/2.jpg"]
  },
  {
    title: { ru: "Классическое кресло-качалка", uz: "Klassik kreslo-kachalka" },
    description: {
      ru: "Символ домашнего уюта. Плавное раскачивание нормализует давление. Идеально для релакса и убаюкивания малыша.",
      uz: "Uy shinamligining timsoli. Mayin tebranish bosimni me'yorlashtiradi. Dam olish va bolani uxlatish uchun ideal."
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 2/1.jpg", "/images/products/rocking - 2/2.jpg"]
  },
  {
    title: { ru: "Кресло для отдыха и релакса", uz: "Dam olish uchun kreslo" },
    description: {
      ru: "Каркас из прессованной фанеры, изготовлен по специальной технологии. Создаёт приятное ощущение амортизации в стороны.",
      uz: "Karkasi presslangan faneradan, maxsus texnologiyada tayyorlangan. Yon tomonlarga yoqimli amortizatsiya hissini beradi."
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 1/1.jpg", "/images/products/rocking - 1/2.jpg"]
  }
];
function SectionTitle({ children, eyebrow }) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 lg:mb-16", children: [
    eyebrow && /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-4", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]", children })
  ] });
}
function Hero() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsxs("section", { className: "relative h-screen min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-[url('/images/sections/hero-mobile-2.jpg')] md:bg-[url('/images/sections/hero.jpg')] bg-cover bg-center bg-no-repeat",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hidden lg:block bg-gradient-to-r from-black/70 via-black/40 to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:from-black/60 lg:via-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto max-w-[1400px] h-full px-5 lg:px-10 flex items-end lg:items-center pb-20 lg:pb-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl text-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 lg:mb-8", children: lang === "ru" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Подарите уют",
        /* @__PURE__ */ jsx("br", {}),
        "вашему дому — ",
        /* @__PURE__ */ jsx("span", { className: "italic text-[var(--camel)]", children: "качество" }),
        " и комфорт"
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        "Uyingizga shinamlik",
        /* @__PURE__ */ jsx("br", {}),
        "baxsh eting — ",
        /* @__PURE__ */ jsx("span", { className: "italic text-[var(--camel)]", children: "sifat" }),
        " va qulaylik"
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-white/85 max-w-xl mb-8 lg:mb-10 leading-relaxed", children: localize(ui.heroDescription, lang) }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#catalog",
          className: "inline-flex items-center gap-3 bg-[var(--camel)] hover:bg-[var(--camel-dark)] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors",
          children: [
            localize(ui.showCatalog, lang),
            /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) })
          ]
        }
      )
    ] }) })
  ] });
}
function Catalog() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsx("section", { id: "catalog", className: "py-20 lg:py-32 bg-[var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: localize(ui.collectionEyebrow, lang), children: localize(ui.sectionHits, lang) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20", children: sofas.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.title)) })
  ] }) });
}
function Promotions() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsx("section", { id: "promo", className: "py-20 lg:py-32 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: localize(ui.specialPriceEyebrow, lang), children: localize(ui.sectionPromo, lang) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20", children: promos.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.title)) })
  ] }) });
}
function Chairs() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsx("section", { id: "chairs", className: "py-20 lg:py-32 bg-[var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: localize(ui.cozyEyebrow, lang), children: localize(ui.sectionChairs, lang) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20 max-w-5xl mx-auto", children: chairs.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.title)) })
  ] }) });
}
function Installments() {
  const { lang } = useLocale();
  const banks = [
    { name: "Uzum Bank", text: localize(ui.installment12, lang), note: "0%" },
    { name: "Anor Bank", text: localize(ui.installment6, lang), note: "" },
    { name: "Open Bank", text: localize(ui.installment12plus, lang), note: "" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "installments", className: "bg-[var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 lg:px-16 xl:px-24 py-20 lg:py-28 flex flex-col justify-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-5", children: localize(ui.paymentsEyebrow, lang) }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-10 leading-tight", children: lang === "ru" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Мебель в ",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] italic", children: "рассрочку" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        "Muddatli to'lovga ",
        /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] italic", children: "mebel" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5 mb-8", children: banks.map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-[var(--charcoal)]/15 pb-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif text-lg text-[var(--charcoal)]", children: b.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--charcoal)]/70", children: b.text })
        ] }),
        b.note && /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] font-medium", children: b.note })
      ] }, b.name)) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--charcoal)]/60 leading-relaxed max-w-md", children: localize(ui.installmentNote, lang) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative min-h-[400px] lg:min-h-full", children: /* @__PURE__ */ jsx("img", { src: "/images/sections/installment.jpg", alt: "Интерьер с мебелью SOFIA-MEBEL", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) })
  ] }) });
}
function CustomProduction() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsx("section", { id: "custom", className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsx("div", { className: "relative min-h-[400px] lg:min-h-[640px] order-2 lg:order-1", children: /* @__PURE__ */ jsx("img", { src: "/images/sections/custom.jpg", alt: "Производство мебели на заказ", loading: "lazy", className: "absolute inset-0 w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-5 lg:px-16 xl:px-24 py-20 lg:py-28 flex flex-col justify-center order-1 lg:order-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-5", children: localize(ui.customEyebrow, lang) }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-7 leading-tight", children: lang === "ru" ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "Мебель по вашим ",
        /* @__PURE__ */ jsx("span", { className: "italic text-[var(--camel)]", children: "размерам" })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        "O'lchamingiz asosida ",
        /* @__PURE__ */ jsx("span", { className: "italic text-[var(--camel)]", children: "mebel" })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-[var(--charcoal)]/75 leading-relaxed text-lg mb-10 max-w-lg", children: localize(ui.customDescription, lang) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 max-w-lg", children: [
        { n: "15", l: localize(ui.productionDays, lang) },
        { n: "350+", l: localize(ui.fabrics, lang) },
        { n: "∞", l: localize(ui.customSizes, lang) }
      ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif text-3xl text-[var(--camel)] mb-1", children: s.n }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--charcoal)]/70 whitespace-pre-line leading-snug", children: s.l })
      ] }, s.n)) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-10 inline-flex items-center gap-3 bg-[var(--charcoal)] hover:bg-[var(--camel)] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors w-fit",
          children: localize(ui.discussOrder, lang)
        }
      )
    ] })
  ] }) });
}
const FAQ_ITEMS = ui.faq;
function FAQ() {
  const { lang } = useLocale();
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-32 bg-[var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(SectionTitle, { eyebrow: localize(ui.helpEyebrow, lang), children: localize(ui.faqTitle, lang) }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-[var(--charcoal)]/15", children: FAQ_ITEMS.map((item, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxs("div", { className: "border-b border-[var(--charcoal)]/15", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            className: "w-full flex items-center justify-between gap-6 py-6 text-left group",
            "aria-expanded": isOpen,
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-sans font-semibold text-base lg:text-lg text-[var(--charcoal)] group-hover:text-[var(--camel)] transition-colors", children: localize(item.q, lang) }),
              /* @__PURE__ */ jsx("span", { className: `text-[var(--camel)] text-2xl transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`, children: "+" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: `grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "font-sans text-[var(--charcoal)]/80 leading-relaxed pr-4 lg:pr-12 space-y-3 text-[15px]", children: /* @__PURE__ */ jsx("p", { children: localize(item.a, lang) }) }) }) })
      ] }, i);
    }) })
  ] }) });
}
function Footer() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsx("footer", { id: "contacts", className: "bg-[var(--charcoal)] text-[var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-serif text-2xl mb-5", children: [
          "SOFIA",
          /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)]", children: "·" }),
          "MEBEL"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[var(--ivory)]/70 leading-relaxed text-sm max-w-xs", children: localize(ui.brandDescription, lang) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2", children: localize(ui.addressLabel, lang) }),
          /* @__PURE__ */ jsxs("p", { className: "text-[var(--ivory)]/85 leading-relaxed", children: [
            localize(ui.addressLine, lang),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-[var(--ivory)]/60", children: localize(ui.landmark, lang) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2", children: localize(ui.phonesLabel, lang) }),
          /* @__PURE__ */ jsx("a", { href: "tel:+998970003334", className: "block text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors", children: "+998 97 000 33 34" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+998977782126", className: "block text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors", children: "+998 97 778 21 26" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2", children: localize(ui.scheduleLabel, lang) }),
          /* @__PURE__ */ jsx("p", { className: "text-[var(--ivory)]/85", children: localize(ui.everyday, lang) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-4", children: localize(ui.socialLabel, lang) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-sm", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://t.me/sofiamebel", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors", children: [
            /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z" }) }),
            localize(ui.telegramChannel, lang)
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors", children: [
            /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z" }) }),
            localize(ui.managerTelegram, lang)
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-8 border-t border-[var(--ivory)]/15 flex flex-col md:flex-row gap-3 justify-between text-xs text-[var(--ivory)]/55", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© 2026 SOFIA-MEBEL. ",
        localize(ui.rights, lang)
      ] }),
      /* @__PURE__ */ jsx("p", { children: localize(ui.cityCountry, lang) })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsx(LocaleProvider, { children: /* @__PURE__ */ jsxs("div", { className: "bg-[var(--ivory)] text-[var(--charcoal)] min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Catalog, {}),
      /* @__PURE__ */ jsx(Promotions, {}),
      /* @__PURE__ */ jsx(Chairs, {}),
      /* @__PURE__ */ jsx(Installments, {}),
      /* @__PURE__ */ jsx(CustomProduction, {}),
      /* @__PURE__ */ jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
export {
  Index as component
};
