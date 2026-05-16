"use client";

import { useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Project } from "@/lib/data/projects";
import { THREE_CONFIG } from "@/lib/motion";
import { useProjectTexture } from "./useProjectTexture";

type Layout = {
  x: number;
  y: number;
  z: number;
  rotY: number;
  rotX: number;
};

type FloatingCardProps = {
  project: Project;
  layout: Layout;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
};

export default function FloatingCard({
  project,
  layout,
  index,
  isHovered,
  onHover,
  pointer,
  reducedMotion,
}: FloatingCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useProjectTexture(project);
  const targetZ = useRef(layout.z);
  const parallax = useRef({ x: 0, y: 0 });

  const { cardWidth, cardHeight, hoverZ, hoverDuration, parallaxFactor } =
    THREE_CONFIG.hero;

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh || !texture) return;

    if (!reducedMotion) {
      parallax.current.x = pointer.current.x * parallaxFactor;
      parallax.current.y = pointer.current.y * parallaxFactor * 0.6;
    }

    const hoverTarget = isHovered ? layout.z + hoverZ : layout.z;
    targetZ.current = THREE.MathUtils.lerp(
      targetZ.current,
      hoverTarget,
      Math.min(1, delta / hoverDuration)
    );

    mesh.position.z = targetZ.current;
    mesh.rotation.x = THREE.MathUtils.lerp(
      mesh.rotation.x,
      layout.rotX + parallax.current.y,
      0.08
    );
    mesh.rotation.y = THREE.MathUtils.lerp(
      mesh.rotation.y,
      layout.rotY + parallax.current.x,
      0.08
    );
  });

  if (!texture) return null;

  return (
    <group position={[layout.x, layout.y, layout.z]}>
      <mesh
        ref={meshRef}
        rotation={[layout.rotX, layout.rotY, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(index);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <planeGeometry args={[cardWidth, cardHeight, 1, 1]} />
        <meshStandardMaterial
          map={texture}
          roughness={THREE_CONFIG.material.roughness}
          metalness={THREE_CONFIG.material.metalness}
          envMapIntensity={THREE_CONFIG.material.envMapIntensity}
        />
      </mesh>

      <mesh position={[0, 0, -0.02]} rotation={[0, 0, 0]}>
        <planeGeometry args={[cardWidth + 0.08, cardHeight + 0.08]} />
        <meshBasicMaterial color="#111111" transparent opacity={0.06} />
      </mesh>

      {isHovered && (
        <Html
          position={[0, -cardHeight / 2 - 0.35, 0.2]}
          center
          style={{ pointerEvents: "none" }}
        >
          <div className="text-center whitespace-nowrap">
            <p className="font-ui text-[13px] font-semibold text-ink-900">
              {project.title}
            </p>
            <p className="font-ui text-[10px] uppercase tracking-widest text-ink-400 mt-0.5">
              {project.industry}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
