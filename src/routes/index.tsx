import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero, Catalog, Promotions, Chairs, Installments, CustomProduction, FAQ, MapSection, Footer } from "@/components/Sections";
import { FloatingTelegram } from "@/components/FloatingTelegram";
import { LocaleProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SOFIA-MEBEL — Мягкая мебель достойного качества в Ташкенте" },
      { name: "description", content: "Шикарный выбор мягкой мебели: диваны, кресла-качалки, мебель на заказ. Рассрочка 0%. Ташкент, ул. Мукими 98А." },
      { property: "og:title", content: "SOFIA-MEBEL — Мягкая мебель достойного качества" },
      { property: "og:description", content: "Качество и комфорт. Диваны, кресла-качалки, мебель на заказ в Ташкенте." },
    ],
  }),
});

function Index() {
  return (
    <LocaleProvider>
      <div className="bg-[var(--ivory)] text-[var(--charcoal)] min-h-screen">
        <Header />
        <main>
          <Hero />
          <Catalog />
          <Promotions />
          <Chairs />
          <Installments />
          <CustomProduction />
          <FAQ />
          <MapSection />
        </main>
        <Footer />
        <FloatingTelegram />
      </div>
    </LocaleProvider>
  );
}
