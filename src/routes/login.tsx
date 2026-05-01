import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user.email?.toLowerCase() === ADMIN_EMAIL) {
        navigate({ to: "/admin" });
      }
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const normalizedEmail = email.trim().toLowerCase();

      // Single-admin allowlist — fail closed before hitting the auth server.
      if (normalizedEmail !== ADMIN_EMAIL) {
        toast.error("Access denied. This email is not authorized.");
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });
      if (error) throw error;
      toast.success("Welcome back.");
      navigate({ to: "/admin" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Sign in failed";
      toast.error(message);
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

        <form onSubmit={submit} className="mt-8 space-y-4" autoComplete="on">
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
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-ink/55">Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="current-password"
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
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode disabled:opacity-60 transition-colors"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-sm">
          <Link
            to="/forgot-password"
            className="text-ink/60 hover:text-orange-ascode underline underline-offset-2"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
