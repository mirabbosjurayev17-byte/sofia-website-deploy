import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
const appCss = "/assets/styles-DP5e_ozo.css";
function ImageProtection() {
  useEffect(() => {
    const onContextMenu = (e) => {
      e.preventDefault();
    };
    const onDragStart = (e) => {
      const target = e.target;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };
    const onKeyDown = (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "s" || key === "u") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$1 = createRootRoute({
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
      { name: "twitter:image", content: "https://www.sofiamebel.uz/og-image.jpg" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "ru", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){var s=document.createElement('script');s.innerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5SRSXN9'+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SRSXN9');";document.head.appendChild(s);})();`
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-VPKWSRK982';document.head.appendChild(g);g.onload=function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VPKWSRK982');};})();`
          }
        }
      ),
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
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
            })
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(
        "noscript",
        {
          dangerouslySetInnerHTML: {
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SRSXN9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }
        }
      ),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ImageProtection, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const $$splitComponentImporter = () => import("./index-B5NQCjhK.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "SOFIA-MEBEL — мягкая мебель достойного качества"
    }, {
      name: "description",
      content: "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану."
    }, {
      property: "og:title",
      content: "SOFIA-MEBEL — мягкая мебель достойного качества"
    }, {
      property: "og:description",
      content: "Изготовление и продажа мягкой мебели в Ташкенте. Удобные, стильные диваны с доставкой по Узбекистану."
    }, {
      property: "og:image",
      content: "https://sofiamebel.uz/og-image.jpg"
    }, {
      property: "og:url",
      content: "https://sofiamebel.uz"
    }]
  })
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
