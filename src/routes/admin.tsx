import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [state, setState] = useState<"loading" | "ok" | "denied">("loading");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/login" });
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sess.session.user.id);
      const isAdmin = (roles ?? []).some((r) => r.role === "admin");
      if (cancelled) return;
      setState(isAdmin ? "ok" : "denied");
    })();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (state === "loading") {
    return <div className="min-h-screen bg-cream-100 flex items-center justify-center text-ink/60">Loading…</div>;
  }
  if (state === "denied") {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="h-editorial text-5xl">Access denied<span className="text-orange-ascode">.</span></h1>
          <p className="mt-4 text-ink/70">Your account doesn't have admin access. Ask the site owner to grant you the admin role.</p>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/login" });
            }}
            className="mt-6 inline-flex px-5 py-2.5 rounded-full bg-ink text-cream-50 text-sm font-medium hover:bg-orange-ascode"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={`block px-4 py-2 rounded text-sm transition-colors ${
        path === to || (to !== "/admin" && path.startsWith(to))
          ? "bg-ink text-cream-50"
          : "text-ink hover:bg-cream-200"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col md:flex-row">
      <aside className="md:w-64 md:min-h-screen border-b md:border-b-0 md:border-r border-cream-300 bg-cream-50 p-6 flex md:flex-col gap-4 md:gap-2">
        <Link to="/" className="hidden md:flex items-center gap-2 mb-6">
          <span className="inline-block w-2.5 h-2.5 bg-orange-ascode rounded-full" />
          <span className="font-display font-black text-lg">AScode<span className="text-orange-ascode">.</span>Tech</span>
        </Link>
        <nav className="flex md:flex-col gap-1 flex-1 overflow-x-auto">
          {link("/admin", "Dashboard")}
          {link("/admin/posts", "Posts")}
          {link("/admin/posts/new", "New post")}
          {link("/admin/messages", "Messages")}
        </nav>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            navigate({ to: "/login" });
          }}
          className="text-sm text-ink/60 hover:text-orange-ascode text-left px-4 py-2"
        >
          Sign out →
        </button>
      </aside>
      <div className="flex-1 p-6 md:p-10">
        <Outlet />
      </div>
    </div>
  );
}
