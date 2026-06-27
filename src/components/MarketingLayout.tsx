import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function MarketingHeader() {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSignedIn(!!data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_, s) => setSignedIn(!!s));
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-12">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</Link>
          <Link to="/pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</Link>
          <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
          <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          {signedIn ? (
            <Button asChild size="sm"><Link to="/dashboard">Dashboard</Link></Button>
          ) : (
            <>
              <Button asChild size="sm" variant="ghost"><Link to="/auth">Sign in</Link></Button>
              <Button asChild size="sm"><Link to="/auth">Get started</Link></Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="https://as-code.tech" target="_blank" rel="noreferrer" className="hover:text-white">ASCode Tech</a></li>
              <li><Link to="/auth" className="hover:text-white">Sign in</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">Powered by</p>
            <p className="mt-4 text-sm text-white/80">
              Designed & Developed by{" "}
              <a href="https://as-code.tech" target="_blank" rel="noreferrer" className="font-medium text-white underline-offset-4 hover:underline">ASCode Tech</a>
            </p>
          </div>
        </div>
        <div className="mt-20">
          <p className="select-none font-display text-[18vw] font-bold leading-none tracking-tighter text-white/95">
            BizPlan AI
          </p>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} BizPlan AI — Built by ASCode Tech.</p>
          <p className="font-mono uppercase tracking-[0.2em]">as-code.tech</p>
        </div>
      </div>
    </footer>
  );
}
