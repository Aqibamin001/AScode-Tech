import { createElement as h, Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function Blob({ position = [0, 0, 0] as [number, number, number], color = "#FF4F00", scale = 1, speed = 1 }) {
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
      { ref, position, scale },
      h("icosahedronGeometry" as any, { args: [1.2, 12] }),
      h(MeshDistortMaterial, {
        color,
        distort: 0.38,
        speed: 2,
        roughness: 0.15,
        metalness: 0.1,
      }),
    ),
  );
}

function Torus({ position = [2.4, -0.6, 0] as [number, number, number] }) {
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
      { ref, position },
      h("torusKnotGeometry" as any, { args: [0.7, 0.22, 180, 24] }),
      h("meshStandardMaterial" as any, { color: "#1C1C1C", roughness: 0.4, metalness: 0.2 }),
    ),
  );
}

function Sphere({ position = [-2.6, 1.2, 0] as [number, number, number] }) {
  return h(
    Float,
    { speed: 0.9, rotationIntensity: 0.2, floatIntensity: 1.4 },
    h(
      "mesh" as any,
      { position },
      h("sphereGeometry" as any, { args: [0.55, 64, 64] }),
      h("meshStandardMaterial" as any, { color: "#EAE6DF", roughness: 0.7, metalness: 0.05 }),
    ),
  );
}

function Scene() {
  return h(
    Suspense,
    { fallback: null },
    h("color" as any, { attach: "background", args: ["#F4F2ED"] }),
    h("ambientLight" as any, { intensity: 0.8 }),
    h("directionalLight" as any, { position: [4, 4, 6], intensity: 1.4 }),
    h("directionalLight" as any, { position: [-5, -2, 3], intensity: 0.5, color: "#FF4F00" }),
    h(Blob, { position: [0, 0, 0], scale: 1.15 }),
    h(Torus, { position: [2.6, -0.8, -0.5] }),
    h(Sphere, { position: [-2.7, 1.2, -0.3] }),
  );
}

export default function Hero3D() {
  useEffect(() => {
    // Signal the loader as soon as the canvas mounts on the next frame.
    const id = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("ascode:hero-ready"));
    });
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
