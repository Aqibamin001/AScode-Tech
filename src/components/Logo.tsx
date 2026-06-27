import { Link } from "@tanstack/react-router";
import { Sparkle } from "@phosphor-icons/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform group-hover:scale-105">
        <Sparkle weight="fill" className="h-4 w-4 text-[var(--color-accent)]" />
      </span>
      <span className="font-display text-base font-bold tracking-tight text-foreground">
        BizPlan <span className="text-[var(--color-accent)]">AI</span>
      </span>
    </Link>
  );
}
