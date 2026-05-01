import { useEffect, useState } from "react";
import slugify from "slugify";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type Values = {
  title: string;
  slug: string;
  excerpt: string;
  cover_url: string;
  content_md: string;
  published: boolean;
};

export default function PostEditor({
  initial,
  onSave,
  submitLabel = "Save",
}: {
  initial?: Partial<Values>;
  onSave: (values: Values) => Promise<void>;
  submitLabel?: string;
}) {
  const [v, setV] = useState<Values>({
    title: initial?.title ?? "",
    slug: initial?.slug ?? "",
    excerpt: initial?.excerpt ?? "",
    cover_url: initial?.cover_url ?? "",
    content_md: initial?.content_md ?? "",
    published: initial?.published ?? false,
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [slugDirty, setSlugDirty] = useState(!!initial?.slug);

  useEffect(() => {
    if (!slugDirty && v.title) {
      setV((s) => ({ ...s, slug: slugify(v.title, { lower: true, strict: true }) }));
    }
  }, [v.title, slugDirty]);

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("blog-covers").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) throw error;
      const { data } = supabase.storage.from("blog-covers").getPublicUrl(path);
      setV((s) => ({ ...s, cover_url: data.publicUrl }));
      toast.success("Cover uploaded");
    } catch (err: any) {
      toast.error(err?.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.title.trim() || !v.slug.trim()) {
      toast.error("Title and slug are required.");
      return;
    }
    setSaving(true);
    try {
      await onSave(v);
    } finally {
      setSaving(false);
    }
  };

  const inputCls =
    "mt-1 w-full bg-cream-100 px-4 py-3 outline-none focus:bg-cream-200 transition-colors border border-cream-300";

  return (
    <form onSubmit={submit} className="space-y-5 max-w-3xl">
      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Title</span>
        <input
          className={inputCls}
          value={v.title}
          onChange={(e) => setV({ ...v, title: e.target.value })}
          required
          maxLength={200}
        />
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Slug (URL)</span>
        <input
          className={inputCls + " font-mono text-sm"}
          value={v.slug}
          onChange={(e) => {
            setSlugDirty(true);
            setV({ ...v, slug: slugify(e.target.value, { lower: true, strict: true }) });
          }}
          required
        />
        <span className="text-xs text-ink/50 mt-1 block">/blog/{v.slug || "your-post-slug"}</span>
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Excerpt</span>
        <textarea
          className={inputCls + " resize-none"}
          rows={2}
          value={v.excerpt}
          onChange={(e) => setV({ ...v, excerpt: e.target.value })}
          maxLength={300}
        />
      </label>

      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Cover image</span>
        <div className="mt-1 flex items-start gap-4">
          {v.cover_url && (
            <img src={v.cover_url} alt="cover" className="w-32 h-24 object-cover border border-cream-300" />
          )}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) upload(f);
              }}
              disabled={uploading}
              className="block text-sm"
            />
            {uploading && <p className="text-xs text-ink/60 mt-1">Uploading…</p>}
            <input
              className={inputCls + " text-xs mt-2"}
              value={v.cover_url}
              onChange={(e) => setV({ ...v, cover_url: e.target.value })}
              placeholder="…or paste an image URL"
            />
          </div>
        </div>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/55">
          Content (Markdown)
        </span>
        <textarea
          className={inputCls + " font-mono text-sm resize-y"}
          rows={20}
          value={v.content_md}
          onChange={(e) => setV({ ...v, content_md: e.target.value })}
          placeholder={"# Heading\n\nWrite your post in **markdown**.\n\n- Bullet point\n- Another one\n\n[Link](https://example.com)"}
        />
        <span className="text-xs text-ink/50 mt-1 block">
          Supports Markdown: # headings, **bold**, [links](url), images, code blocks.
        </span>
      </label>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={v.published}
          onChange={(e) => setV({ ...v, published: e.target.checked })}
          className="w-5 h-5 accent-orange-ascode"
        />
        <span className="text-sm">
          <span className="font-semibold">Published</span>
          <span className="text-ink/60"> · visible on /blog</span>
        </span>
      </label>

      <div className="pt-4 flex gap-3">
        <button
          type="submit"
          disabled={saving || uploading}
          className="px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}
