"use client";

import { useRef, useState } from "react";
import { ContactShadows } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { heroProjects, CARD_LAYOUT } from "@/lib/data/projects";
import { THREE_CONFIG } from "@/lib/motion";
import FloatingCard from "./FloatingCard";

type SceneProps = {
  rotationEnabled: boolean;
  reducedMotion: boolean;
};

export default function Scene({ rotationEnabled, reducedMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    if (!reducedMotion) {
      pointer.current.x = state.pointer.x;
      pointer.current.y = state.pointer.y;

      if (rotationEnabled) {
        group.rotation.y += THREE_CONFIG.hero.rotationSpeed;
      }
    }
  });

  const { lighting } = THREE_CONFIG;

  return (
    <>
      <color attach="background" args={["#FAFAF8"]} />
      <fog attach="fog" args={["#FAFAF8", 8, 18]} />

      <ambientLight
        color={lighting.ambientColor}
        intensity={lighting.ambientIntensity}
      />
      <directionalLight
        color={lighting.directionalColor}
        intensity={lighting.directionalIntensity}
        position={[
          lighting.directionalX,
          lighting.directionalY,
          lighting.directionalZ,
        ]}
        castShadow
        shadow-mapSize={[
          THREE_CONFIG.perf.shadowMapSize,
          THREE_CONFIG.perf.shadowMapSize,
        ]}
      />
      <pointLight
        color={lighting.fillColor}
        intensity={lighting.fillIntensity}
        position={[lighting.fillX, lighting.fillY, lighting.fillZ]}
      />

      <group ref={groupRef} position={[0, -0.15, 0]}>
        {heroProjects.map((project, index) => (
          <FloatingCard
            key={project.id}
            project={project}
            layout={CARD_LAYOUT[index]}
            index={index}
            isHovered={hovered === index}
            onHover={setHovered}
            pointer={pointer}
            reducedMotion={reducedMotion}
          />
        ))}
      </group>

      <ContactShadows
        position={[0, -1.35, 0]}
        opacity={0.28}
        scale={14}
        blur={2.4}
        far={4}
        color="#111111"
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.36, 0]} receiveShadow>
        <planeGeometry args={[viewport.width * 2, viewport.height * 2]} />
        <shadowMaterial transparent opacity={0.12} />
      </mesh>
    </>
  );
}
