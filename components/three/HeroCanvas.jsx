'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Html, RoundedBox, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { heroProjects, CARD_LAYOUT } from '@/lib/data/projects'
import { MOTION, THREE_CONFIG } from '@/lib/motion'

const HERO_PROJECTS = heroProjects
  .slice(0, CARD_LAYOUT.length)
  .map((project, index) => ({ ...project, ...CARD_LAYOUT[index] }))

function createFallbackSvg(project) {
  const [ink, accent] = project.palette

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wash-${project.slug}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${ink}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <linearGradient id="glow-${project.slug}" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.22)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" rx="44" fill="url(#wash-${project.slug})" />
      <rect x="44" y="44" width="1512" height="912" rx="30" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.14)" />
      <circle cx="1318" cy="206" r="208" fill="${accent}" opacity="0.18" />
      <circle cx="298" cy="796" r="228" fill="#FFFFFF" opacity="0.08" />
      <path d="M0 724C238 622 425 577 612 589C778 600 942 691 1098 716C1258 742 1394 705 1600 578V1000H0V724Z" fill="rgba(17,17,17,0.2)" />
      <rect x="132" y="138" width="176" height="34" rx="17" fill="rgba(250,250,248,0.12)" />
      <text x="220" y="160" fill="#FAFAF8" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="3" text-anchor="middle">STAR ✦ ${project.industry.toUpperCase()}</text>
      <text x="132" y="718" fill="#FAFAF8" font-family="Georgia, Times New Roman, serif" font-size="104" font-style="italic" font-weight="700">${project.title}</text>
      <text x="132" y="792" fill="rgba(250,250,248,0.82)" font-family="Arial, Helvetica, sans-serif" font-size="38">${project.description}</text>
      <rect x="132" y="842" width="232" height="1" fill="rgba(250,250,248,0.26)" />
      <text x="132" y="884" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700">${project.location.toUpperCase()} • ${project.year}</text>
      <rect x="1046" y="162" width="360" height="596" rx="26" fill="rgba(17,17,17,0.18)" stroke="rgba(250,250,248,0.16)" />
      <rect x="1088" y="214" width="276" height="14" rx="7" fill="rgba(250,250,248,0.24)" />
      <rect x="1088" y="262" width="214" height="14" rx="7" fill="rgba(250,250,248,0.18)" />
      <rect x="1088" y="340" width="276" height="178" rx="18" fill="url(#glow-${project.slug})" />
      <rect x="1088" y="552" width="118" height="118" rx="18" fill="rgba(250,250,248,0.12)" />
      <rect x="1246" y="552" width="118" height="118" rx="18" fill="rgba(250,250,248,0.08)" />
      <rect x="1088" y="706" width="276" height="18" rx="9" fill="rgba(250,250,248,0.2)" />
    </svg>
  `)}`
}

function useResolvedMedia(projects) {
  const fallbackSources = useMemo(() => (
    projects.reduce((accumulator, project) => {
      accumulator[project.slug] = createFallbackSvg(project)
      return accumulator
    }, {})
  ), [projects])

  const [sources, setSources] = useState(fallbackSources)

  useEffect(() => {
    const imageLoaders = projects.map((project) => {
      const image = new window.Image()
      image.decoding = 'async'
      image.src = project.screenshot

      image.onload = () => {
        setSources((current) => (
          current[project.slug] === project.screenshot
            ? current
            : { ...current, [project.slug]: project.screenshot }
        ))
      }
      return image
    })

    return () => {
      imageLoaders.forEach((image) => {
        image.onload = null
        image.onerror = null
      })
    }
  }, [fallbackSources, projects])

  return sources
}

