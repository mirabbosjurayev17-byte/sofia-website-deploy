import { useState } from "react";
import { ProductCard, type Product } from "./ProductCard";
import { localize, useLocale, ui } from "@/lib/i18n";
import custom from "@/assets/custom-production.jpg";
import installments from "@/assets/installments.jpg";

const sofas: Product[] = [
  {
    title: { ru: 'Угловой диван "VALENSIA"', uz: 'Burchakli divan "VALENSIA"' },
    description: {
      ru: "Сочетание уюта и функциональности для современной гостиной. Просторная модульная форма позволяет комфортно разместиться всей семье, а турецкая технология сборки и ножки из натурального дерева обеспечивают надёжность на годы. Идеален как для ежедневного отдыха, так и для приёма гостей.",
      uz: "Zamonaviy mehmonxona uchun shinamlik va funksionallik uyg'unligi. Keng modulli forma butun oilani qulay joylashtirishga imkon beradi, turkiya texnologiyasi va tabiiy yog'och oyoqchalar esa uzoq yillik bardoshlilikni ta'minlaydi. Har kungi dam olish va mehmon kutish uchun ideal.",
    },
    price: "11 000 000 UZS",
    images: ["/images/products/valensia/1.jpg", "/images/products/valensia/2.jpg"],
  },
  {
    title: { ru: 'Угловой диван "EVA"', uz: 'Burchakli divan "EVA"' },
    description: {
      ru: "Идеальный выбор для тех, кто ценит комфорт и практичность в каждой детали. Свободные линии и размер 270×230 см создают атмосферу уюта для всей семьи, а два открывающихся пуфа и вместительный бельевой отсек помогут сохранить порядок и всё необходимое под рукой.",
      uz: "Har bir tafsilotda qulaylik va amaliylikni qadrlaydiganlar uchun ideal tanlov. Keng forma va 270×230 sm o'lcham butun oila uchun shinam muhit yaratadi, ikki ochiladigan puf va sig'imli saqlash qutisi esa tartib va kerakli narsalarni qo'l ostida saqlashga yordam beradi.",
    },
    price: "8 500 000 UZS",
    images: ["/images/products/eva/1.jpg", "/images/products/eva/2.jpg"],
  },
  {
    title: { ru: 'Раскладной диван "Тик-так"', uz: 'Yig\'iladigan divan "Tik-tak"' },
    description: {
      ru: 'Надёжный спутник для ежедневного использования и спокойного сна. Механизм "еврокнижка" работает легко и бесшумно, а ширина 240 см и ровная спальная поверхность обеспечивают настоящий отдых. Практичное решение для всей семьи в любой комнате.',
      uz: "Har kungi foydalanish va tinch uyqu uchun ishonchli hamroh. \"Yevroknijka\" mexanizmi yengil va shovqinsiz ishlaydi, kengligi 240 sm va tekis yotoq yuzasi esa haqiqiy dam olishni ta'minlaydi. Har qanday xona uchun butun oilaga mos amaliy yechim.",
    },
    price: "5 800 000 UZS",
    images: ["/images/products/tik-tak/1.jpg", "/images/products/tik-tak/2.jpg"],
  },
  {
    title: { ru: 'Угловой диван "Bella"', uz: 'Burchakli divan "Bella"' },
    description: {
      ru: "Элегантное решение, которое объединяет стиль и практичность в каждой линии. Размер 270×155 см идеально подходит для уютных вечеров всей семьёй, а вместительные бельевые отсеки в атаманке и подлокотниках делают его исключительно удобным для ежедневного использования.",
      uz: "Har bir chiziqda uslub va amaliylikni birlashtirgan nafis yechim. 270×155 sm o'lcham butun oila bilan shinam oqshomlar uchun ideal mos keladi, atamanka va qo'ltiq tayoqlardagi keng saqlash qutilari esa har kungi foydalanishni g'oyat qulay qiladi.",
    },
    price: "7 000 000 UZS",
    images: ["/images/products/Bella/1.jpg", "/images/products/Bella/2.jpg", "/images/products/Bella/3.jpg"],
  },
  {
    title: { ru: 'Кухонный уголок "Ракушка"', uz: 'Oshxona burchagi "Rakushka"' },
    description: {
      ru: "Размер 215x165 см. Турецкий дизайн, ящики для хранения, моющаяся обивка.",
      uz: "O'lchami 215x165 sm. Turkiya dizayni, saqlash qutilari va yuviladigan qoplama.",
    },
    price: "5 300 000 UZS",
    images: ["/images/products/Ракушка/1.jpg", "/images/products/Ракушка/2.jpg"],
  },
  {
    title: { ru: 'Комплект "Йорк" (Тройка)', uz: '"York" to\'plami (Troyka)' },
    description: {
      ru: "Диван 210 см и 2 кресла. Откидная спинка имеет три положения, полностью откидывается.",
      uz: "Divan 210 sm va 2 ta kreslo. Orqa suyanchiği uch holatda sozlanadi va to'liq yotadi.",
    },
    price: "8 500 000 UZS",
    images: ["/images/products/york/1.jpg", "/images/products/york/2.jpg"],
  },
  {
    title: { ru: 'Раздвижной диван "VIOLA"', uz: 'Yig\'iladigan divan "VIOLA"' },
    description: {
      ru: "Идеальное решение для ежедневного сна. Широкое спальное место (225 см) и вместительный бельевой ящик — отличная альтернатива кровати. Современный дизайн легко впишется в любой интерьер.",
      uz: "Har kungi uyqu uchun ideal yechim. Keng yotoq joyi (225 sm) va katta saqlash qutisi karavotga ajoyib muqobil bo'ladi. Zamonaviy dizayn istalgan interyerga oson uyg'unlashadi.",
    },
    price: "6 200 000 UZS",
    images: ["/images/products/VIOLA/1.jpg", "/images/products/VIOLA/2.jpg"],
  },
  {
    title: { ru: 'Угловой раскладной диван "Мартелл"', uz: 'Burchakli yig\'iladigan divan "Martell"' },
    description: {
      ru: 'Размер 280x155 см. Съёмные подушки на подлокотниках, механизм "дельфин".',
      uz: "O'lchami 280x155 sm. Qo'ltiq qismlarida olinadigan yostiqlar, mexanizm \"delfin\".",
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Мартелл/1.jpg", "/images/products/Мартелл/2.jpg"],
  },
  {
    title: { ru: 'Раскладной диван "Мини-Йорк"', uz: 'Yig\'iladigan divan "Mini-York"' },
    description: {
      ru: "Ширина 160 см. Двойной механизм (дельфин + откидная спинка), спальное место 130x190 см.",
      uz: "Kengligi 160 sm. Ikki mexanizm (delfin + bukiladigan orqa qism), yotoq joyi 130x190 sm.",
    },
    price: "4 500 000 UZS",
    images: ["/images/products/Мини-Йорк/1.jpg", "/images/products/Мини-Йорк/2.jpg"],
  },
  {
    title: { ru: 'Угловой раскладной диван "Нота PLUS"', uz: 'Burchakli yig\'iladigan divan "Nota PLUS"' },
    description: {
      ru: "Размер 260x160 см. Два бельевых ящика, просторное спальное место 220x155 см.",
      uz: "O'lchami 260x160 sm. Ikki saqlash qutisi, keng yotoq joyi 220x155 sm.",
    },
    price: "6 800 000 UZS",
    images: ["/images/products/Нота PLUS уголок/1.jpg", "/images/products/Нота PLUS уголок/2.jpg"],
  },
  {
    title: { ru: 'Раскладной диван "Нота Plus"', uz: 'Yig\'iladigan divan "Nota Plus"' },
    description: {
      ru: "Длина 235 см. Широкое спальное место (200x155 см) полностью заменяет двуспальную кровать.",
      uz: "Uzunligi 235 sm. Keng yotoq joyi (200x155 sm) ikki kishilik karavotni to'liq almashtiradi.",
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Нота Plus/1.jpg", "/images/products/Нота Plus/2.jpg"],
  },
  {
    title: { ru: 'Угловой диван "ORIGINAL"', uz: 'Burchakli divan "ORIGINAL"' },
    description: {
      ru: "Размер 290x230 см. В комплекте два открывающихся пуфа и вместительный бельевой отсек.",
      uz: "O'lchami 290x230 sm. To'plamda ochiladigan ikki puf va katta saqlash qutisi mavjud.",
    },
    price: "8 500 000 UZS",
    images: ["/images/products/original/1.jpg", "/images/products/original/2.jpg"],
  },
  {
    title: { ru: 'Угловой раскладной диван "BAR-уголок"', uz: 'Burchakli yig\'iladigan divan "BAR-burchak"' },
    description: {
      ru: 'Размер 265x150 см. Механизм "дельфин", ортопедические пружины, сторона угла меняется.',
      uz: "O'lchami 265x150 sm. Mexanizm \"delfin\", ortopedik prujinalar, burchak tomoni almashtiriladi.",
    },
    price: "6 800 000 UZS",
    images: ["/images/products/BAR-уголок/1.jpg", "/images/products/BAR-уголок/2.jpg"],
  },
  {
    title: { ru: "Классическая раскладная тройка (Диван и 2 кресла)", uz: "Klassik yig'iladigan troyka (Divan va 2 kreslo)" },
    description: {
      ru: 'Диван 220 см и два кресла по 90 см. Механизм "книжка", имеется бельевой ящик.',
      uz: "Divan 220 sm va 90 sm dan 2 ta kreslo. Mexanizm \"knijka\", saqlash qutisi bor.",
    },
    price: "5 800 000 UZS",
    images: ["/images/products/Classic Troyka/1.jpg", "/images/products/Classic Troyka/2.jpg"],
  },
  {
    title: { ru: 'Комплект "Ласетти" (Тройка)', uz: '"Lasetti" to\'plami (Troyka)' },
    description: {
      ru: "Облегчённый дизайн. Откидная спинка имеет три положения и у дивана, и у кресел.",
      uz: "Yengil dizayn. Bukiladigan orqa qism divanda ham, kreslolarda ham uch holatda sozlanadi.",
    },
    price: "5 800 000 UZS",
    images: ["/images/products/lacetti/1.jpg", "/images/products/lacetti/2.jpg"],
  },
  {
    title: { ru: 'Угловой диван "Venera"', uz: 'Burchakli divan "Venera"' },
    description: {
      ru: "Размер 280x225 см. Два открывающихся пуфа (55x55 см), вместительный бельевой ящик.",
      uz: "O'lchami 280x225 sm. Ikki ochiladigan puf (55x55 sm), katta saqlash qutisi bor.",
    },
    price: "8 500 000 UZS",
    images: ["/images/products/venera/1.jpg", "/images/products/venera/2.jpg"],
  },
  {
    title: { ru: 'Угловой диван "VIOLA"', uz: 'Burchakli divan "VIOLA"' },
    description: {
      ru: "Размер 245x160 см. Два бельевых ящика, удобные большие мягкие подушки.",
      uz: "O'lchami 245x160 sm. Ikki saqlash qutisi, qulay katta yumshoq yostiqlar bilan.",
    },
    price: "7 300 000 UZS",
    images: ["/images/products/VIOLA уголок/1.jpg", "/images/products/VIOLA уголок/2.jpg"],
  },
  {
    title: { ru: 'Раскладной диван "Аккордеон"', uz: 'Yig\'iladigan divan "Akkordeon"' },
    description: {
      ru: "Компактное решение с полноценным спальным местом. Ширина 195 см, спальное место 160×210 см, в комплекте мягкие подушки. Подойдёт даже в небольшую комнату.",
      uz: "To'liq yotoq joyi bilan ixcham yechim. Kengligi 195 sm, yotoq joyi 160×210 sm, to'plamda yumshoq yostiqlar mavjud. Hatto kichik xonaga ham mos keladi.",
    },
    price: "5 300 000 UZS",
    images: ["/images/products/akkordeon/1.jpg", "/images/products/akkordeon/2.jpg"],
  },
  {
    title: { ru: 'Раскладной диван "SPARK"', uz: 'Yig\'iladigan divan "SPARK"' },
    description: {
      ru: "Ширина 190 см. Двойной механизм, глубокое сидячее место, спинка полностью откидывается.",
      uz: "Kengligi 190 sm. Ikki mexanizm, chuqur o'rindiq va to'liq yotadigan orqa qism.",
    },
    price: "5 300 000 UZS",
    images: ["/images/products/spark/1.jpg", "/images/products/spark/2.jpg"],
  },
];

const promos: Product[] = [
  {
    title: { ru: 'Угловой раскладной диван "HAPPY"', uz: 'Burchakli yig\'iladigan divan "HAPPY"' },
    description: {
      ru: 'Многофункциональный диван для всей семьи. Размер 260×150 см, механизм "дельфин" и ортопедические пружины обеспечивают комфорт и долгую службу.',
      uz: "Butun oila uchun ko'p funksiyali divan. O'lchami 260×150 sm, \"delfin\" mexanizmi va ortopedik prujinalar uzoq vaqt qulaylik va bardoshlilikni ta'minlaydi.",
    },
    price: "4 760 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/happy/1.jpg", "/images/products/happy/2.jpg"],
    badge: ui.discountBadge,
  },
  {
    title: { ru: 'Угловой раскладной диван "ESTEL"', uz: 'Burchakli yig\'iladigan divan "ESTEL"' },
    description: {
      ru: "Эргономичный вариант для комфортного отдыха. Размер 260×160 см, прочный металлический каркас, сторону угла можно менять под любую планировку.",
      uz: "O'lchami 260x160 sm. Metall karkas, burchak tomoni almashtiriladi.",
    },
    price: "5 840 000 UZS",
    oldPrice: "7 300 000 UZS",
    images: ["/images/products/estel/1.jpg", "/images/products/estel/2.jpg", "/images/products/estel/3.jpg"],
    badge: ui.discountBadge,
  },
  {
    title: { ru: 'Угловой раскладной диван "LAURA"', uz: 'Burchakli yig\'iladigan divan "LAURA"' },
    description: {
      ru: "Эргономичный комплект для комфортного отдыха. Размер 265×150 см, ППУ плотностью 48 и вместительный отсек для хранения белья.",
      uz: "O'lchami 265x150 sm. PPU 48 zichlik, katta saqlash qutisi.",
    },
    price: "5 440 000 UZS",
    oldPrice: "6 800 000 UZS",
    images: ["/images/products/laura/1.jpg", "/images/products/laura/2.jpg"],
    badge: ui.discountBadge,
  },
  {
    title: { ru: 'Раскладной диван "Йорк PLUS"', uz: 'Yig\'iladigan divan "York PLUS"' },
    description: {
      ru: 'Ширина 193 см. ППУ с эффектом памяти "memory foam", двойной механизм.',
      uz: "Kengligi 193 sm. PPU \"memory foam\" effekti bilan, ikki mexanizm.",
    },
    price: "4 400 000 UZS",
    oldPrice: "5 500 000 UZS",
    images: ["/images/products/york plus/1.jpg", "/images/products/york plus/2.jpg"],
    badge: ui.discountBadge,
  },
];

const chairs: Product[] = [
  {
    title: { ru: "Кресло-качалка (До 150 кг)", uz: "Kreslo-kachalka (150 kg gacha)" },
    description: {
      ru: "Материал: прессованная фанера. Эффект амортизации, выдерживает вес до 150 кг. Гарантия качества.",
      uz: "Material: presslangan fanera. Amortizatsiya effekti bor, 150 kg gacha vazn ko'taradi. Sifat kafolati.",
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 3/1.jpg", "/images/products/rocking - 3/2.jpg"],
  },
  {
    title: { ru: "Классическое кресло-качалка", uz: "Klassik kreslo-kachalka" },
    description: {
      ru: "Символ домашнего уюта. Плавное раскачивание нормализует давление. Идеально для релакса и убаюкивания малыша.",
      uz: "Uy shinamligining timsoli. Mayin tebranish bosimni me'yorlashtiradi. Dam olish va bolani uxlatish uchun ideal.",
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 2/1.jpg", "/images/products/rocking - 2/2.jpg"],
  },
  {
    title: { ru: "Кресло для отдыха и релакса", uz: "Dam olish uchun kreslo" },
    description: {
      ru: "Каркас из прессованной фанеры, изготовлен по специальной технологии. Создаёт приятное ощущение амортизации в стороны.",
      uz: "Karkasi presslangan faneradan, maxsus texnologiyada tayyorlangan. Yon tomonlarga yoqimli amortizatsiya hissini beradi.",
    },
    price: "3 200 000 UZS",
    images: ["/images/products/rocking - 1/1.jpg", "/images/products/rocking - 1/2.jpg"],
  },
];

function SectionTitle({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      {eyebrow && (
        <p className="text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)]">{children}</h2>
    </div>
  );
}

export function Hero() {
  const { lang } = useLocale();
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/sections/hero-mobile-2.jpg')] md:bg-[url('/images/sections/hero.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:from-black/60 lg:via-transparent" />
      <div className="relative z-10 mx-auto max-w-[1400px] h-full px-5 lg:px-10 flex items-end lg:items-center pb-20 lg:pb-0">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 lg:mb-8">
            {lang === "ru" ? (
              <>
                Подарите уют<br/>вашему дому — <span className="italic text-[var(--camel)]">качество</span> и комфорт
              </>
            ) : (
              <>
                Uyingizga shinamlik<br/>baxsh eting — <span className="italic text-[var(--camel)]">sifat</span> va qulaylik
              </>
            )}
          </h1>
          <p className="text-base lg:text-lg text-white/85 max-w-xl mb-8 lg:mb-10 leading-relaxed">
            {localize(ui.heroDescription, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-3 bg-[var(--camel)] hover:bg-[var(--camel-dark)] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
            >
              {localize(ui.showCatalog, lang)}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a
              href="tel:+998970003334"
              className="inline-flex items-center justify-center gap-3 border border-white/40 hover:border-[var(--camel)] hover:text-[var(--camel)] text-white px-7 py-4 transition-colors"
              aria-label={localize(ui.heroCallNow, lang)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              <span className="font-sans font-semibold text-base lg:text-lg tracking-wide">+998 97 000 33 34</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Catalog() {
  const { lang } = useLocale();
  return (
    <section id="catalog" className="py-20 lg:py-32 bg-[var(--ivory)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionTitle eyebrow={localize(ui.collectionEyebrow, lang)}>{localize(ui.sectionHits, lang)}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20">
          {sofas.map((p) => <ProductCard key={p.title} product={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Promotions() {
  const { lang } = useLocale();
  return (
    <section id="promo" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionTitle eyebrow={localize(ui.specialPriceEyebrow, lang)}>{localize(ui.sectionPromo, lang)}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20">
          {promos.map((p) => <ProductCard key={p.title} product={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Chairs() {
  const { lang } = useLocale();
  return (
    <section id="chairs" className="py-20 lg:py-32 bg-[var(--ivory)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <SectionTitle eyebrow={localize(ui.cozyEyebrow, lang)}>{localize(ui.sectionChairs, lang)}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-20 max-w-5xl mx-auto">
          {chairs.map((p) => <ProductCard key={p.title} product={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Installments() {
  const { lang } = useLocale();
  const banks = [
    { name: "Uzum Bank", text: localize(ui.installment12, lang), note: "0%" },
    { name: "Anor Bank", text: localize(ui.installment6, lang), note: "" },
    { name: "Open Bank", text: localize(ui.installment12plus, lang), note: "" },
  ];
  return (
    <section id="installments" className="bg-[var(--ivory)]">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 lg:px-16 xl:px-24 py-20 lg:py-28 flex flex-col justify-center">
          <p className="text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-5">{localize(ui.paymentsEyebrow, lang)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-10 leading-tight">
            {lang === "ru" ? (
              <>Мебель в <span className="text-[var(--camel)] italic">рассрочку</span></>
            ) : (
              <>Muddatli to'lovga <span className="text-[var(--camel)] italic">mebel</span></>
            )}
          </h2>
          <div className="space-y-5 mb-8">
            {banks.map((b) => (
              <div key={b.name} className="flex items-baseline justify-between border-b border-[var(--charcoal)]/15 pb-4">
                <div>
                  <p className="font-serif text-lg text-[var(--charcoal)]">{b.name}</p>
                  <p className="text-sm text-[var(--charcoal)]/70">{b.text}</p>
                </div>
                {b.note && <span className="text-[var(--camel)] font-medium">{b.note}</span>}
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--charcoal)]/60 leading-relaxed max-w-md">
            {localize(ui.installmentNote, lang)}
          </p>
        </div>
        <div className="relative min-h-[400px] lg:min-h-full">
          <img src="/images/sections/installment.jpg" alt="Интерьер с мебелью SOFIA-MEBEL" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function CustomProduction() {
  const { lang } = useLocale();
  return (
    <section id="custom" className="bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[640px] order-2 lg:order-1">
          <img src="/images/sections/custom.jpg" alt="Производство мебели на заказ" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="px-5 lg:px-16 xl:px-24 py-20 lg:py-28 flex flex-col justify-center order-1 lg:order-2">
          <p className="text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-5">{localize(ui.customEyebrow, lang)}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--charcoal)] mb-7 leading-tight">
            {lang === "ru" ? (
              <>Мебель по вашим <span className="italic text-[var(--camel)]">размерам</span></>
            ) : (
              <>O'lchamingiz asosida <span className="italic text-[var(--camel)]">mebel</span></>
            )}
          </h2>
          <p className="text-[var(--charcoal)]/75 leading-relaxed text-lg mb-10 max-w-lg">
            {localize(ui.customDescription, lang)}
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { n: "15", l: localize(ui.productionDays, lang) },
              { n: "350+", l: localize(ui.fabrics, lang) },
              { n: "∞", l: localize(ui.customSizes, lang) },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif text-3xl text-[var(--camel)] mb-1">{s.n}</p>
                <p className="text-xs text-[var(--charcoal)]/70 whitespace-pre-line leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
          <a
            href="https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[var(--charcoal)] hover:bg-[var(--camel)] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors w-fit"
          >
            {localize(ui.discussOrder, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = ui.faq;

export function FAQ() {
  const { lang } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-32 bg-[var(--ivory)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <SectionTitle eyebrow={localize(ui.helpEyebrow, lang)}>{localize(ui.faqTitle, lang)}</SectionTitle>
        <div className="border-t border-[var(--charcoal)]/15">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--charcoal)]/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-semibold text-base lg:text-lg text-[var(--charcoal)] group-hover:text-[var(--camel)] transition-colors">{localize(item.q, lang)}</span>
                  <span className={`text-[var(--camel)] text-2xl transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="font-sans text-[var(--charcoal)]/80 leading-relaxed pr-4 lg:pr-12 text-[15px] whitespace-pre-line">
                      {localize(item.a, lang)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MapSection() {
  const { lang } = useLocale();
  // Single-pin search-mode embed with explicit query for ul. Mukimi 98A. The `mode=search` widget
  // shows one selected result; the iframe stays clean without unrelated markers.
  const yandexMapEmbed =
    "https://yandex.uz/map-widget/v1/?text=Ташкент%2C%20ул.%20Мукими%2C%2098А&z=17&l=map";
  const yandexMapShare = "https://yandex.uz/maps/-/CPGvaL2A";
  return (
    <section id="map" className="py-20 lg:py-28 bg-white font-sans">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[var(--camel)] text-xs tracking-[0.3em] uppercase mb-4">{localize(ui.mapEyebrow, lang)}</p>
          <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-[44px] text-[var(--charcoal)] tracking-tight">
            {localize(ui.mapTitle, lang)}
          </h2>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col justify-center bg-[var(--ivory)] px-6 lg:px-10 py-10 lg:py-12">
            <p className="text-[var(--charcoal)]/80 leading-relaxed text-[15px] mb-10">
              {localize(ui.mapDescription, lang)}
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-[var(--camel)] text-xl leading-none mt-1">📍</span>
                <div>
                  <p className="text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium">{localize(ui.mapAddressLabel, lang)}</p>
                  <p className="text-base lg:text-lg text-[var(--charcoal)] font-medium">{localize(ui.addressLine, lang)}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[var(--camel)] text-xl leading-none mt-1">📞</span>
                <div>
                  <p className="text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium">{localize(ui.mapPhoneLabel, lang)}</p>
                  <a href="tel:+998970003334" className="text-base lg:text-lg text-[var(--charcoal)] font-medium hover:text-[var(--camel)] transition-colors">+998 97 000 33 34</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[var(--camel)] text-xl leading-none mt-1">🕐</span>
                <div>
                  <p className="text-[var(--camel)] text-[11px] tracking-[0.25em] uppercase mb-1 font-medium">{localize(ui.mapHoursLabel, lang)}</p>
                  <p className="text-base lg:text-lg text-[var(--charcoal)] font-medium">{localize(ui.mapHoursValue, lang)}</p>
                </div>
              </div>
            </div>
            <a
              href={yandexMapShare}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 bg-[var(--charcoal)] hover:bg-[var(--camel)] text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors w-fit"
            >
              {localize(ui.mapOpenInYandex, lang)}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[480px] overflow-hidden bg-[var(--ivory)]">
            <iframe
              src={yandexMapEmbed}
              title="SOFIA-MEBEL on Yandex Maps"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLocale();
  return (
    <footer id="contacts" className="bg-[var(--charcoal)] text-[var(--ivory)]">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="font-serif text-2xl mb-5">SOFIA<span className="text-[var(--camel)]">·</span>MEBEL</p>
            <p className="text-[var(--ivory)]/70 leading-relaxed text-sm max-w-xs">
              {localize(ui.brandDescription, lang)}
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <div>
              <p className="text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2">{localize(ui.addressLabel, lang)}</p>
              <p className="text-[var(--ivory)]/85 leading-relaxed">
                {localize(ui.addressLine, lang)}<br/>
                <span className="text-[var(--ivory)]/60">{localize(ui.landmark, lang)}</span>
              </p>
            </div>
            <div>
              <p className="text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2">{localize(ui.phonesLabel, lang)}</p>
              <a href="tel:+998970003334" className="block text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors">+998 97 000 33 34</a>
              <a href="tel:+998977782126" className="block text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors">+998 97 778 21 26</a>
            </div>
            <div>
              <p className="text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-2">{localize(ui.scheduleLabel, lang)}</p>
              <p className="text-[var(--ivory)]/85">{localize(ui.everyday, lang)}</p>
            </div>
          </div>

          <div>
            <p className="text-[var(--camel)] text-xs tracking-[0.25em] uppercase mb-4">{localize(ui.socialLabel, lang)}</p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://t.me/sofiamebel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z"/></svg>
                {localize(ui.telegramChannel, lang)}
              </a>
              <a href="https://t.me/OtvechuZdes?text=Здравствуйте!%20Я%20пишу%20с%20сайта%20Sofia-Mebel.%20Интересует%20мебель.%20Можете%20подсказать%20по%20наличию%20и%20вариантам?%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[var(--ivory)]/85 hover:text-[var(--camel)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.55 8.16l-1.86 8.78c-.14.62-.51.77-1.03.48l-2.85-2.1-1.37 1.32c-.15.15-.28.28-.57.28l.2-2.9 5.27-4.76c.23-.2-.05-.32-.35-.12L8.47 13.4l-2.81-.88c-.61-.19-.62-.61.13-.9l10.99-4.24c.51-.18.96.12.77.78z"/></svg>
                {localize(ui.managerTelegram, lang)}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--ivory)]/15 flex flex-col md:flex-row gap-3 justify-between text-xs text-[var(--ivory)]/55">
          <p>© 2026 SOFIA-MEBEL. {localize(ui.rights, lang)}</p>
          <p>{localize(ui.cityCountry, lang)}</p>
        </div>
      </div>
    </footer>
  );
}
