'use client'

/**
 * HeroCanvas.jsx
 * Three.js floating project cards — rendered via @react-three/fiber.
 *
 * Cards are coloured planes arranged at different depths and angles.
 * Replace CARD_DATA colors with actual <useTexture> screenshot textures
 * once client screenshots are ready.
 *
 * Interactions:
 * - Cards float with a gentle sine-wave bob (unique phase per card)
 * - Entire group tilts subtly toward the mouse (parallax)
 * - Hovered card slides toward camera and brightens
 */

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { RoundedBox, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ── Card data — replace color with useTexture('/images/projects/x.jpg') ─ */
const CARD_DATA = [
  {
    position: [-1.8,  0.4,  0.0],
    rotation: [ 0.05, 0.18,  0.03],
    color:    '#1a2240',
    label:    'Architecture',
    phase:    0,
  },
  {
    position: [ 0.2, -0.6, -0.8],
    rotation: [-0.04, -0.14, -0.02],
    color:    '#2d1a10',
    label:    'Events',
    phase:    1.2,
  },
  {
    position: [ 1.9,  0.9, -0.4],
    rotation: [ 0.06,  0.22,  0.04],
    color:    '#0f2820',
    label:    'Restaurant',
    phase:    2.4,
  },
  {
    position: [ 0.8, -1.4,  0.6],
    rotation: [-0.03, -0.10, -0.03],
    color:    '#2d1020',
    label:    'Wedding',
    phase:    0.8,
  },
]

/* ── Individual card ──────────────────────────────────────────────────────── */
function ProjectCard({ position, rotation, color, label, phase, index }) {
  const groupRef  = useRef()
  const meshRef   = useRef()
  const [hovered, setHovered] = useState(false)

  // Target z for hover
  const targetZ = useRef(position[2])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime

    // Gentle floating bob
    groupRef.current.position.y = position[1] + Math.sin(t * 0.5 + phase) * 0.06

    // Hover — slide toward camera
    const zGoal = hovered ? position[2] + 0.9 : position[2]
    targetZ.current += (zGoal - targetZ.current) * 0.08
    groupRef.current.position.z = targetZ.current

    // Subtle self-rotation
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.25 + phase) * 0.025
    groupRef.current.rotation.x = rotation[0] + Math.cos(t * 0.2  + phase) * 0.015
  })

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Card face */}
      <RoundedBox ref={meshRef} args={[3.0, 1.9, 0.04]} radius={0.06} smoothness={4}>
        <meshStandardMaterial
          color={hovered ? new THREE.Color(color).multiplyScalar(1.4) : color}
          roughness={0.15}
          metalness={0.05}
        />
      </RoundedBox>

      {/* Subtle gloss highlight */}
      <RoundedBox args={[2.9, 0.5, 0.001]} radius={0.04} smoothness={4}
        position={[0, 0.55, 0.025]}
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          roughness={0}
        />
      </RoundedBox>

      {/* Soft shadow plane beneath card */}
      <mesh position={[0, -1.2, -0.3]} rotation={[-Math.PI / 2.5, 0, 0]}>
        <planeGeometry args={[3.2, 2.2]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.06} />
      </mesh>
    </group>
  )
}

/* ── Scene — handles mouse parallax on the card group ──────────────────── */
function Scene() {
  const groupRef = useRef()
  const mouse    = useRef({ x: 0, y: 0 })
  const target   = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x =  (e.clientX / window.innerWidth  - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return
    // Smooth damp toward mouse
    target.current.x += (mouse.current.x - target.current.x) * 0.04
    target.current.y += (mouse.current.y - target.current.y) * 0.04
    groupRef.current.rotation.y = target.current.x * 0.06
    groupRef.current.rotation.x = target.current.y * 0.04
  })

  return (
    <group ref={groupRef}>
      {CARD_DATA.map((card, i) => (
        <ProjectCard key={i} {...card} index={i} />
      ))}
    </group>
  )
}

/* ── Camera setup ─────────────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 6)
    camera.fov = 50
    camera.updateProjectionMatrix()
  }, [camera])
  return null
}

/* ── Canvas export ────────────────────────────────────────────────────── */
export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}                  // Cap at 2x for perf
      gl={{ antialias: true, alpha: true }}
      style={{
        position:   'absolute',
        inset:       0,
        width:      '100%',
        height:     '100%',
        background: 'transparent',
      }}
    >
      <CameraRig />

      {/* Lighting — key light + fill + ambient */}
      <ambientLight color="#fafaf8" intensity={0.7} />
      <directionalLight
        color="#ffffff"
        intensity={1.4}
        position={[5, 8, 5]}
        castShadow={false}
      />
      {/* Subtle saffron fill from below */}
      <pointLight
        color="#e8940a"
        intensity={0.3}
        position={[-4, -3, 3]}
      />

      <Scene />
    </Canvas>
  )
}