import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { Toaster } from "sonner";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import CookieBanner from "@/components/site/CookieBanner";
import CustomCursor from "@/components/site/CustomCursor";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-100 px-4">
      <div className="max-w-md text-center">
        <h1 className="h-editorial text-7xl text-ink">404<span className="text-orange-ascode">.</span></h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink/70">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream-50 hover:bg-orange-ascode transition-colors">
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
      { title: "AScode Tech — Independent Web Development Studio" },
      { name: "description", content: "AScode Tech crafts fast, editorial, conversion-obsessed websites and web apps — from corporate sites to SaaS dashboards." },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "AScode Tech" },
      { property: "og:title", content: "AScode Tech — Independent Web Development Studio" },
      { property: "og:description", content: "AScode Tech crafts fast, editorial, conversion-obsessed websites and web apps — from corporate sites to SaaS dashboards." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://as-code.tech/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AScode Tech — Independent Web Development Studio" },
      { name: "twitter:description", content: "AScode Tech crafts fast, editorial, conversion-obsessed websites and web apps — from corporate sites to SaaS dashboards." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c8b146d-241f-4b5d-90c0-1d9a86e00222/id-preview-78dbb52c--3b0ce70a-dcfa-496a-9de5-8b443f61ca7c.lovable.app-1777668963971.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c8b146d-241f-4b5d-90c0-1d9a86e00222/id-preview-78dbb52c--3b0ce70a-dcfa-496a-9de5-8b443f61ca7c.lovable.app-1777668963971.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://as-code.tech/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
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
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = path.startsWith("/admin") || path === "/login";

  if (isAdmin) {
    return (
      <>
        <Outlet />
        <Toaster position="bottom-right" richColors closeButton />
      </>
    );
  }

  return (
    <main className="bg-cream-100">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden />
      <Navbar />
      <Outlet />
      <Footer />
      <CookieBanner />
      <Toaster position="bottom-right" richColors closeButton />
    </main>
  );
}
