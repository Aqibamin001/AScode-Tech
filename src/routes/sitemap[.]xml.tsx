import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const SITE = "https://as-code.tech";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticUrls = [
          { loc: `${SITE}/`, priority: "1.0", changefreq: "weekly" },
          { loc: `${SITE}/blog`, priority: "0.8", changefreq: "weekly" },
          { loc: `${SITE}/privacy`, priority: "0.3", changefreq: "yearly" },
          { loc: `${SITE}/cookies`, priority: "0.3", changefreq: "yearly" },
        ];

        let postUrls: { loc: string; lastmod?: string }[] = [];
        try {
          const { data } = await supabaseAdmin
            .from("posts")
            .select("slug, published_at, created_at")
            .eq("published", true);
          postUrls = (data ?? []).map((p) => ({
            loc: `${SITE}/blog/${p.slug}`,
            lastmod: new Date(p.published_at ?? p.created_at).toISOString(),
          }));
        } catch {
          // If admin client unavailable at build, just emit static URLs.
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
${postUrls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<changefreq>monthly</changefreq><priority>0.7</priority></url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
