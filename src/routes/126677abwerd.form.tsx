import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Submission = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  city: string | null;
  track: string;
  message: string | null;
  created_at: string;
};

const STORAGE_KEY = "ascode_form_pw";

export const Route = createFileRoute("/126677abwerd/form")({
  head: () => ({
    meta: [
      { title: "Submissions" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SecretFormPage,
});

async function fetchSubmissions(password: string): Promise<Submission[]> {
  const res = await fetch("/api/public/internship-submissions", {
    headers: { "x-form-password": password },
  });
  const data = await res.json();
  if (!res.ok || !data.ok) throw new Error(data.error ?? "Failed to load submissions.");
  return data.items as Submission[];
}

function SecretFormPage() {
  const [password, setPassword] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [checking, setChecking] = useState(false);
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);

  // Restore an already-verified password for this browser session only.
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) setPassword(saved);
  }, []);

  useEffect(() => {
    if (password === null) return;
    load(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  const load = async (pw: string) => {
    setLoading(true);
    try {
      const list = await fetchSubmissions(pw);
      setItems(list);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to load submissions.");
      if (err instanceof Error && err.message.includes("Invalid password")) {
        sessionStorage.removeItem(STORAGE_KEY);
        setPassword(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    try {
      await fetchSubmissions(input);
      sessionStorage.setItem(STORAGE_KEY, input);
      setPassword(input);
      setInput("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Wrong password.");
    } finally {
      setChecking(false);
    }
  };

  const lock = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setPassword(null);
    setItems([]);
  };

  const remove = async (id: string) => {
    if (!password) return;
    if (!confirm("Delete this application? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/public/internship-submissions?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: { "x-form-password": password },
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Delete failed.");
      toast.success("Deleted");
      setItems((cur) => cur.filter((i) => i.id !== id));
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed.");
    }
  };

  if (password === null) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6 py-12">
        <form
          onSubmit={unlock}
          className="w-full max-w-sm border border-cream-300 bg-cream-50 p-8"
        >
          <h1 className="h-editorial text-3xl">
            Protected<span className="text-orange-ascode">.</span>
          </h1>
          <p className="mt-2 text-sm text-ink/60">Enter the password to view submissions.</p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            required
            placeholder="Password"
            className="mt-6 w-full bg-cream-100 px-4 py-3 outline-none focus:bg-cream-200 transition-colors border border-cream-300"
          />
          <button
            type="submit"
            disabled={checking || !input}
            className="mt-4 w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
          >
            {checking ? "Checking…" : "Unlock"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100 px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="h-editorial text-4xl">
              Submissions<span className="text-orange-ascode">.</span>
            </h1>
            <p className="mt-2 text-ink/60">Internship / course applications.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => load(password)}
              className="text-sm text-ink/60 hover:text-orange-ascode"
            >
              Refresh
            </button>
            <button
              onClick={lock}
              className="text-sm text-ink/60 hover:text-orange-ascode"
            >
              Lock →
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {loading ? (
            <p className="text-ink/60">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-ink/60">No applications yet.</p>
          ) : (
            items.map((m) => (
              <div key={m.id} className="border border-cream-300 bg-cream-50 p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-display text-xl">
                      {m.full_name}{" "}
                      <a
                        href={`mailto:${m.email}`}
                        className="text-sm font-sans text-orange-ascode underline underline-offset-2"
                      >
                        {m.email}
                      </a>
                    </p>
                    <p className="mt-1 text-xs text-ink/60">
                      {m.track} · {m.phone} · {m.city ?? "—"} ·{" "}
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
                {m.message && (
                  <p className="mt-4 text-ink/80 whitespace-pre-wrap leading-relaxed">{m.message}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
