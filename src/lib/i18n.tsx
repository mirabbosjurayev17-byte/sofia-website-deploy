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
    { href: "#delivery", label: { ru: "Доставка", uz: "Yetkazib berish" } },
    { href: "#contacts", label: { ru: "Контакты", uz: "Kontaktlar" } },
  ],
  announcementMessages: [
    {
      ru: "Скидки до 30% на популярные модели диванов - ограниченное предложение",
      uz: "Ommabop divan modellariga 30% gacha chegirma - cheklangan taklif",
    },
    {
      ru: "Бесплатная доставка по всему Узбекистану!",
      uz: "Butun O'zbekiston bo'ylab bepul yetkazib berish!",
    },
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
  dimensionsLabel: { ru: "Размеры", uz: "O'lchamlar" },
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
      a: {
        ru: "Да, у нас есть удобные варианты рассрочки, чтобы вам было комфортно приобрести мебель без лишней нагрузки на бюджет.\n\nВы можете воспользоваться:\n• Uzum Bank — рассрочка до 12 месяцев без лишних сложностей.\n• Anor карта — до 6 месяцев (с увеличением стоимости на 15%).\n• Open карта — до 12 месяцев (увеличение стоимости на 25%).\n\nОбратите внимание:\n• Рассрочка не действует на товары со скидкой.\n• Доставка оплачивается отдельно и не включается в сумму рассрочки.\n\nЕсли нужно — мы с радостью подскажем самый выгодный вариант именно для вас 😊",
        uz: "Ha, sizga qulay bo'lishi uchun bir nechta muddatli to'lov variantlari mavjud — mebelni byudjetga ortiqcha yuk tushirmasdan xarid qilishingiz mumkin.\n\nQuyidagi variantlardan foydalanishingiz mumkin:\n• Uzum Bank — 12 oygacha muddatli to'lov, hech qanday ortiqcha shartlarsiz.\n• Anor karta — 6 oygacha (mahsulot narxi 15% ga oshadi).\n• Open karta — 12 oygacha (mahsulot narxi 25% ga oshadi).\n\nDiqqat:\n• Muddatli to'lov chegirmadagi tovarlarga amal qilmaydi.\n• Yetkazib berish xizmati alohida to'lanadi va muddatli to'lov summasiga kirmaydi.\n\nKerak bo'lsa — siz uchun eng qulay variantni biz bilan birga tanlaymiz 😊",
      },
    },
    {
      q: {
        ru: "Вы делаете доставку в другие города Узбекистана?",
        uz: "O'zbekistonning boshqa shaharlariga yetkazib berasizmi?",
      },
      a: {
        ru: "Да, мы доставляем мебель по всему Узбекистану.\n\nВ большинстве случаев доставка бесплатная, однако:\n• при покупке по акции или в рассрочку условия могут отличаться.\n\nСроки и детали доставки зависят от вашего города — просто позвоните нам, и мы всё подробно расскажем:\n📞 +998 97 000 33 34",
        uz: "Ha, biz mebelni butun O'zbekiston bo'ylab yetkazib beramiz.\n\nKo'p hollarda yetkazib berish bepul, lekin:\n• aksiya yoki muddatli to'lov bilan xarid qilinganda shartlar farqlanishi mumkin.\n\nMuddat va batafsil ma'lumot shaharingizga bog'liq — bizga qo'ng'iroq qiling, hammasini batafsil aytib beramiz:\n📞 +998 97 000 33 34",
      },
    },
    {
      q: { ru: "У вас есть шоу-рум?", uz: "Sizda shou-rum bormi?" },
      a: {
        ru: "Да, конечно! Мы будем рады видеть вас в нашем шоу-руме в Ташкенте:\n\n📍 ул. Мукими 98А\n🕐 Работаем ежедневно с 10:00 до 19:00\n\nВы сможете вживую оценить качество, комфорт и материалы нашей мебели.",
        uz: "Ha, albatta! Toshkentdagi shou-rumimizda sizni kutib qolamiz:\n\n📍 Muqimiy ko'chasi 98A\n🕐 Har kuni 10:00 dan 19:00 gacha ishlaymiz\n\nMebellarimizning sifati, qulayligi va materiallarini o'z ko'zingiz bilan ko'rishingiz mumkin.",
      },
    },
    {
      q: {
        ru: "У вас мебель только готовая или под заказ?",
        uz: "Mebellaringiz faqat tayyormi yoki buyurtma asosida ham olasizmi?",
      },
      a: {
        ru: "Мы предлагаем оба варианта:\n• Готовые модели — можно выбрать и забрать сразу.\n• Мебель под заказ — создадим именно то, что нужно вам.\n\nВы можете выбрать:\n✔ размер\n✔ ткань\n✔ цвет\n✔ конфигурацию\n\nСрок изготовления — в среднем 15 дней.\n\nМы поможем воплотить вашу идею в идеальный диван ✨",
        uz: "Biz har ikki variantni ham taklif qilamiz:\n• Tayyor modellar — tanlab darhol olib ketishingiz mumkin.\n• Buyurtma asosida — siz uchun aynan kerakli mebelni yaratamiz.\n\nO'zingiz tanlaysiz:\n✔ o'lcham\n✔ mato\n✔ rang\n✔ konfiguratsiya\n\nTayyorlash muddati — o'rtacha 15 kun.\n\nFikringizni mukammal divanga aylantirishga yordam beramiz ✨",
      },
    },
    {
      q: { ru: "У вас мебель местного производства?", uz: "Mebellar mahalliy ishlab chiqarishmi?" },
      a: {
        ru: "Да, наша мебель производится в Узбекистане опытными мастерами.\n\nМы используем:\n• качественные импортные материалы\n• современное оборудование\n\nКаждое изделие — это сочетание надёжности, эстетики и комфорта, сделанное с вниманием к деталям.",
        uz: "Ha, mebellarimiz O'zbekistonda tajribali ustalarimiz tomonidan ishlab chiqariladi.\n\nBiz quyidagilardan foydalanamiz:\n• yuqori sifatli import materiallar\n• zamonaviy uskunalar\n\nHar bir mahsulot — ishonchlilik, nafosat va qulaylikning uyg'unligi bo'lib, har bir tafsilotga e'tibor bilan tayyorlanadi.",
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
  // Top promo bar
  topBarPromo: {
    ru: "Скидки до 30% на популярные модели диванов — ограниченное предложение",
    uz: "Ommabop divan modellariga 30% gacha chegirma — cheklangan taklif",
  },
  heroCallNow: { ru: "Позвонить сейчас", uz: "Hozir qo'ng'iroq qiling" },
  // Map section (showroom CTA)
  mapEyebrow: { ru: "Шоу-рум", uz: "Shou-rum" },
  mapTitle: { ru: "Приезжайте к нам в шоу-рум", uz: "Bizning shou-rumga tashrif buyuring" },
  mapDescription: {
    ru: "Оцените мебель вживую, почувствуйте комфорт и выберите идеальный вариант вместе с нашим менеджером.",
    uz: "Mebelni o'z ko'zingiz bilan ko'ring, qulayligini his qiling va menejerimiz bilan birga ideal variantni tanlang.",
  },
  mapAddressLabel: { ru: "Адрес", uz: "Manzil" },
  mapPhoneLabel: { ru: "Телефон", uz: "Telefon" },
  mapHoursLabel: { ru: "График", uz: "Ish vaqti" },
  mapHoursValue: { ru: "Ежедневно с 10:00 до 19:00", uz: "Har kuni 10:00 dan 19:00 gacha" },
  mapOpenInYandex: { ru: "Открыть в Яндекс Картах", uz: "Yandex Xaritada ochish" },
  // Floating Telegram CTA
  floatingTelegramAria: { ru: "Написать в Telegram", uz: "Telegram orqali yozish" },
  floatingTelegramLabel: { ru: "Написать в Telegram", uz: "Telegramda yozish" },
};
