import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import {
  Hero,
  Catalog,
  Promotions,
  Chairs,
  Installments,
  CustomProduction,
  Delivery,
  FAQ,
  MapSection,
  Footer,
} from "@/components/Sections";
import { FloatingTelegram } from "@/components/FloatingTelegram";
import { LocaleProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      {
        name: "description",
        content:
          "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану.",
      },
      { property: "og:title", content: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      {
        property: "og:description",
        content:
          "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану.",
      },
      { property: "og:image", content: "https://sofiamebel.uz/og-image.jpg" },
      { property: "og:url", content: "https://sofiamebel.uz" },
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
          <Delivery />
          <FAQ />
          <MapSection />
        </main>
        <Footer />
        <FloatingTelegram />
      </div>
    </LocaleProvider>
  );
}
