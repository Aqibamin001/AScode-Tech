import { useEffect, useState } from "react";

/**
 * Full-screen loader that stays visible until:
 *  - the window `load` event has fired (all images / fonts / scripts)
 *  - AND a custom `ascode:hero-ready` event has fired (3D scene mounted)
 *  - OR a hard timeout (4s) so users are never stuck on the loader.
 */
export default function PageLoader() {
  const [ready, setReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let windowLoaded = document.readyState === "complete";
    let heroReady = false;

    const tryFinish = () => {
      if (windowLoaded && heroReady) setReady(true);
    };

    const onLoad = () => {
      windowLoaded = true;
      tryFinish();
    };
    const onHero = () => {
      heroReady = true;
      tryFinish();
    };

    window.addEventListener("load", onLoad);
    window.addEventListener("ascode:hero-ready", onHero);

    // Safety net — never block the site for more than 4s.
    const timeout = window.setTimeout(() => setReady(true), 4000);

    tryFinish();

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("ascode:hero-ready", onHero);
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = window.setTimeout(() => setHidden(true), 600);
    return () => window.clearTimeout(t);
  }, [ready]);

  if (hidden) return null;

  return (
    <div
      aria-hidden={ready}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#f4f2ed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: ready ? 0 : 1,
        transition: "opacity 500ms ease",
        pointerEvents: ready ? "none" : "auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Cabinet Grotesk', 'Inter', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            letterSpacing: "-0.04em",
            color: "#1c1c1c",
            lineHeight: 1,
          }}
        >
          AScode<span style={{ color: "#ff4f00" }}>.</span>
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            width: 160,
            height: 2,
            background: "#d6d1c7",
            position: "relative",
            overflow: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#ff4f00",
              transformOrigin: "left",
              animation: "ascode-loader 1.2s ease-in-out infinite",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "1rem",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(28,28,28,0.6)",
          }}
        >
          Loading
        </div>
      </div>
      <style>{`
        @keyframes ascode-loader {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.01% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
}
