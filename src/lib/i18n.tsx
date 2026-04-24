import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "ru" | "uz";
export type LocalizedText = { ru: string; uz: string };

type LocaleContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function localize(text: LocalizedText, lang: Lang) {
  return text[lang];
}

export const ui = {
  brandDescription: {
    ru: "«Sofia-Mebel» — шикарный выбор для тех, кто ценит не только комфорт, но и качество мягкой мебели.",
    uz: "«Sofia-Mebel» — qulaylik va sifatli yumshoq mebelni qadrlaydiganlar uchun ajoyib tanlov.",
  },
  nav: [
    { href: "#catalog", label: { ru: "Каталог", uz: "Katalog" } },
    { href: "#promo", label: { ru: "Акции", uz: "Aksiyalar" } },
    { href: "#chairs", label: { ru: "Кресла-качалки", uz: "Kreslo-kachalkalar" } },
    { href: "#installments", label: { ru: "Рассрочка", uz: "Muddatli to'lov" } },
    { href: "#custom", label: { ru: "На заказ", uz: "Buyurtma asosida" } },
    { href: "#contacts", label: { ru: "Контакты", uz: "Kontaktlar" } },
  ],
  heroTitle: {
    ru: "Подарите уют вашему дому — качество и комфорт",
    uz: "Uyingizga shinamlik baxsh eting — sifat va qulaylik",
  },
  heroDescription: {
    ru: "Удобные механизмы, ортопедические пружины и ткани с водоотталкивающей пропиткой.",
    uz: "Qulay mexanizmlar, ortopedik prujinalar va suv qaytaruvchi matolar.",
  },
  showCatalog: { ru: "Смотреть каталог", uz: "Katalogni ko'rish" },
  sectionHits: { ru: "Хиты продаж: Мягкая мебель", uz: "Ommabop: Yumshoq mebellar" },
  sectionPromo: { ru: "Акции и скидки", uz: "Aksiya va chegirmalar" },
  sectionChairs: { ru: "Кресла-качалки", uz: "Kreslo-kachalkalar" },
  collectionEyebrow: { ru: "Коллекция 2026", uz: "To'plam 2026" },
  specialPriceEyebrow: { ru: "Специальные цены", uz: "Maxsus narxlar" },
  cozyEyebrow: { ru: "Уют и расслабление", uz: "Shinamlik va hordiq" },
  helpEyebrow: { ru: "Помощь", uz: "Yordam" },
  sectionInstallments: { ru: "Мебель в рассрочку", uz: "Muddatli to'lovga mebel" },
  paymentsEyebrow: { ru: "Удобная оплата", uz: "Qulay to'lov" },
  sectionCustom: { ru: "Мебель по вашим размерам", uz: "O'lchamingiz asosida mebel" },
  customEyebrow: { ru: "Индивидуальное производство", uz: "Individual ishlab chiqarish" },
  customDescription: {
    ru: "В SOFIA-MEBEL мы создаём мебель, идеально вписанную в ваше пространство. Вы выбираете параметры и обивку. Срок изготовления — до 15 дней.",
    uz: "SOFIA-MEBEL da biz sizning xonadoningizga mukammal mos tushuvchi mebel yaratamiz. O'lcham va matoni o'zingiz tanlaysiz. Tayyorlash muddati — 15 kungacha.",
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
    uz: "*Muddatli to'lov chegirmadagi tovarlarga amal qilmaydi. Yetkazib berish xizmati alohida hisoblanadi.",
  },
  faqTitle: { ru: "Часто задаваемые вопросы", uz: "Ko'p so'raladigan savollar" },
  faq: [
    {
      q: { ru: "У вас есть рассрочка?", uz: "Sizda muddatli to'lov bormi?" },
      a: { ru: "Да, через Uzum, Anor и Open Bank.", uz: "Ha, Uzum, Anor va Open Bank orqali mavjud." },
    },
    {
      q: { ru: "Вы делаете доставку в другие города?", uz: "Boshqa shaharlarga yetkazib berish bormi?" },
      a: {
        ru: "Бесплатная доставка по всему Узбекистану (кроме акционных товаров).",
        uz: "Ha, O'zbekiston bo'ylab yetkazib berish bepul (aksiyadagi tovarlardan tashqari).",
      },
    },
    {
      q: { ru: "У вас есть шоу-рум?", uz: "Tayyor mebellarni ko'rish uchun shourumingiz bormi?" },
      a: {
        ru: "Ташкент, ул.Мукими 98А. Без выходных с 10:00 до 19:00.",
        uz: "Toshkent sh., Muqimiy ko'chasi, 98A. Dam olish kunlarisiz, 10:00 dan 19:00 gacha ishlaymiz.",
      },
    },
    {
      q: { ru: "Мебель только готовая или под заказ?", uz: "Mebellar faqat tayyormi yoki buyurtma ham olasizlarmi?" },
      a: {
        ru: "Есть в наличии и под заказ, срок до 15 дней.",
        uz: "Tayyor mebellar ham mavjud, shuningdek buyurtma asosida ham yasab beramiz (15 kungacha).",
      },
    },
    {
      q: { ru: "У вас мебель местного производства?", uz: "Mebellar mahalliy ishlab chiqarishmi?" },
      a: {
        ru: "Да, труд местных мастеров с использованием премиальных импортных материалов.",
        uz: "Ha, mahalliy ustalarimiz mehnati hamda yuqori sifatli import materiallardan foydalaniladi.",
      },
    },
  ],
  landmark: {
    ru: "Ориентир: напротив ресторана «Фламинго» или ресторан «Сазанчик»",
    uz: "Mo'ljal: Flamingo restorani yoki Sazanchik ro'parasida",
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
};
