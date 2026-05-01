import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  slug: string;
  title: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
};

export const Route = createFileRoute("/admin/posts/")({
  component: PostsList,
});

function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("posts")
      .select("id, slug, title, published, published_at, created_at")
      .order("created_at", { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this post permanently?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      load();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h1 className="h-editorial text-4xl md:text-5xl">Posts<span className="text-orange-ascode">.</span></h1>
        <Link
          to="/admin/posts/new"
          className="px-5 py-2.5 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
        >
          + New post
        </Link>
      </div>

      <div className="mt-10 border border-cream-300 bg-cream-50">
        {loading ? (
          <p className="p-6 text-ink/60">Loading…</p>
        ) : posts.length === 0 ? (
          <p className="p-6 text-ink/60">No posts yet. Create your first one.</p>
        ) : (
          <ul className="divide-y divide-cream-300">
            {posts.map((p) => (
              <li key={p.id} className="p-5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-display text-xl">{p.title}</p>
                  <p className="text-xs text-ink/60 mt-1">/{p.slug}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      p.published ? "bg-orange-ascode/15 text-orange-ascode" : "bg-cream-200 text-ink/60"
                    }`}
                  >
                    {p.published ? "Published" : "Draft"}
                  </span>
                  <Link
                    to="/admin/posts/$id"
                    params={{ id: p.id }}
                    className="text-sm underline decoration-orange-ascode underline-offset-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => remove(p.id)}
                    className="text-sm text-destructive hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
