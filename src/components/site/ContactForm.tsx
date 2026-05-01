import { useState } from "react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "e84e38aa-b2f1-4aaf-9662-f5e73675ebf2";
const RECIPIENT_EMAIL = "aqib.amin@as-code.tech";

const PROJECT_TYPES = [
  "Corporate Website",
  "E-Commerce Store",
  "Portfolio / Landing",
  "Web App / SaaS",
  "SEO & Maintenance",
  "Other",
];

const BUDGET_SUGGESTIONS = [100, 250, 300, 500, 1000, 2000];
const BUDGET_MIN = 100;
const BUDGET_MAX = 2000;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: PROJECT_TYPES[0],
    budget: String(BUDGET_MIN),
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    const budgetNum = Number(form.budget);
    if (!Number.isFinite(budgetNum) || budgetNum < BUDGET_MIN || budgetNum > BUDGET_MAX) {
      toast.error(`Budget must be between $${BUDGET_MIN} and $${BUDGET_MAX}.`);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New project brief from ${form.name.trim()}`,
          from_name: "AScode Tech Website",
          to: RECIPIENT_EMAIL,
          name: form.name.trim().slice(0, 200),
          email: form.email.trim().slice(0, 320),
          project_type: form.project_type,
          budget: `$${budgetNum}`,
          message: form.message.trim().slice(0, 5000),
          replyto: form.email.trim().slice(0, 320),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Submission failed");
      toast.success("Message received. We'll be in touch within 24 hours.");
      setForm({
        name: "",
        email: "",
        project_type: PROJECT_TYPES[0],
        budget: String(BUDGET_MIN),
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-cream-100 py-24 md:py-36 border-t border-cream-300">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink/60">[ 06 — Start a project ]</span>
          </div>
          <h2 className="col-span-12 md:col-span-7 h-editorial text-5xl md:text-7xl lg:text-[5.5rem]">
            Have a brief?
            <br />
            Let's build it<span className="text-orange-ascode">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-16">
          <aside className="col-span-12 md:col-span-4">
            <p className="text-ink/75 text-lg leading-relaxed">
              Tell us about your goals, timeline and any references. We reply within one business day — usually within a few hours.
            </p>
            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-ink/50">Email</dt>
                <dd className="mt-1 text-lg font-display">
                  <a href="mailto:info@as-code.tech" className="hover:text-orange-ascode">info@as-code.tech</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-ink/50">Phone</dt>
                <dd className="mt-1 text-lg font-display">
                  <a href="tel:+923266502223" className="hover:text-orange-ascode">+92 326 6502223</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-ink/50">Studio</dt>
                <dd className="mt-1 text-lg font-display">Lahore, PK · Remote</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-ink/50">Availability</dt>
                <dd className="mt-1 text-lg font-display">2 slots · Q2 intake open</dd>
              </div>
            </dl>
          </aside>

          <form
            onSubmit={submit}
            className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-300 border border-cream-300"
          >
            <Field label="Your name" required>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jane Doe"
                className="w-full bg-cream-50 px-5 py-5 md:py-6 text-lg outline-none focus:bg-cream-100 transition-colors"
                required
                maxLength={200}
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jane@company.com"
                className="w-full bg-cream-50 px-5 py-5 md:py-6 text-lg outline-none focus:bg-cream-100 transition-colors"
                required
                maxLength={320}
              />
            </Field>
            <Field label="Project type">
              <select
                value={form.project_type}
                onChange={(e) => update("project_type", e.target.value)}
                className="w-full bg-cream-50 px-5 py-5 md:py-6 text-lg outline-none focus:bg-cream-100 transition-colors"
              >
                {PROJECT_TYPES.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>
            <Field label={`Budget (USD, $${BUDGET_MIN}–$${BUDGET_MAX})`}>
              <input
                type="number"
                inputMode="numeric"
                min={BUDGET_MIN}
                max={BUDGET_MAX}
                step={50}
                value={form.budget}
                onChange={(e) => update("budget", e.target.value.replace(/[^0-9]/g, "").slice(0, 5))}
                placeholder={`e.g. ${BUDGET_MIN}`}
                className="w-full bg-cream-50 px-5 py-5 md:py-6 text-lg outline-none focus:bg-cream-100 transition-colors"
                required
              />
              <div className="px-5 pb-4 -mt-1 flex flex-wrap gap-2">
                {BUDGET_SUGGESTIONS.map((b) => {
                  const active = Number(form.budget) === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => update("budget", String(b))}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        active
                          ? "bg-ink text-cream-50 border-ink"
                          : "border-ink/20 text-ink/70 hover:border-orange-ascode hover:text-orange-ascode"
                      }`}
                    >
                      ${b}
                    </button>
                  );
                })}
              </div>
            </Field>
            <div className="md:col-span-2 bg-cream-50 p-0">
              <div className="px-5 pt-4">
                <label className="text-xs uppercase tracking-[0.25em] text-ink/55">Tell us about the project *</label>
              </div>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Goals, timeline, references, anything that helps…"
                rows={6}
                className="w-full bg-cream-50 px-5 pb-5 pt-2 text-lg outline-none focus:bg-cream-100 transition-colors resize-none"
                required
                maxLength={5000}
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4 bg-cream-50 px-5 py-5">
              <p className="text-xs text-ink/55 max-w-sm">
                By submitting, you agree to us storing your message so we can reply. No spam. Ever.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 px-7 py-4 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
              >
                {loading ? "Sending…" : "Send brief"}
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
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
