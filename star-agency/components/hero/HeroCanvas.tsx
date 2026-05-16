"use client";

import { Suspense, useSyncExternalStore } from "react";
import { Canvas } from "@react-three/fiber";
import { THREE_CONFIG } from "@/lib/motion";
import Scene from "./Scene";

function subscribeMedia(query: string, onChange: () => void) {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMediaSnapshot(query: string) {
  return window.matchMedia(query).matches;
}

function getMediaServerSnapshot() {
  return false;
}

type HeroCanvasProps = {
  rotationEnabled: boolean;
};

export default function HeroCanvas({ rotationEnabled }: HeroCanvasProps) {
  const reducedMotion = useSyncExternalStore(
    (onChange) => subscribeMedia("(prefers-reduced-motion: reduce)", onChange),
    () => getMediaSnapshot("(prefers-reduced-motion: reduce)"),
    getMediaServerSnapshot
  );

  const isMobile = useSyncExternalStore(
    (onChange) => subscribeMedia("(max-width: 767px)", onChange),
    () => getMediaSnapshot("(max-width: 767px)"),
    getMediaServerSnapshot
  );

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{
        fov: THREE_CONFIG.hero.cameraFov,
        position: [0, 0, THREE_CONFIG.hero.cameraZ],
        near: 0.1,
        far: 100,
      }}
      gl={{
        alpha: false,
        antialias: isMobile ? false : THREE_CONFIG.perf.antialias,
        powerPreference: "high-performance",
      }}
      dpr={[1, THREE_CONFIG.perf.maxPixelRatio]}
      shadows
    >
      <Suspense fallback={null}>
        <Scene
          rotationEnabled={rotationEnabled && !reducedMotion}
          reducedMotion={reducedMotion}
        />
      </Suspense>
    </Canvas>
  );
}