function ProjectCard({ project, textureSource, allowMotion, allowHover }) {
  const cardRef = useRef(null)
  const frameRef = useRef(null)
  const artworkRef = useRef(null)
  const overlayRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(textureSource, (loadedTexture) => {
    loadedTexture.colorSpace = THREE.SRGBColorSpace
    loadedTexture.wrapS = THREE.ClampToEdgeWrapping
    loadedTexture.wrapT = THREE.ClampToEdgeWrapping
    loadedTexture.needsUpdate = true
  })

  useFrame((state, delta) => {
    if (!cardRef.current || !frameRef.current || !artworkRef.current || !overlayRef.current) {
      return
    }

    const introProgress = allowMotion
      ? THREE.MathUtils.clamp((state.clock.elapsedTime - 0.2) / 0.8, 0, 1)
      : 1

    const introEase = 1 - Math.pow(1 - introProgress, 4)
    const bob = allowMotion
      ? Math.sin(state.clock.elapsedTime * 0.75 + project.x) * 0.08
      : 0

    const targetZ = project.z + (hovered && allowHover ? THREE_CONFIG.hero.hoverZ : 0)
    const targetX = project.x + (hovered && allowHover ? project.rotY * 0.18 : 0)
    const targetY = project.y + bob

    cardRef.current.position.x = THREE.MathUtils.damp(
      cardRef.current.position.x,
      targetX,
      4.5,
      delta
    )
    cardRef.current.position.y = THREE.MathUtils.damp(
      cardRef.current.position.y,
      targetY - (1 - introEase) * 0.28,
      4.5,
      delta
    )
    cardRef.current.position.z = THREE.MathUtils.damp(
      cardRef.current.position.z,
      targetZ,
      hovered ? 5 : 4,
      delta
    )

    cardRef.current.rotation.x = THREE.MathUtils.damp(
      cardRef.current.rotation.x,
      project.rotX + (hovered && allowHover ? -0.08 : 0),
      4,
      delta
    )
    cardRef.current.rotation.y = THREE.MathUtils.damp(
      cardRef.current.rotation.y,
      project.rotY + (hovered && allowHover ? 0.08 : 0),
      4,
      delta
    )

    frameRef.current.material.opacity = 0.96 * introEase
    artworkRef.current.material.opacity = introEase
    overlayRef.current.material.opacity = 0.12 * introEase
  })

  return (
    <group
      ref={cardRef}
      position={[project.x, project.y + 0.24, project.z]}
      rotation={[project.rotX, project.rotY, 0]}
      onPointerEnter={(event) => {
        if (!allowHover) return
        event.stopPropagation()
        setHovered(true)
      }}
      onPointerLeave={(event) => {
        if (!allowHover) return
        event.stopPropagation()
        setHovered(false)
      }}
    >
      <RoundedBox
        ref={frameRef}
        args={[
          THREE_CONFIG.hero.cardWidth + 0.16,
          THREE_CONFIG.hero.cardHeight + 0.16,
          0.12,
        ]}
        radius={0.12}
        smoothness={6}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={project.palette[0]}
          roughness={THREE_CONFIG.material.roughness}
          metalness={THREE_CONFIG.material.metalness}
          transparent
        />
      </RoundedBox>

      <RoundedBox
        ref={artworkRef}
        args={[
          THREE_CONFIG.hero.cardWidth,
          THREE_CONFIG.hero.cardHeight,
          0.03,
        ]}
        radius={0.08}
        smoothness={6}
        position={[0, 0, 0.045]}
        castShadow
      >
        <meshStandardMaterial
          map={texture}
          roughness={0.32}
          metalness={0}
          transparent
        />
      </RoundedBox>

      <mesh ref={overlayRef} position={[0, 0, 0.072]}>
        <planeGeometry args={[THREE_CONFIG.hero.cardWidth * 0.96, THREE_CONFIG.hero.cardHeight * 0.96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.12} />
      </mesh>

      <Html
        transform
        position={[0, -THREE_CONFIG.hero.cardHeight * 0.58, 0.14]}
        distanceFactor={1.15}
        zIndexRange={[40, 0]}
        pointerEvents="none"
      >
        <div className={`hero-card-label${hovered && allowHover ? ' is-visible' : ''}`}>
          <span className="hero-card-label__industry">{project.industry}</span>
          <span className="hero-card-label__title">{project.title}</span>
        </div>
      </Html>
    </group>
  )
}

function Scene({ sources, motionAllowed, hoverAllowed, orbitEnabled }) {
  const orbitRef = useRef(null)
  const orbitAngle = useRef(0)

  useFrame((state, delta) => {
    if (!orbitRef.current) return

    if (orbitEnabled) {
      orbitAngle.current += THREE_CONFIG.hero.rotationSpeed * delta
    }

    const targetY = orbitAngle.current + (motionAllowed ? state.pointer.x * THREE_CONFIG.hero.parallaxFactor : 0)
    const targetX = motionAllowed ? state.pointer.y * THREE_CONFIG.hero.parallaxFactor * 0.55 : 0

    orbitRef.current.rotation.y = THREE.MathUtils.damp(
      orbitRef.current.rotation.y,
      targetY,
      4,
      delta
    )
    orbitRef.current.rotation.x = THREE.MathUtils.damp(
      orbitRef.current.rotation.x,
      targetX,
      4,
      delta
    )
  })

  return (
    <group ref={orbitRef}>
      {HERO_PROJECTS.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          textureSource={sources[project.slug]}
          allowMotion={motionAllowed}
          allowHover={hoverAllowed}
        />
      ))}
    </group>
  )
}

