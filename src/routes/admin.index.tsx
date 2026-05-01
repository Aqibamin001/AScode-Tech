import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const [stats, setStats] = useState({ posts: 0, published: 0, messages: 0 });

  useEffect(() => {
    (async () => {
      const [{ count: posts }, { count: published }, { count: messages }] = await Promise.all([
        supabase.from("posts").select("*", { count: "exact", head: true }),
        supabase.from("posts").select("*", { count: "exact", head: true }).eq("published", true),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }),
      ]);
      setStats({ posts: posts ?? 0, published: published ?? 0, messages: messages ?? 0 });
    })();
  }, []);

  const Card = ({ label, value, to }: { label: string; value: number; to: string }) => (
    <Link to={to} className="block border border-cream-300 bg-cream-50 p-8 hover:border-orange-ascode transition-colors">
      <p className="text-xs uppercase tracking-[0.25em] text-ink/60">{label}</p>
      <p className="mt-3 h-editorial text-5xl text-ink">{value}</p>
    </Link>
  );

  return (
    <div>
      <h1 className="h-editorial text-4xl md:text-5xl">Dashboard<span className="text-orange-ascode">.</span></h1>
      <p className="mt-2 text-ink/60">Welcome back. Here's what's happening.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card label="Total posts" value={stats.posts} to="/admin/posts" />
        <Card label="Published" value={stats.published} to="/admin/posts" />
        <Card label="Messages" value={stats.messages} to="/admin/messages" />
      </div>
    </div>
  );
}
