import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import PostEditor from "@/components/admin/PostEditor";

export const Route = createFileRoute("/admin/posts/new")({
  component: NewPost,
});

function NewPost() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h-editorial text-4xl md:text-5xl">New post<span className="text-orange-ascode">.</span></h1>
      <p className="mt-2 text-ink/60">Write, preview, publish.</p>
      <div className="mt-10">
        <PostEditor
          submitLabel="Create post"
          onSave={async (v) => {
            const { data: sess } = await supabase.auth.getSession();
            const { data, error } = await supabase
              .from("posts")
              .insert({
                title: v.title.trim(),
                slug: v.slug.trim(),
                excerpt: v.excerpt.trim() || null,
                cover_url: v.cover_url.trim() || null,
                content_md: v.content_md,
                published: v.published,
                published_at: v.published ? new Date().toISOString() : null,
                author_id: sess.session?.user.id ?? null,
              })
              .select("id")
              .single();
            if (error) {
              toast.error(error.message);
              return;
            }
            toast.success("Post created");
            navigate({ to: "/admin/posts/$id", params: { id: data.id } });
          }}
        />
      </div>
    </div>
  );
}
