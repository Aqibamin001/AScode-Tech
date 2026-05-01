import { createElement as h, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh, Group } from "three";

const HERO_3D_COLORS = {
  orange: "#ff4f00",
  orangeGlow: "#ff7a1a",
  ink: "#141414",
  cream: "#eae6df",
};

function Blob({ color = HERO_3D_COLORS.orange, scale = 1, speed = 1 }: { color?: string; scale?: number; speed?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.25 * speed;
    ref.current.rotation.y = t * 0.35 * speed;
  });
  return h(
    Float,
    { speed: 1.4, rotationIntensity: 0.6, floatIntensity: 1.2 },
    h(
      "mesh" as any,
      { ref, scale },
      h("icosahedronGeometry" as any, { args: [1.2, 12] }),
      h(MeshDistortMaterial, {
        color,
        distort: 0.38,
        speed: 2,
        roughness: 0.32,
        metalness: 0.02,
        emissive: HERO_3D_COLORS.orange,
        emissiveIntensity: 0.16,
      }),
    ),
  );
}

function Torus() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.4;
    ref.current.rotation.y = t * 0.25;
  });
  return h(
    Float,
    { speed: 1.1, rotationIntensity: 0.3, floatIntensity: 0.9 },
    h(
      "mesh" as any,
      { ref },
      h("torusKnotGeometry" as any, { args: [0.7, 0.22, 180, 24] }),
      h("meshStandardMaterial" as any, {
        color: HERO_3D_COLORS.ink,
        roughness: 0.46,
        metalness: 0.16,
        emissive: "#050505",
        emissiveIntensity: 0.08,
      }),
    ),
  );
}

function Sphere() {
  return h(
    Float,
    { speed: 0.9, rotationIntensity: 0.2, floatIntensity: 1.4 },
    h(
      "mesh" as any,
      {},
      h("sphereGeometry" as any, { args: [0.55, 48, 48] }),
      h("meshStandardMaterial" as any, {
        color: HERO_3D_COLORS.cream,
        roughness: 0.68,
        metalness: 0.03,
        emissive: "#f4f2ed",
        emissiveIntensity: 0.12,
      }),
    ),
  );
}

/**
 * Viewport-aware layout. We read the live R3F viewport (in world units at z=0)
 * and re-layout the three objects so they always frame the canvas nicely:
 *  - phones: stacked, smaller, blob centered
 *  - tablets/desktop: classic triangular composition
 */
function ResponsiveLayout() {
  const groupRef = useRef<Group>(null);
  const { viewport, camera } = useThree();
  const w = viewport.width;
  const isPhone = w < 6; // small viewport in three.js world units
  const isTablet = w >= 6 && w < 9;

  // Pull camera back on narrow viewports so blobs never get clipped.
  useEffect(() => {
    if (isPhone) camera.position.z = 6.4;
    else if (isTablet) camera.position.z = 5.8;
    else camera.position.z = 5.2;
    camera.updateProjectionMatrix();
  }, [isPhone, isTablet, camera]);

  // Spread / scale based on viewport
  const spreadX = isPhone ? 1.8 : isTablet ? 2.3 : 2.7;
  const spreadY = isPhone ? 1.4 : isTablet ? 1.0 : 1.2;
  const blobScale = isPhone ? 0.85 : isTablet ? 1.0 : 1.15;
  const sideScale = isPhone ? 0.65 : isTablet ? 0.85 : 1;

  return h(
    "group" as any,
    { ref: groupRef },
    h(
      "group" as any,
      { position: [0, isPhone ? 0.2 : 0, 0] },
      h(Blob, { scale: blobScale }),
    ),
    h(
      "group" as any,
      { position: [spreadX, -spreadY * 0.7, -0.5], scale: sideScale },
      h(Torus),
    ),
    h(
      "group" as any,
      { position: [-spreadX, spreadY, -0.3], scale: sideScale },
      h(Sphere),
    ),
  );
}

function Scene() {
  return h(
    Suspense,
    { fallback: null },
    h("color" as any, { attach: "background", args: ["#F4F2ED"] }),
    h("ambientLight" as any, { intensity: 0.92 }),
    h("directionalLight" as any, { position: [4, 5, 6], intensity: 1.2, color: "#fff6ec" }),
    h("directionalLight" as any, { position: [-5, -2, 3], intensity: 0.35, color: HERO_3D_COLORS.orangeGlow }),
    h(ResponsiveLayout),
  );
}

export default function Hero3D() {
  // Detect coarse pointer / small screens to lower DPR for perf.
  const [dprMax, setDprMax] = useState(1.5);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const small = window.matchMedia("(max-width: 640px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setDprMax(small || coarse ? 1.25 : 1.5);

    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("ascode:hero-ready"));
    });
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, dprMax]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
