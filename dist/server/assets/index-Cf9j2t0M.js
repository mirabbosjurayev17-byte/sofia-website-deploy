import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, createContext, useContext, useEffect, useRef } from "react";
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
      a: {
        ru: "Да, у нас есть удобные варианты рассрочки, чтобы вам было комфортно приобрести мебель без лишней нагрузки на бюджет.\n\nВы можете воспользоваться:\n• Uzum Bank — рассрочка до 12 месяцев без лишних сложностей.\n• Anor карта — до 6 месяцев (с увеличением стоимости на 15%).\n• Open карта — до 12 месяцев (увеличение стоимости на 25%).\n\nОбратите внимание:\n• Рассрочка не действует на товары со скидкой.\n• Доставка оплачивается отдельно и не включается в сумму рассрочки.\n\nЕсли нужно — мы с радостью подскажем самый выгодный вариант именно для вас 😊",
        uz: "Ha, sizga qulay bo'lishi uchun bir nechta muddatli to'lov variantlari mavjud — mebelni byudjetga ortiqcha yuk tushirmasdan xarid qilishingiz mumkin.\n\nQuyidagi variantlardan foydalanishingiz mumkin:\n• Uzum Bank — 12 oygacha muddatli to'lov, hech qanday ortiqcha shartlarsiz.\n• Anor karta — 6 oygacha (mahsulot narxi 15% ga oshadi).\n• Open karta — 12 oygacha (mahsulot narxi 25% ga oshadi).\n\nDiqqat:\n• Muddatli to'lov chegirmadagi tovarlarga amal qilmaydi.\n• Yetkazib berish xizmati alohida to'lanadi va muddatli to'lov summasiga kirmaydi.\n\nKerak bo'lsa — siz uchun eng qulay variantni biz bilan birga tanlaymiz 😊"
      }
    },
    {
      q: { ru: "Вы делаете доставку в другие города Узбекистана?", uz: "O'zbekistonning boshqa shaharlariga yetkazib berasizmi?" },
      a: {
        ru: "Да, мы доставляем мебель по всему Узбекистану.\n\nВ большинстве случаев доставка бесплатная, однако:\n• при покупке по акции или в рассрочку условия могут отличаться.\n\nСроки и детали доставки зависят от вашего города — просто позвоните нам, и мы всё подробно расскажем:\n📞 +998 97 000 33 34",
        uz: "Ha, biz mebelni butun O'zbekiston bo'ylab yetkazib beramiz.\n\nKo'p hollarda yetkazib berish bepul, lekin:\n• aksiya yoki muddatli to'lov bilan xarid qilinganda shartlar farqlanishi mumkin.\n\nMuddat va batafsil ma'lumot shaharingizga bog'liq — bizga qo'ng'iroq qiling, hammasini batafsil aytib beramiz:\n📞 +998 97 000 33 34"
      }
    },
    {
      q: { ru: "У вас есть шоу-рум?", uz: "Sizda shou-rum bormi?" },
      a: {
        ru: "Да, конечно! Мы будем рады видеть вас в нашем шоу-руме в Ташкенте:\n\n📍 ул. Мукими 98А\n🕐 Работаем ежедневно с 10:00 до 19:00\n\nВы сможете вживую оценить качество, комфорт и материалы нашей мебели.",
        uz: "Ha, albatta! Toshkentdagi shou-rumimizda sizni kutib qolamiz:\n\n📍 Muqimiy ko'chasi 98A\n🕐 Har kuni 10:00 dan 19:00 gacha ishlaymiz\n\nMebellarimizning sifati, qulayligi va materiallarini o'z ko'zingiz bilan ko'rishingiz mumkin."
      }
    },
    {
      q: { ru: "У вас мебель только готовая или под заказ?", uz: "Mebellaringiz faqat tayyormi yoki buyurtma asosida ham olasizmi?" },
      a: {
        ru: "Мы предлагаем оба варианта:\n• Готовые модели — можно выбрать и забрать сразу.\n• Мебель под заказ — создадим именно то, что нужно вам.\n\nВы можете выбрать:\n✔ размер\n✔ ткань\n✔ цвет\n✔ конфигурацию\n\nСрок изготовления — в среднем 15 дней.\n\nМы поможем воплотить вашу идею в идеальный диван ✨",
        uz: "Biz har ikki variantni ham taklif qilamiz:\n• Tayyor modellar — tanlab darhol olib ketishingiz mumkin.\n• Buyurtma asosida — siz uchun aynan kerakli mebelni yaratamiz.\n\nO'zingiz tanlaysiz:\n✔ o'lcham\n✔ mato\n✔ rang\n✔ konfiguratsiya\n\nTayyorlash muddati — o'rtacha 15 kun.\n\nFikringizni mukammal divanga aylantirishga yordam beramiz ✨"
      }
    },
    {
      q: { ru: "У вас мебель местного производства?", uz: "Mebellar mahalliy ishlab chiqarishmi?" },
      a: {
        ru: "Да, наша мебель производится в Узбекистане опытными мастерами.\n\nМы используем:\n• качественные импортные материалы\n• современное оборудование\n\nКаждое изделие — это сочетание надёжности, эстетики и комфорта, сделанное с вниманием к деталям.",
        uz: "Ha, mebellarimiz O'zbekistonda tajribali ustalarimiz tomonidan ishlab chiqariladi.\n\nBiz quyidagilardan foydalanamiz:\n• yuqori sifatli import materiallar\n• zamonaviy uskunalar\n\nHar bir mahsulot — ishonchlilik, nafosat va qulaylikning uyg'unligi bo'lib, har bir tafsilotga e'tibor bilan tayyorlanadi."
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
  addressLine: { ru: "Ташкент, ул. Мукими 98А", uz: "Toshkent, Muqimiy ko'chasi 98A" },
  // Top promo bar
  topBarPromo: {
    ru: "Скидки до 30% на популярные модели диванов — ограниченное предложение",
    uz: "Ommabop divan modellariga 30% gacha chegirma — cheklangan taklif"
  },
  heroCallNow: { ru: "Позвонить сейчас", uz: "Hozir qo'ng'iroq qiling" },
  // Map section (showroom CTA)
  mapEyebrow: { ru: "Шоу-рум", uz: "Shou-rum" },
  mapTitle: { ru: "Приезжайте к нам в шоу-рум", uz: "Bizning shou-rumga tashrif buyuring" },
  mapDescription: {
    ru: "Оцените мебель вживую, почувствуйте комфорт и выберите идеальный вариант вместе с нашим менеджером.",
    uz: "Mebelni o'z ko'zingiz bilan ko'ring, qulayligini his qiling va menejerimiz bilan birga ideal variantni tanlang."
  },
  mapAddressLabel: { ru: "Адрес", uz: "Manzil" },
  mapPhoneLabel: { ru: "Телефон", uz: "Telefon" },
  mapHoursLabel: { ru: "График", uz: "Ish vaqti" },
  mapHoursValue: { ru: "Ежедневно с 10:00 до 19:00", uz: "Har kuni 10:00 dan 19:00 gacha" },
  mapOpenInYandex: { ru: "Открыть в Яндекс Картах", uz: "Yandex Xaritada ochish" },
  // Floating Telegram CTA
  floatingTelegramAria: { ru: "Написать в Telegram", uz: "Telegram orqali yozish" },
  floatingTelegramLabel: { ru: "Написать в Telegram", uz: "Telegramda yozish" }
};
function Header() {
  const { lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 bg-[var(--ivory)] border-b border-[var(--charcoal)]/10", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-[var(--charcoal)] text-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-4 lg:px-10 h-8 lg:h-9 flex items-center justify-center", children: /* @__PURE__ */ jsx("p", { className: "font-sans text-[11px] lg:text-[12px] tracking-[0.05em] text-center text-white/95 truncate", children: localize(ui.topBarPromo, lang) }) }) }),
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
const SWIPE_THRESHOLD = 50;
function ProductCard({ product }) {
  const { lang } = useLocale();
  const [current, setCurrent] = useState(0);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const total = product.images.length;
  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const onTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e) => {
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
  const isSale = !!product.oldPrice;
  const fmtPrice = (value) => lang === "uz" ? value.replace("UZS", "so'm") : value;
  return /* @__PURE__ */ jsxs("div", { className: "group flex flex-col", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative overflow-hidden bg-muted aspect-[4/5] touch-pan-y select-none",
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        children: [
          product.badge && /* @__PURE__ */ jsx(
            "span",
            {
              className: `absolute top-3 left-3 z-20 text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 ${isSale ? "bg-red-600 text-white" : "bg-[var(--camel)] text-white"}`,
              children: localize(product.badge, lang)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: product.images.map((src, i) => /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: `${localize(product.title, lang)} — ${i + 1}`,
              loading: "lazy",
              width: 1024,
              height: 1280,
              className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`
            },
            i
          )) }),
          total > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20", children: product.images.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setCurrent(i),
              "aria-label": `${localize(product.title, lang)} — ${i + 1}`,
              className: `h-1.5 rounded-full transition-all cursor-pointer ${current === i ? "w-5 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"}`
            },
            i
          )) })
        ]
      }
    ),
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
      ru: "Сочетание уюта и функциональности для современной гостиной. Просторная модульная форма позволяет комфортно разместиться всей семье, а турецкая технология сборки и ножки из натурального дерева обеспечивают надёжность на годы. Идеален как для ежедневного отдыха, так и для приёма гостей.",
      uz: "Zamonaviy mehmonxona uchun shinamlik va funksionallik uyg'unligi. Keng modulli forma butun oilani qulay joylashtirishga imkon beradi, turkiya texnologiyasi va tabiiy yog'och oyoqchalar esa uzoq yillik bardoshlilikni ta'minlaydi. Har kungi dam olish va mehmon kutish uchun ideal."
    },
    price: "11 000 000 UZS",
    images: ["/images/products/valensia/1.jpg", "/images/products/valensia/2.jpg", "/images/products/valensia/3.jpg"]
  },
  {
    title: { ru: 'Угловой диван "EVA"', uz: 'Burchakli divan "EVA"' },
    description: {
      ru: "Идеальный выбор для тех, кто ценит комфорт и практичность в каждой детали. Свободные линии и размер 270×230 см создают атмосферу уюта для всей семьи, а два открывающихся пуфа и вместительный бельевой отсек помогут сохранить порядок и всё необходимое под рукой.",
      uz: "Har bir tafsilotda qulaylik va amaliylikni qadrlaydiganlar uchun ideal tanlov. Keng forma va 270×230 sm o'lcham butun oila uchun shinam muhit yaratadi, ikki ochiladigan puf va sig'imli saqlash qutisi esa tartib va kerakli narsalarni qo'l ostida saqlashga yordam beradi."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/eva/1.jpg", "/images/products/eva/2.jpg", "/images/products/eva/3.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Тик-так"', uz: `Yig'iladigan divan "Tik-tak"` },
    description: {
      ru: 'Надёжный спутник для ежедневного использования и спокойного сна. Механизм "еврокнижка" работает легко и бесшумно, а ширина 240 см и ровная спальная поверхность обеспечивают настоящий отдых. Практичное решение для всей семьи в любой комнате.',
      uz: `Har kungi foydalanish va tinch uyqu uchun ishonchli hamroh. "Yevroknijka" mexanizmi yengil va shovqinsiz ishlaydi, kengligi 240 sm va tekis yotoq yuzasi esa haqiqiy dam olishni ta'minlaydi. Har qanday xona uchun butun oilaga mos amaliy yechim.`
    },
    price: "5 800 000 UZS",
    images: ["/images/products/tik-tak/1.jpg", "/images/products/tik-tak/2.jpg", "/images/products/tik-tak/3.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Bella"', uz: 'Burchakli divan "Bella"' },
    description: {
      ru: "Элегантное решение, которое объединяет стиль и практичность в каждой линии. Размер 270×155 см идеально подходит для уютных вечеров всей семьёй, а вместительные бельевые отсеки в атаманке и подлокотниках делают его исключительно удобным для ежедневного использования.",
      uz: "Har bir chiziqda uslub va amaliylikni birlashtirgan nafis yechim. 270×155 sm o'lcham butun oila bilan shinam oqshomlar uchun ideal mos keladi, atamanka va qo'ltiq tayoqlardagi keng saqlash qutilari esa har kungi foydalanishni g'oyat qulay qiladi."
    },
    price: "7 000 000 UZS",
    images: ["/images/products/Bella/1.jpg", "/images/products/Bella/2.jpg", "/images/products/Bella/3.jpg"]
  },
  {
    title: { ru: 'Кухонный уголок "Ракушка"', uz: 'Oshxona burchagi "Rakushka"' },
    description: {
      ru: "Идеальное решение для уютной кухни, где важны комфорт и практичность. Компактная форма позволяет рационально использовать пространство, а мягкая обивка делает каждое чаепитие особенно приятным. Продуманная конструкция с ящиками для хранения помогает поддерживать порядок, а стильный дизайн гармонично вписывается в любой интерьер.",
      uz: "Qulaylik va amaliylik muhim bo'lgan shinam oshxona uchun ideal yechim. Ixcham forma joydan oqilona foydalanishga imkon beradi, yumshoq qoplama esa har bir choy ichish damini alohida yoqimli qiladi. Saqlash qutilari bilan o'ylangan tuzilma tartibni saqlashga yordam beradi, nafis dizayn esa istalgan interyerga uyg'un mos tushadi."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/Ракушка/1.jpg", "/images/products/Ракушка/2.jpg", "/images/products/Ракушка/3.jpg"]
  },
  {
    title: { ru: 'Комплект "Йорк" (Тройка)', uz: `"York" to'plami (Troyka)` },
    description: {
      ru: "Многофункциональное решение для всей семьи, где сочетаются комфорт и универсальность. Просторный диван и кресла создают полноценную зону отдыха, а возможность трансформации делает его удобным для ежедневного использования. Мягкие формы, продуманная эргономика и классический дизайн создают атмосферу уюта и идеально подходят как для отдыха, так и для приёма гостей.",
      uz: "Qulaylik va ko'p qirralilik uyg'unlashgan butun oila uchun ko'p funksiyali yechim. Keng divan va kreslolar to'laqonli dam olish maydonini yaratadi, transformatsiya imkoniyati esa uni har kungi foydalanish uchun qulay qiladi. Yumshoq formalar, o'ylangan ergonomika va klassik dizayn shinam muhit yaratadi va ham dam olish, ham mehmon kutish uchun ideal mos keladi."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/york/1.jpg", "/images/products/york/2.jpg", "/images/products/york/3.jpg"]
  },
  {
    title: { ru: 'Раздвижной диван "VIOLA"', uz: `Yig'iladigan divan "VIOLA"` },
    description: {
      ru: "Стильное и практичное решение для современного дома. Благодаря широкому спальному месту он легко заменяет кровать и обеспечивает комфортный сон каждый день. Элегантный дизайн, вместительный бельевой ящик и удобный механизм трансформации делают его идеальным выбором для тех, кто ценит функциональность и уют.",
      uz: "Zamonaviy uy uchun nafis va amaliy yechim. Keng yotoq joyi tufayli u karavotni bemalol almashtiradi va har kuni qulay uyquni ta'minlaydi. Nafis dizayn, sig'imli saqlash qutisi va qulay transformatsiya mexanizmi uni funksionallik va shinamlikni qadrlaydiganlar uchun ideal tanlovga aylantiradi."
    },
    price: "6 200 000 UZS",
    images: ["/images/products/VIOLA/1.jpg", "/images/products/VIOLA/2.jpg", "/images/products/VIOLA/3.jpg"]
  },
  {
    title: { ru: 'Угловой раскладной диван "Мартель"', uz: `Burchakli yig'iladigan divan "Martel"` },
    description: {
      ru: "Сочетание современного дизайна и максимального комфорта для всей семьи. Просторная конструкция позволяет удобно разместиться, а раскладной механизм превращает его в полноценное спальное место. Мягкие подушки, практичные материалы и продуманная форма делают его отличным выбором для ежедневного отдыха и уютных вечеров.",
      uz: "Zamonaviy dizayn va butun oila uchun maksimal qulaylik uyg'unligi. Keng tuzilma qulay joylashishga imkon beradi, yig'iladigan mexanizm esa uni to'laqonli yotoq joyiga aylantiradi. Yumshoq yostiqlar, amaliy materiallar va o'ylangan forma uni har kungi dam olish va shinam oqshomlar uchun ajoyib tanlovga aylantiradi."
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Мартелл/1.jpg", "/images/products/Мартелл/2.jpg", "/images/products/Мартелл/3.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Мини-Йорк"', uz: `Yig'iladigan divan "Mini-York"` },
    description: {
      ru: "Идеальное решение для небольших пространств, где важен каждый сантиметр. Несмотря на свои размеры, он легко трансформируется в полноценное спальное место и дарит комфортный отдых. Стильный внешний вид и продуманная конструкция делают его отличным выбором для современных квартир, где ценится практичность и уют.",
      uz: "Har bir santimetr muhim bo'lgan kichik xonalar uchun ideal yechim. O'lchamiga qaramay, u to'laqonli yotoq joyiga oson aylanadi va qulay dam olish baxsh etadi. Nafis tashqi ko'rinish va o'ylangan tuzilma uni amaliylik va shinamlik qadrlanadigan zamonaviy kvartiralar uchun ajoyib tanlovga aylantiradi."
    },
    price: "4 500 000 UZS",
    images: ["/images/products/Мини-Йорк/1.jpg", "/images/products/Мини-Йорк/2.jpg", "/images/products/Мини-Йорк/3.jpg"]
  },
  {
    title: { ru: 'Угловой раскладной диван "Нота PLUS"', uz: `Burchakli yig'iladigan divan "Nota PLUS"` },
    description: {
      ru: "Создан для тех, кто ценит простор и комфорт в повседневной жизни. Большое спальное место позволяет использовать его как полноценную кровать, а вместительные ящики помогают удобно хранить вещи. Современный дизайн и мягкие формы создают уютную атмосферу и делают его центром притяжения в любой гостиной.",
      uz: "Kundalik hayotda kenglik va qulaylikni qadrlaydiganlar uchun yaratilgan. Katta yotoq joyi uni to'laqonli karavot sifatida ishlatishga imkon beradi, sig'imli qutilar esa narsalarni qulay saqlashga yordam beradi. Zamonaviy dizayn va yumshoq formalar shinam muhit yaratadi va uni har qanday mehmonxonaning tortish markaziga aylantiradi."
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Нота PLUS уголок/1.jpg", "/images/products/Нота PLUS уголок/2.jpg", "/images/products/Нота PLUS уголок/3.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Нота Plus"', uz: `Yig'iladigan divan "Nota Plus"` },
    description: {
      ru: "Гармоничное сочетание удобства и функциональности. Просторное спальное место обеспечивает комфортный сон, а надёжный механизм делает трансформацию лёгкой и быстрой. Минималистичный дизайн позволяет легко вписать его в любой интерьер, создавая ощущение уюта и спокойствия.",
      uz: "Qulaylik va funksionallikning uyg'un birikmasi. Keng yotoq joyi qulay uyqu bilan ta'minlaydi, ishonchli mexanizm esa transformatsiyani yengil va tez qiladi. Minimalistik dizayn uni har qanday interyerga oson moslashtiradi va shinamlik hamda osoyishtalik tuyg'usini yaratadi."
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Нота Plus/1.jpg", "/images/products/Нота Plus/2.jpg", "/images/products/Нота Plus/3.jpg"]
  },
  {
    title: { ru: 'Угловой диван "ORIGINAL"', uz: 'Burchakli divan "ORIGINAL"' },
    description: {
      ru: "Универсальное решение для большой семьи и уютных вечеров. Просторная конструкция позволяет удобно разместиться, а дополнительные пуфы добавляют гибкости в использовании. Практичные материалы и вместительные ящики делают его не только красивым, но и максимально удобным в повседневной жизни.",
      uz: "Katta oila va shinam oqshomlar uchun universal yechim. Keng tuzilma qulay joylashishga imkon beradi, qo'shimcha puflar esa foydalanishda moslashuvchanlikni oshiradi. Amaliy materiallar va sig'imli qutilar uni nafaqat chiroyli, balki kundalik hayotda eng qulay mebelga aylantiradi."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/original/1.jpg", "/images/products/original/2.jpg", "/images/products/original/3.jpg"]
  },
  {
    title: { ru: 'Угловой раскладной диван "BAR-уголок"', uz: `Burchakli yig'iladigan divan "BAR-burchak"` },
    description: {
      ru: "Стильное решение с акцентом на комфорт и функциональность. Просторное угловое расположение позволяет создать удобную зону отдыха, а раскладной механизм превращает его в полноценное спальное место. Мягкие сиденья и продуманная конструкция делают его идеальным выбором для всей семьи и ежедневного использования.",
      uz: "Qulaylik va funksionallikka urg'u bergan nafis yechim. Keng burchakli joylashuv qulay dam olish maydonini yaratishga imkon beradi, yig'iladigan mexanizm esa uni to'laqonli yotoq joyiga aylantiradi. Yumshoq o'rindiqlar va o'ylangan tuzilma uni butun oila va har kungi foydalanish uchun ideal tanlovga aylantiradi."
    },
    price: "6 800 000 UZS",
    images: ["/images/products/BAR-уголок/1.jpg", "/images/products/BAR-уголок/2.jpg", "/images/products/BAR-уголок/3.jpg"]
  },
  {
    title: { ru: "Классическая раскладная тройка (Диван и 2 кресла)", uz: "Klassik yig'iladigan troyka (Divan va 2 kreslo)" },
    description: {
      ru: "Проверенное временем решение для комфортного отдыха всей семьи. Просторный диван и удобные кресла создают гармоничную зону уюта и идеально подходят для приёма гостей. Функция раскладывания делает диван практичным для ежедневного использования, сочетая стиль и удобство в одном комплекте.",
      uz: "Butun oila uchun qulay dam olishning vaqt sinovidan o'tgan yechimi. Keng divan va qulay kreslolar uyg'un shinamlik maydonini yaratadi va mehmon kutish uchun ideal mos keladi. Yig'ilish funksiyasi divanni har kungi foydalanish uchun amaliy qiladi va bitta to'plamda uslub va qulaylikni birlashtiradi."
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Classic Troyka/1.jpg", "/images/products/Classic Troyka/2.jpg", "/images/products/Classic Troyka/3.jpg"]
  },
  {
    title: { ru: 'Комплект "Ласетти" (Тройка)', uz: `"Lasetti" to'plami (Troyka)` },
    description: {
      ru: "Лёгкость, стиль и комфорт в одном решении. Универсальная конструкция позволяет легко адаптировать мебель под разные сценарии отдыха и использовать её в повседневной жизни. Мягкие формы и современный дизайн создают уютную атмосферу, делая пространство более тёплым и живым.",
      uz: "Yengillik, uslub va qulaylik bitta yechimda. Universal tuzilma mebelni har xil dam olish va kundalik hayot stsenariylariga oson moslashtirishga imkon beradi. Yumshoq formalar va zamonaviy dizayn shinam muhit yaratadi va xonani yanada iliq va jonli qiladi."
    },
    price: "5 800 000 UZS",
    images: ["/images/products/lacetti/1.jpg", "/images/products/lacetti/2.jpg", "/images/products/lacetti/3.jpg"]
  },
  {
    title: { ru: 'Угловой диван "Venera"', uz: 'Burchakli divan "Venera"' },
    description: {
      ru: "Сочетание элегантности и практичности для современной гостиной. Просторная форма позволяет удобно разместиться всей семье, а вместительные ящики добавляют функциональности. Мягкие подушки и продуманный дизайн делают его идеальным для ежедневного отдыха и расслабления.",
      uz: "Zamonaviy mehmonxona uchun nafislik va amaliylik uyg'unligi. Keng forma butun oilani qulay joylashtirishga imkon beradi, sig'imli qutilar esa funksionallikni oshiradi. Yumshoq yostiqlar va o'ylangan dizayn uni har kungi dam olish va hordiq chiqarish uchun ideal qiladi."
    },
    price: "8 500 000 UZS",
    images: ["/images/products/venera/1.jpg", "/images/products/venera/2.jpg", "/images/products/venera/3.jpg"]
  },
  {
    title: { ru: 'Угловой диван "VIOLA"', uz: 'Burchakli divan "VIOLA"' },
    description: {
      ru: "Баланс между комфортом и современным стилем. Просторная конструкция и мягкие подушки создают идеальные условия для отдыха после долгого дня. Практичные решения и качественные материалы обеспечивают долговечность и удобство в ежедневном использовании всей семьей.",
      uz: "Qulaylik va zamonaviy uslub o'rtasidagi muvozanat. Keng tuzilma va yumshoq yostiqlar uzoq kundan keyin dam olish uchun ideal sharoit yaratadi. Amaliy yechimlar va sifatli materiallar uni butun oila tomonidan har kungi foydalanishda bardoshli va qulay qiladi."
    },
    price: "7 300 000 UZS",
    images: ["/images/products/VIOLA уголок/1.jpg", "/images/products/VIOLA уголок/2.jpg", "/images/products/VIOLA уголок/3.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "Аккордеон"', uz: `Yig'iladigan divan "Akkordeon"` },
    description: {
      ru: "Компактное и удобное решение с полноценным спальным местом. Механизм трансформации позволяет быстро разложить диван, обеспечивая комфортный сон каждый день. Отличный выбор для небольших помещений, где важны функциональность, экономия пространства и уют в ежедневной жизни.",
      uz: "To'laqonli yotoq joyi bilan ixcham va qulay yechim. Transformatsiya mexanizmi divanni tezda yoyishga imkon beradi va har kuni qulay uyquni ta'minlaydi. Funksionallik, joy tejash va kundalik hayotda shinamlik muhim bo'lgan kichik xonalar uchun ajoyib tanlov."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/akkordeon/1.jpg", "/images/products/akkordeon/2.jpg", "/images/products/akkordeon/3.jpg"]
  },
  {
    title: { ru: 'Раскладной диван "SPARK"', uz: `Yig'iladigan divan "SPARK"` },
    description: {
      ru: "Современное решение для комфортного отдыха и сна. Глубокое сиденье и мягкая спинка обеспечивают максимальное удобство в течение дня всей семье. Благодаря надёжному механизму трансформации он легко превращается в просторное спальное место, создавая уют в вашем доме каждый день.",
      uz: "Qulay dam olish va uyqu uchun zamonaviy yechim. Chuqur o'rindiq va yumshoq orqa suyanchiq butun oilaga kun davomida maksimal qulaylikni ta'minlaydi. Ishonchli transformatsiya mexanizmi tufayli u keng yotoq joyiga oson aylanadi va uyingizda har kuni shinamlik yaratadi."
    },
    price: "5 300 000 UZS",
    images: ["/images/products/spark/1.jpg", "/images/products/spark/2.jpg", "/images/products/spark/3.jpg"]
  }
];
const promos = [
  {
    title: { ru: 'Угловой раскладной диван "HAPPY"', uz: `Burchakli yig'iladigan divan "HAPPY"` },
    description: {
      ru: 'Многофункциональный диван для всей семьи. Размер 260×150 см, механизм "дельфин" и ортопедические пружины обеспечивают комфорт и долгую службу.',
      uz: `Butun oila uchun ko'p funksiyali divan. O'lchami 260×150 sm, "delfin" mexanizmi va ortopedik prujinalar uzoq vaqt qulaylik va bardoshlilikni ta'minlaydi.`
    },
    price: "4 760 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/happy/1.jpg", "/images/products/happy/2.jpg", "/images/products/happy/3.jpg"],
    badge: ui.discountBadge
  },
  {
    title: { ru: 'Угловой раскладной диван "ESTEL"', uz: `Burchakli yig'iladigan divan "ESTEL"` },
    description: {
      ru: "Эргономичный вариант для комфортного отдыха. Размер 260×160 см, прочный металлический каркас, сторону угла можно менять под любую планировку.",
      uz: "O'lchami 260x160 sm. Metall karkas, burchak tomoni almashtiriladi."
    },
    price: "5 840 000 UZS",
    oldPrice: "7 300 000 UZS",
    images: ["/images/products/estel/1.jpg", "/images/products/estel/2.jpg", "/images/products/estel/3.jpg"],
    badge: ui.discountBadge
  },
  {
    title: { ru: 'Угловой раскладной диван "LAURA"', uz: `Burchakli yig'iladigan divan "LAURA"` },
    description: {
      ru: "Эргономичный комплект для комфортного отдыха. Размер 265×150 см, ППУ плотностью 48 и вместительный отсек для хранения белья.",
      uz: "O'lchami 265x150 sm. PPU 48 zichlik, katta saqlash qutisi."
    },
    price: "5 440 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/laura/1.jpg", "/images/products/laura/2.jpg", "/images/products/laura/3.jpg"],
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
    images: ["/images/products/york plus/1.jpg", "/images/products/york plus/2.jpg", "/images/products/york plus/3.jpg"],
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
    images: ["/images/products/rocking - 3/1.jpg", "/images/products/rocking - 3/2.jpg", "/images/products/rocking - 3/3.jpg"]
  },
  {
    title: { ru: "Классическое кресло-качалка", uz: "Klassik kreslo-kachalka" },
    description: {
      ru: "Символ домашнего уюта. Плавное раскачивание нормализует давление. Идеально для релакса и убаюкивания малыша.",
      uz: "Uy shinamligining timsoli. Mayin tebranish bosimni me'yorlashtiradi. Dam olish va bolani uxlatish uchun ideal."
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 2/1.jpg", "/images/products/rocking - 2/2.jpg", "/images/products/rocking - 2/3.jpg"]
  },
  {
    title: { ru: "Кресло для отдыха и релакса", uz: "Dam olish uchun kreslo" },
    description: {
      ru: "Каркас из прессованной фанеры, изготовлен по специальной технологии. Создаёт приятное ощущение амортизации в стороны.",
      uz: "Karkasi presslangan faneradan, maxsus texnologiyada tayyorlangan. Yon tomonlarga yoqimli amortizatsiya hissini beradi."
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 1/1.jpg", "/images/products/rocking - 1/2.jpg", "/images/products/rocking - 1/3.jpg"]
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
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 sm:items-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#catalog",
            className: "inline-flex items-center justify-center gap-3 bg-[var(--camel)] hover:bg-[var(--camel-dark)] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors",
            children: [
              localize(ui.showCatalog, lang),
              /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+998970003334",
            className: "inline-flex items-center justify-center gap-3 border border-white/40 hover:border-[var(--camel)] hover:text-[var(--camel)] text-white px-7 py-4 transition-colors",
            "aria-label": localize(ui.heroCallNow, lang),
            children: [
              /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" }) }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-semibold text-base lg:text-lg tracking-wide", children: "+998 97 000 33 34" })
            ]
          }
        )
      ] })
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
        /* @__PURE__ */ jsx("div", { className: `grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "font-sans text-[var(--charcoal)]/80 leading-relaxed pr-4 lg:pr-12 text-[15px] whitespace-pre-line", children: localize(item.a, lang) }) }) })
      ] }, i);
    }) })
  ] }) });
}
function MapSection() {
  const { lang } = useLocale();
  const yandexMapEmbed = "https://yandex.uz/map-widget/v1/?text=Ташкент%2C%20ул.%20Мукими%2C%2098А&z=17&l=map";
  const yandexMapShare = "https://yandex.uz/maps/-/CPGvaL2A";
  return /* @__PURE__ */ jsx("section", { id: "map", className: "py-20 lg:py-28 bg-white font-sans", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 lg:mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-4", children: localize(ui.mapEyebrow, lang) }),
      /* @__PURE__ */ jsx("h2", { className: "font-sans font-semibold text-3xl md:text-4xl lg:text-[44px] text-[var(--charcoal)] tracking-tight", children: localize(ui.mapTitle, lang) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-stretch", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center bg-[var(--ivory)] px-6 lg:px-10 py-10 lg:py-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[var(--charcoal)]/80 leading-relaxed text-[15px] mb-10", children: localize(ui.mapDescription, lang) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] text-xl leading-none mt-1", children: "📍" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium", children: localize(ui.mapAddressLabel, lang) }),
              /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-[var(--charcoal)] font-medium", children: localize(ui.addressLine, lang) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] text-xl leading-none mt-1", children: "📞" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium", children: localize(ui.mapPhoneLabel, lang) }),
              /* @__PURE__ */ jsx("a", { href: "tel:+998970003334", className: "text-base lg:text-lg text-[var(--charcoal)] font-medium hover:text-[var(--camel)] transition-colors", children: "+998 97 000 33 34" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[var(--camel)] text-xl leading-none mt-1", children: "🕐" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium", children: localize(ui.mapHoursLabel, lang) }),
              /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-[var(--charcoal)] font-medium", children: localize(ui.mapHoursValue, lang) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: yandexMapShare,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-10 inline-flex items-center justify-center gap-2 bg-[var(--charcoal)] hover:bg-[var(--camel)] text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors w-fit",
            children: [
              localize(ui.mapOpenInYandex, lang),
              /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsx("path", { d: "M7 17L17 7M9 7h8v8" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative min-h-[360px] lg:min-h-[480px] overflow-hidden bg-[var(--ivory)]", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: yandexMapEmbed,
          title: "SOFIA-MEBEL on Yandex Maps",
          loading: "lazy",
          className: "absolute inset-0 w-full h-full border-0",
          allowFullScreen: true
        }
      ) })
    ] })
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
const TELEGRAM_URL = "https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20";
function FloatingTelegram() {
  const { lang } = useLocale();
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: TELEGRAM_URL,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": localize(ui.floatingTelegramAria, lang),
      className: "fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-40 inline-flex items-center gap-2.5 pl-4 pr-5 py-3 lg:py-3.5 rounded-full bg-[#229ED9] hover:bg-[#1c8cc1] text-white shadow-[0_8px_24px_rgba(34,158,217,0.35)] hover:shadow-[0_10px_28px_rgba(34,158,217,0.45)] transition-all duration-200 hover:-translate-y-0.5 font-sans",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
            className: "shrink-0",
            children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z" })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-sm lg:text-[15px] font-medium tracking-tight whitespace-nowrap", children: localize(ui.floatingTelegramLabel, lang) })
      ]
    }
  );
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
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(MapSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingTelegram, {})
  ] }) });
}
export {
  Index as component
};
