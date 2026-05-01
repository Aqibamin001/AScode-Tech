import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type Msg = {
  id: string;
  name: string;
  email: string;
  project_type: string | null;
  budget: string | null;
  message: string;
  created_at: string;
};

export const Route = createFileRoute("/admin/messages")({
  component: Messages,
});

function Messages() {
  const [items, setItems] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      load();
    }
  };

  return (
    <div>
      <h1 className="h-editorial text-4xl md:text-5xl">Messages<span className="text-orange-ascode">.</span></h1>
      <p className="mt-2 text-ink/60">Submissions from the contact form.</p>

      <div className="mt-10 space-y-4">
        {loading ? (
          <p className="text-ink/60">Loading…</p>
        ) : items.length === 0 ? (
          <p className="text-ink/60">No messages yet.</p>
        ) : (
          items.map((m) => (
            <div key={m.id} className="border border-cream-300 bg-cream-50 p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-display text-xl">
                    {m.name}{" "}
                    <a
                      href={`mailto:${m.email}`}
                      className="text-sm font-sans text-orange-ascode underline underline-offset-2"
                    >
                      {m.email}
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {m.project_type ?? "—"} · {m.budget ?? "—"} ·{" "}
                    {new Date(m.created_at).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => remove(m.id)}
                  className="text-sm text-destructive hover:underline"
                >
                  Delete
                </button>
              </div>
              <p className="mt-4 text-ink/80 whitespace-pre-wrap leading-relaxed">{m.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
