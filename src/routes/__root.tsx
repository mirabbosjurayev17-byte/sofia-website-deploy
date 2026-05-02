import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ImageProtection } from "@/components/ImageProtection";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Мягкая мебель в Ташкенте на заказ | Диваны, кресла, рассрочка — SOFIA MEBEL" },
      { name: "description", content: "Фабрика мягкой мебели SOFIA MEBEL в Ташкенте. Купить угловой, раскладной диван, кресло-качалку по своим размерам. Рассрочка Uzum и Anor Bank без %. Toshkentda yumshoq mebel, divanlar, tebranma kreslolar ishlab chiqarish. Muddatli to'lov." },
      { name: "keywords", content: "мягкая мебель Ташкент, купить диван в Ташкенте, угловой диван, раскладной диван, диван трансформер, кресло-качалка, мебель в рассрочку Ташкент, диван на заказ, Uzum Nasiya мебель, Anor Bank рассрочка, yumshoq mebel Toshkent, divan sotib olish, burchak divan, tebranma kreslo, muddatli to'lovga mebel, mebel ishlab chiqarish Toshkent, arzon mebel, sifatli mebel, sofiamebel, диваны для гостиной, кухонный уголок" },
      { name: "author", content: "Sofia Mebel" },
      { name: "theme-color", content: "#FAF6F3" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.sofiamebel.uz/" },
      { property: "og:site_name", content: "Sofia Mebel" },
      { property: "og:title", content: "Мягкая мебель в Ташкенте на заказ | SOFIA MEBEL" },
      { property: "og:description", content: "Фабрика мягкой мебели SOFIA MEBEL в Ташкенте. Диваны, кресла на заказ. Рассрочка Uzum и Anor Bank без %." },
      { property: "og:image", content: "https://www.sofiamebel.uz/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SOFIA MEBEL — мягкая мебель в Ташкенте" },
      { property: "og:locale", content: "ru_RU" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Мягкая мебель в Ташкенте на заказ | SOFIA MEBEL" },
      { name: "twitter:description", content: "Фабрика мягкой мебели SOFIA MEBEL. Диваны, кресла на заказ. Рассрочка без %." },
      { name: "twitter:image", content: "https://www.sofiamebel.uz/og-image.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Google Tag Manager — force DOM injection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5SRSXN9'+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SRSXN9');";document.head.appendChild(s);})();`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Analytics (GA4) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-VPKWSRK982';document.head.appendChild(g);g.onload=function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VPKWSRK982');};})();`,
          }}
        />
        {/* End Google Analytics */}
        <HeadContent />
        {/* Local Business JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "name": "Sofia Mebel",
              "image": "https://www.sofiamebel.uz/logo.png",
              "description": "Производство и продажа мягкой мебели в Ташкенте. Диваны на заказ, рассрочка.",
              "url": "https://www.sofiamebel.uz/",
              "telephone": "+998970003334",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Мукими 98А",
                "addressLocality": "Ташкент",
                "addressCountry": "UZ"
              },
              "paymentAccepted": "Cash, Credit Card, Uzum Nasiya, Anor Bank",
              "openingHours": "Mo-Su 10:00-19:00"
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SRSXN9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ImageProtection />
      <Outlet />
    </>
  );
}
