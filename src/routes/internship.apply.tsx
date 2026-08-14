import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, Wrench, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/internship/apply")({
  head: () => ({
    meta: [
      { title: "Apply — 3-Month Course + Internship — AScode Tech" },
      {
        name: "description",
        content: "Apply for AScode Tech's 3-month online course + internship program.",
      },
      { property: "og:title", content: "Apply — 3-Month Course + Internship — AScode Tech" },
      { property: "og:url", content: "https://as-code.tech/internship/apply" },
    ],
    links: [{ rel: "canonical", href: "https://as-code.tech/internship/apply" }],
  }),
  component: ApplyPage,
});

const TRACKS = ["WordPress Development", "Python Development", "SEO"];

function ApplyPage() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    track: TRACKS[0],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name, email and phone/WhatsApp number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.from("internship_applications").insert({
        full_name: form.full_name.trim().slice(0, 200),
        email: form.email.trim().slice(0, 320),
        phone: form.phone.trim().slice(0, 40),
        city: form.city.trim().slice(0, 120) || null,
        track: form.track,
        message: form.message.trim().slice(0, 3000) || null,
      });
      if (error) throw error;
      setSubmitted(true);
      toast.success("Application received!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="bg-cream-100 min-h-screen pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-10 h-10 text-orange-ascode mx-auto" />
          <h1 className="mt-5 h-editorial text-4xl md:text-6xl">
            Application received<span className="text-orange-ascode">.</span>
          </h1>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Thanks, {form.full_name.split(" ")[0]}! We've got your application for{" "}
            <span className="text-ink font-medium">{form.track}</span>. Our team will reach out
            with next steps — including how to confirm your seat with the Rs. 1,000 registration
            fee before <span className="text-ink font-medium">18 August 2026</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923266502223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-ascode text-cream-50 text-sm font-medium hover:bg-ink transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message us on WhatsApp
            </a>
            <Link to="/internship" className="inline-flex items-center gap-1.5 text-sm font-medium link-underline">
              ← Back to program details
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cream-100 min-h-screen pt-28 pb-24 md:pt-36 md:pb-36">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink/60">
            <Wrench className="w-3.5 h-3.5 text-orange-ascode" />
            [ Application form ]
          </span>
          <h1 className="mt-5 h-editorial text-4xl md:text-6xl">
            Apply for the program<span className="text-orange-ascode">.</span>
          </h1>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Fill this in and our team will contact you with next steps. Seats close{" "}
            <span className="text-ink font-medium">18 August 2026</span>.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream-300 border border-cream-300"
        >
          <Field label="Full name" required>
            <input
              type="text"
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              placeholder="Jane Doe"
              className="w-full bg-cream-50 px-5 py-5 text-lg outline-none focus:bg-cream-100 transition-colors"
              required
              maxLength={200}
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@example.com"
              className="w-full bg-cream-50 px-5 py-5 text-lg outline-none focus:bg-cream-100 transition-colors"
              required
              maxLength={320}
            />
          </Field>
          <Field label="Phone / WhatsApp" required>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="03XX-XXXXXXX"
              className="w-full bg-cream-50 px-5 py-5 text-lg outline-none focus:bg-cream-100 transition-colors"
              required
              maxLength={40}
            />
          </Field>
          <Field label="City">
            <input
              type="text"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder="Lahore"
              className="w-full bg-cream-50 px-5 py-5 text-lg outline-none focus:bg-cream-100 transition-colors"
              maxLength={120}
            />
          </Field>
          <div className="sm:col-span-2 bg-cream-50">
            <div className="px-5 pt-4">
              <span className="text-xs uppercase tracking-[0.25em] text-ink/55">Preferred track *</span>
            </div>
            <select
              value={form.track}
              onChange={(e) => update("track", e.target.value)}
              className="w-full bg-cream-50 px-5 py-5 text-lg outline-none focus:bg-cream-100 transition-colors"
            >
              {TRACKS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 bg-cream-50">
            <div className="px-5 pt-4">
              <label className="text-xs uppercase tracking-[0.25em] text-ink/55">
                Anything you'd like us to know?
              </label>
            </div>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Your background, goals, questions…"
              rows={5}
              className="w-full bg-cream-50 px-5 pb-5 pt-2 text-lg outline-none focus:bg-cream-100 transition-colors resize-none"
              maxLength={3000}
            />
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-cream-50 px-5 py-5">
            <p className="text-xs text-ink/55 max-w-sm">
              By submitting, you agree to us storing your details so we can process your
              application.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
            >
              {loading ? "Submitting…" : "Submit application"}
              <span aria-hidden>→</span>
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink/60">Prefer WhatsApp? Message us directly instead.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923266502223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/20 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              0326-6502223
            </a>
            <a
              href="https://wa.me/923116576844"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/20 text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              0311-6576844
            </a>
          </div>
          <Link to="/internship" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium link-underline">
            ← Back to program details
          </Link>
        </div>
      </div>
    </main>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block bg-cream-50">
      <div className="px-5 pt-4">
        <span className="text-xs uppercase tracking-[0.25em] text-ink/55">
          {label}
          {required ? " *" : ""}
        </span>
      </div>
      {children}
    </label>
  );
}
