import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, slug, title, excerpt, cover_url, content_md, published, published_at, created_at")
      .eq("slug", params.slug)
      .eq("published", true)
      .maybeSingle();
    if (error || !data) throw notFound();
    return { post: data };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    return {
      meta: [
        { title: post ? `${post.title} — AScode Tech` : "Post — AScode Tech" },
        { name: "description", content: post?.excerpt ?? "AScode Tech blog post." },
        { property: "og:title", content: post?.title ?? "AScode Tech" },
        { property: "og:description", content: post?.excerpt ?? "" },
        ...(post?.cover_url ? [{ property: "og:image", content: post.cover_url }] : []),
      ],
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="bg-cream-100 pt-40 pb-24 text-center">
      <h1 className="h-editorial text-6xl">Post not found<span className="text-orange-ascode">.</span></h1>
      <Link to="/blog" className="mt-6 inline-block underline decoration-orange-ascode underline-offset-2">
        Back to blog
      </Link>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const date = new Date(post.published_at ?? post.created_at);

  return (
    <article className="bg-cream-100 pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Link to="/blog" className="text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-orange-ascode">
          ← Back to blog
        </Link>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-ink/60">
          {date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 className="mt-3 h-editorial text-4xl md:text-6xl">
          {post.title}
          <span className="text-orange-ascode">.</span>
        </h1>
        {post.excerpt && (
          <p className="mt-6 text-xl text-ink/75 leading-relaxed">{post.excerpt}</p>
        )}
        {post.cover_url && (
          <div className="mt-10 border border-cream-300 overflow-hidden aspect-[16/9]">
            <img src={post.cover_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="mt-12 prose-blog">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content_md}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
