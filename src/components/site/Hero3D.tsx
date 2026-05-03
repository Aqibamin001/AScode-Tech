import { createElement as h, Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh, Group } from "three";

const HERO_3D_COLORS = {
  orange: "#FF4F00",
  ink: "#1C1C1C",
  cream100: "#F4F2ED",
  cream200: "#EAE6DF",
};

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.25;
    ref.current.rotation.y = t * 0.35;
  });
  return h(
    Float,
    { speed: 1.4, rotationIntensity: 0.6, floatIntensity: 1.2 },
    h(
      "mesh" as any,
      { ref, scale: 1.15 },
      h("icosahedronGeometry" as any, { args: [1.2, 12] }),
      h(MeshDistortMaterial, {
        color: HERO_3D_COLORS.orange,
        distort: 0.38,
        speed: 2,
        roughness: 0.15,
        metalness: 0.1,
      }),
    ),
  );
}

function Torus() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.5;
    ref.current.rotation.y = t * 0.35;
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
        roughness: 0.4,
        metalness: 0.2,
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
      h("sphereGeometry" as any, { args: [0.55, 64, 64] }),
      h("meshStandardMaterial" as any, {
        color: HERO_3D_COLORS.cream200,
        roughness: 0.7,
        metalness: 0.05,
      }),
    ),
  );
}

function ResponsiveLayout() {
  const groupRef = useRef<Group>(null);
  const { viewport, camera } = useThree();
  const w = viewport.width;
  const isPhone = w < 6;
  const isTablet = w >= 6 && w < 9;

  useEffect(() => {
    if (isPhone) camera.position.z = 6.4;
    else if (isTablet) camera.position.z = 5.8;
    else camera.position.z = 5.2;
    camera.updateProjectionMatrix();
  }, [isPhone, isTablet, camera]);

  const blobPos: [number, number, number] = [0, 0, 0];
  const torusPos: [number, number, number] = isPhone
    ? [1.8, -1.0, -0.5]
    : isTablet
    ? [2.3, -0.9, -0.5]
    : [2.6, -0.8, -0.5];
  const spherePos: [number, number, number] = isPhone
    ? [-1.9, 1.1, -0.3]
    : isTablet
    ? [-2.4, 1.15, -0.3]
    : [-2.7, 1.2, -0.3];
  const sideScale = isPhone ? 0.7 : isTablet ? 0.88 : 1;

  return h(
    "group" as any,
    { ref: groupRef },
    h("group" as any, { position: blobPos }, h(Blob)),
    h("group" as any, { position: torusPos, scale: sideScale }, h(Torus)),
    h("group" as any, { position: spherePos, scale: sideScale }, h(Sphere)),
  );
}

function Scene() {
  return h(
    Suspense,
    { fallback: null },
    h("color" as any, { attach: "background", args: [HERO_3D_COLORS.cream100] }),
    h("ambientLight" as any, { intensity: 0.7 }),
    h("directionalLight" as any, { position: [4, 4, 6], intensity: 1.2, color: "#ffffff" }),
    h("directionalLight" as any, { position: [-5, -2, 3], intensity: 0.4, color: HERO_3D_COLORS.orange }),
    h(Environment, { preset: "studio" }),
    h(ResponsiveLayout),
  );
}

export default function Hero3D() {
  const [dprMax, setDprMax] = useState(1.6);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const small = window.matchMedia("(max-width: 640px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setDprMax(small || coarse ? 1.25 : 1.6);

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
