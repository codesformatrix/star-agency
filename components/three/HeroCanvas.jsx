'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei'
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { THREE_CONFIG } from '@/lib/motion'

function AtmosphereLayers({ motionAllowed }) {
  const shards = useMemo(
    () => [
      { position: [-2.8, 1.3, -1.8], rotation: [0.3, -0.25, 0.16], scale: [1.5, 0.3, 0.08], color: '#F2B24A' },
      { position: [2.4, -1.1, -1.2], rotation: [0.12, 0.45, -0.24], scale: [1.8, 0.34, 0.1], color: '#111111' },
      { position: [0.8, 1.95, -2.2], rotation: [0.55, 0.2, 0.28], scale: [0.9, 0.2, 0.06], color: '#E8940A' },
      { position: [-1.2, -1.7, -2.5], rotation: [-0.2, -0.4, 0.35], scale: [1.2, 0.22, 0.08], color: '#F3F1EC' },
    ],
    []
  )

  useFrame((state, delta) => {
    if (!motionAllowed) return
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      state.pointer.x * 0.2,
      2.8,
      delta
    )
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      state.pointer.y * 0.12,
      2.8,
      delta
    )
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group>
      {shards.map((shard) => (
        <Float
          key={shard.position.join('-')}
          speed={motionAllowed ? 1.2 : 0}
          rotationIntensity={motionAllowed ? 0.3 : 0}
          floatIntensity={motionAllowed ? 0.6 : 0}
        >
          <RoundedBox
            args={shard.scale}
            radius={0.08}
            position={shard.position}
            rotation={shard.rotation}
          >
            <meshStandardMaterial
              color={shard.color}
              transparent
              opacity={shard.color === '#111111' ? 0.08 : 0.16}
              roughness={0.3}
              metalness={0}
            />
          </RoundedBox>
        </Float>
      ))}

      <mesh position={[2.1, 1.45, -3.2]}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <MeshDistortMaterial
          color="#E8940A"
          transparent
          opacity={0.14}
          speed={motionAllowed ? 1.4 : 0}
          distort={motionAllowed ? 0.32 : 0}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[-2.2, -1.4, -3.4]}>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshBasicMaterial color="#111111" transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

export default function HeroCanvas() {
  const [motionAllowed, setMotionAllowed] = useState(true)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPreference = () => {
      setMotionAllowed(!reducedMotionQuery.matches)
    }

    applyPreference()

    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', applyPreference)
      return () => {
        reducedMotionQuery.removeEventListener('change', applyPreference)
      }
    }

    if (typeof reducedMotionQuery.addListener === 'function') {
      reducedMotionQuery.addListener(applyPreference)
      return () => {
        reducedMotionQuery.removeListener(applyPreference)
      }
    }

    return () => {}
  }, [])

  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, THREE_CONFIG.perf.maxPixelRatio]}
      camera={{
        position: [0, 0, 5.8],
        fov: 44,
      }}
      gl={{
        antialias: THREE_CONFIG.perf.antialias,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <ambientLight color={0xfafaf8} intensity={0.95} />
      <directionalLight color={0xffffff} intensity={0.8} position={[4, 6, 5]} />
      <pointLight color={0xe8940a} intensity={0.55} position={[-3, 1, 2]} />
      <pointLight color={0xffffff} intensity={0.35} position={[2, -2, 2]} />
      <AtmosphereLayers motionAllowed={motionAllowed} />
    </Canvas>
  )
}
