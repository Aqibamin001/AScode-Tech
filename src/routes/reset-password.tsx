import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set new password — AScode Tech" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [recoverySession, setRecoverySession] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Supabase parses the recovery hash and emits PASSWORD_RECOVERY.
    // We wait for that event (or an existing session) before showing the form.
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || (event === "SIGNED_IN" && session)) {
        setRecoverySession(true);
        setReady(true);
      }
    });

    // Also probe an existing session in case the listener fired before mount.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setRecoverySession(true);
      setReady(true);
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords don't match.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      // Invalidate any other active sessions for safety.
      await supabase.auth.signOut({ scope: "others" }).catch(() => {});
      toast.success("Password updated. Please sign in with your new password.");
      await supabase.auth.signOut();
      navigate({ to: "/login" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not update password";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md border border-cream-300 bg-cream-50 p-8 md:p-10">
        <h1 className="mt-2 h-editorial text-4xl">
          Set new password<span className="text-orange-ascode">.</span>
        </h1>

        {!ready ? (
          <p className="mt-6 text-sm text-ink/60">Verifying reset link…</p>
        ) : !recoverySession ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-ink/70">
              This reset link is invalid or has expired. Please request a new one.
            </p>
            <Link
              to="/forgot-password"
              className="inline-flex px-5 py-2.5 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode transition-colors"
            >
              Request new link
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-ink/60">
              Choose a strong password (at least 8 characters).
            </p>
            <form onSubmit={submit} className="mt-8 space-y-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/55">New password</span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="mt-1 w-full bg-cream-100 px-4 py-3 pr-20 outline-none focus:bg-cream-200 transition-colors border border-cream-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-ink/55 hover:text-orange-ascode px-2 py-1"
                    tabIndex={-1}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Confirm password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="mt-1 w-full bg-cream-100 px-4 py-3 outline-none focus:bg-cream-200 transition-colors border border-cream-300"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
              >
                {loading ? "Updating…" : "Update password"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