export default function HeroCanvas() {
  const [motionAllowed, setMotionAllowed] = useState(true)
  const [hoverAllowed, setHoverAllowed] = useState(true)
  const [orbitEnabled, setOrbitEnabled] = useState(false)
  const sources = useResolvedMedia(HERO_PROJECTS)
  const orbitTimeoutRef = useRef(null)

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointerQuery = window.matchMedia('(pointer: fine)')

    const applyPreferences = () => {
      const reducedMotion = reducedMotionQuery.matches
      setMotionAllowed(!reducedMotion)
      setHoverAllowed(finePointerQuery.matches)
      setOrbitEnabled(false)

      if (orbitTimeoutRef.current) {
        window.clearTimeout(orbitTimeoutRef.current)
        orbitTimeoutRef.current = null
      }

      if (!reducedMotion) {
        orbitTimeoutRef.current = window.setTimeout(() => {
          setOrbitEnabled(true)
        }, MOTION.dur.hero * 1000)
      }
    }

    applyPreferences()

    reducedMotionQuery.addEventListener('change', applyPreferences)
    finePointerQuery.addEventListener('change', applyPreferences)

    return () => {
      if (orbitTimeoutRef.current) {
        window.clearTimeout(orbitTimeoutRef.current)
        orbitTimeoutRef.current = null
      }
      reducedMotionQuery.removeEventListener('change', applyPreferences)
      finePointerQuery.removeEventListener('change', applyPreferences)
    }
  }, [])

  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, THREE_CONFIG.perf.maxPixelRatio]}
      camera={{
        position: [0, 0, THREE_CONFIG.hero.cameraZ],
        fov: THREE_CONFIG.hero.cameraFov,
      }}
      shadows
      gl={{
        antialias: THREE_CONFIG.perf.antialias,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <ambientLight
        color={THREE_CONFIG.lighting.ambientColor}
        intensity={THREE_CONFIG.lighting.ambientIntensity}
      />
      <directionalLight
        castShadow
        color={THREE_CONFIG.lighting.directionalColor}
        intensity={THREE_CONFIG.lighting.directionalIntensity}
        position={[
          THREE_CONFIG.lighting.directionalX,
          THREE_CONFIG.lighting.directionalY,
          THREE_CONFIG.lighting.directionalZ,
        ]}
        shadow-mapSize-width={THREE_CONFIG.perf.shadowMapSize}
        shadow-mapSize-height={THREE_CONFIG.perf.shadowMapSize}
      />
      <pointLight
        color={THREE_CONFIG.lighting.fillColor}
        intensity={THREE_CONFIG.lighting.fillIntensity}
        position={[
          THREE_CONFIG.lighting.fillX,
          THREE_CONFIG.lighting.fillY,
          THREE_CONFIG.lighting.fillZ,
        ]}
      />

      <Scene
        sources={sources}
        motionAllowed={motionAllowed}
        hoverAllowed={hoverAllowed}
        orbitEnabled={orbitEnabled}
      />

      <ContactShadows
        position={[0, -2.15, 0]}
        scale={11}
        blur={2.8}
        far={4}
        opacity={0.18}
        color="#8A5200"
      />
    </Canvas>
  )
}
