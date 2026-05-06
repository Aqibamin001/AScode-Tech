import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

const ADMIN_EMAIL = "aqibamin0099@gmail.com";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin sign in — AScode Tech" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"choose" | "otp">("choose");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"request" | "verify">("request");
  const [loading, setLoading] = useState(false);

  // If already signed in as admin, go straight to /admin.
  // If signed in as someone else (e.g. Google account that isn't admin),
  // sign them out and show the access denied toast.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      const userEmail = data.session?.user.email?.toLowerCase();
      if (!userEmail) return;
      if (userEmail === ADMIN_EMAIL) {
        navigate({ to: "/admin" });
      } else {
        await supabase.auth.signOut();
        toast.error("Access denied. Only the site admin can sign in.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin + "/login",
        extraParams: { prompt: "select_account", login_hint: ADMIN_EMAIL },
      });
      if (result.error) {
        toast.error(result.error.message ?? "Google sign in failed");
        return;
      }
      if (result.redirected) return;
      // Token flow: session is set. Verify email allowlist.
      const { data } = await supabase.auth.getSession();
      const userEmail = data.session?.user.email?.toLowerCase();
      if (userEmail !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        toast.error("Wrong email. Only the admin account can sign in.");
        return;
      }
      toast.success("Welcome back.");
      navigate({ to: "/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Google sign in failed");
    } finally {
      setLoading(false);
    }
  };

  const requestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const normalized = email.trim().toLowerCase();
      if (normalized !== ADMIN_EMAIL) {
        toast.error("Access denied. This email is not authorized.");
        return;
      }
      const { error } = await supabase.auth.signInWithOtp({
        email: normalized,
        options: { shouldCreateUser: false },
      });
      if (error) throw error;
      toast.success("Verification code sent. Check your inbox.");
      setStep("verify");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const normalized = email.trim().toLowerCase();
      const { error } = await supabase.auth.verifyOtp({
        email: normalized,
        token: code.trim(),
        type: "email",
      });
      if (error) throw error;
      const { data } = await supabase.auth.getSession();
      const userEmail = data.session?.user.email?.toLowerCase();
      if (userEmail !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        toast.error("Access denied.");
        return;
      }
      toast.success("Welcome back.");
      navigate({ to: "/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md border border-cream-300 bg-cream-50 p-8 md:p-10">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.25em] text-ink/60 hover:text-orange-ascode"
        >
          ← Back to site
        </Link>
        <h1 className="mt-6 h-editorial text-4xl">
          Admin sign in<span className="text-orange-ascode">.</span>
        </h1>
        <p className="mt-2 text-sm text-ink/60">Authorized personnel only.</p>

        {mode === "choose" && (
          <div className="mt-8 space-y-3">
            <button
              onClick={signInWithGoogle}
              disabled={loading}
              className="w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#fff" d="M21.35 11.1H12v3.2h5.35c-.23 1.4-1.66 4.1-5.35 4.1-3.22 0-5.85-2.66-5.85-5.95s2.63-5.95 5.85-5.95c1.83 0 3.06.78 3.76 1.45l2.57-2.48C16.7 3.93 14.55 3 12 3 6.98 3 3 6.98 3 12s3.98 9 9 9c5.2 0 8.65-3.66 8.65-8.8 0-.6-.07-1.05-.15-1.5z"/>
              </svg>
              {loading ? "Please wait…" : "Continue with Google"}
            </button>
            <button
              onClick={() => setMode("otp")}
              disabled={loading}
              className="w-full px-6 py-3 border border-cream-300 text-ink rounded-full text-sm font-medium hover:border-orange-ascode hover:text-orange-ascode disabled:opacity-60 transition-colors"
            >
              Sign in with email code
            </button>
          </div>
        )}

        {mode === "otp" && step === "request" && (
          <form onSubmit={requestCode} className="mt-8 space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Admin email</span>
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
              {loading ? "Sending…" : "Send verification code"}
            </button>
            <button
              type="button"
              onClick={() => setMode("choose")}
              className="w-full text-xs uppercase tracking-[0.2em] text-ink/55 hover:text-orange-ascode"
            >
              ← Back
            </button>
          </form>
        )}

        {mode === "otp" && step === "verify" && (
          <form onSubmit={verifyCode} className="mt-8 space-y-4">
            <p className="text-sm text-ink/60">
              We sent a 6-digit code to <strong>{email}</strong>.
            </p>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Verification code</span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                required
                minLength={6}
                maxLength={6}
                autoComplete="one-time-code"
                className="mt-1 w-full bg-cream-100 px-4 py-3 outline-none focus:bg-cream-200 transition-colors border border-cream-300 tracking-[0.5em] text-center text-lg"
              />
            </label>
            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
            >
              {loading ? "Verifying…" : "Verify & sign in"}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("request");
                setCode("");
              }}
              className="w-full text-xs uppercase tracking-[0.2em] text-ink/55 hover:text-orange-ascode"
            >
              ← Use a different email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
