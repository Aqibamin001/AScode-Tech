import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_url: string | null;
  published_at: string | null;
  created_at: string;
};

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — AScode Tech" },
      { name: "description", content: "Articles, case studies and thoughts from the AScode Tech web development studio." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("posts")
        .select("id, slug, title, excerpt, cover_url, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false });
      setPosts(data ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <article className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ Journal ]</span>
          </div>
          <h1 className="col-span-12 md:col-span-7 h-editorial text-5xl md:text-7xl lg:text-[5.5rem]">
            Notes from
            <br />
            the studio<span className="text-orange-ascode">.</span>
          </h1>
        </div>

        {loading ? (
          <p className="text-ink/60">Loading…</p>
        ) : posts.length === 0 ? (
          <div className="border border-cream-300 bg-cream-50 p-12 text-center">
            <p className="font-display text-2xl text-ink">No posts yet.</p>
            <p className="mt-2 text-ink/60">Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group"
                data-cursor-hover="true"
              >
                <div className="relative overflow-hidden border border-cream-300 aspect-[4/3] bg-cream-200">
                  {p.cover_url ? (
                    <img
                      src={p.cover_url}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-ink/30">
                      <span className="font-display text-6xl">A.</span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                    {new Date(p.published_at ?? p.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 font-display text-2xl tracking-tight group-hover:text-orange-ascode transition-colors">
                    {p.title}
                  </h2>
                  {p.excerpt && <p className="mt-2 text-ink/70 line-clamp-3">{p.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
