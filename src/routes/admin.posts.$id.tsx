import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import PostEditor from "@/components/admin/PostEditor";

export const Route = createFileRoute("/admin/posts/$id")({
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", params.id)
      .maybeSingle();
    if (error || !data) throw notFound();
    return { post: data };
  },
  component: EditPost,
  notFoundComponent: () => (
    <div>
      <p>Post not found.</p>
      <Link to="/admin/posts" className="underline">← Back</Link>
    </div>
  ),
});

function EditPost() {
  const { post } = Route.useLoaderData();
  return (
    <div>
      <Link to="/admin/posts" className="text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-orange-ascode">
        ← All posts
      </Link>
      <h1 className="mt-4 h-editorial text-4xl md:text-5xl">Edit post<span className="text-orange-ascode">.</span></h1>
      <div className="mt-10">
        <PostEditor
          submitLabel="Save changes"
          initial={{
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt ?? "",
            cover_url: post.cover_url ?? "",
            content_md: post.content_md,
            published: post.published,
          }}
          onSave={async (v) => {
            const wasPublished = post.published;
            const { error } = await supabase
              .from("posts")
              .update({
                title: v.title.trim(),
                slug: v.slug.trim(),
                excerpt: v.excerpt.trim() || null,
                cover_url: v.cover_url.trim() || null,
                content_md: v.content_md,
                published: v.published,
                published_at:
                  v.published && !wasPublished
                    ? new Date().toISOString()
                    : v.published
                    ? post.published_at
                    : null,
              })
              .eq("id", post.id);
            if (error) toast.error(error.message);
            else toast.success("Saved");
          }}
        />
      </div>
    </div>
  );
}
