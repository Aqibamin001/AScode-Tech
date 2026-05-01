import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "ascode-cookie-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const v = localStorage.getItem(STORAGE_KEY);
    if (!v) setShow(true);
  }, []);

  if (!show) return null;

  const decide = (val: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, val);
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[110]">
      <div className="border border-cream-300 bg-cream-50 shadow-lg p-5 md:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-block w-2.5 h-2.5 bg-orange-ascode rounded-full shrink-0" />
          <div className="flex-1">
            <p className="font-display text-lg tracking-tight text-ink">We use cookies</p>
            <p className="mt-1 text-sm text-ink/70 leading-relaxed">
              Essential cookies keep the site running. Optional analytics help us improve. See our{" "}
              <Link to="/cookies" className="underline decoration-orange-ascode underline-offset-2">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline decoration-orange-ascode underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => decide("accepted")}
                className="px-4 py-2 bg-ink text-cream-50 rounded-full text-sm font-medium hover:bg-orange-ascode transition-colors"
              >
                Accept all
              </button>
              <button
                onClick={() => decide("declined")}
                className="px-4 py-2 border border-ink/30 text-ink rounded-full text-sm font-medium hover:bg-ink hover:text-cream-50 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
