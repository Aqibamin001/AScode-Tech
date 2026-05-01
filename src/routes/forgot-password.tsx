import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ADMIN_EMAIL = "aqibamin0099@gmail.com";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — AScode Tech" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const normalizedEmail = email.trim().toLowerCase();

      // Only attempt the reset for the actual admin to avoid unnecessary API
      // calls, but always show the same generic message to avoid revealing
      // which email is the admin.
      if (normalizedEmail === ADMIN_EMAIL) {
        const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
      }
      setSent(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not send reset email";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md border border-cream-300 bg-cream-50 p-8 md:p-10">
        <Link
          to="/login"
          className="text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-orange-ascode"
        >
          ← Back to sign in
        </Link>
        <h1 className="mt-6 h-editorial text-4xl">
          Forgot password<span className="text-orange-ascode">.</span>
        </h1>

        {sent ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-ink/70">
              If an account exists for that email, we've sent a password reset link.
              Check your inbox (and spam folder) and follow the link to set a new password.
            </p>
            <Link
              to="/login"
              className="inline-flex px-5 py-2.5 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-ink/60">
              Enter your admin email and we'll send you a reset link.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  spellCheck={false}
                  className="mt-1 w-full bg-cream-100 px-4 py-3 outline-none focus:bg-cream-200 transition-colors border border-cream-300"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
              >
                {loading ? "Sending…" : "Send reset link"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
