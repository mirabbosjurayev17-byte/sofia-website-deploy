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
      { title: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      { name: "description", content: "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану." },
      { name: "author", content: "SOFIA-MEBEL" },
      { name: "theme-color", content: "#FAF6F3" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sofiamebel.uz" },
      { property: "og:site_name", content: "SOFIA-MEBEL" },
      { property: "og:title", content: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      { property: "og:description", content: "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану." },
      { property: "og:image", content: "https://sofiamebel.uz/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      { property: "og:locale", content: "ru_RU" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SOFIA-MEBEL — мягкая мебель достойного качества" },
      { name: "twitter:description", content: "Современные диваны для вашего дома. Комфорт, стиль и качество." },
      { name: "twitter:image", content: "https://sofiamebel.uz/og-image.jpg" },
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
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=GTM-5SRSXN9'+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SRSXN9');`,
          }}
        />
        {/* End Google Tag Manager */}
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SRSXN9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
