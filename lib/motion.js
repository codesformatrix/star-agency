export const MOTION = {
  dur: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.6,
    slow: 1,
    xslow: 1.6,
    hero: 2,
    loader: 1.8,
  },

  ease: {
    out: 'power4.out',
    reveal: 'power3.out',
    spring: 'back.out(1.7)',
    inOut: 'power3.inOut',
    smooth: 'power2.out',
    elastic: 'elastic.out(1, 0.3)',
    linear: 'none',
  },

  stagger: {
    tight: 0.04,
    normal: 0.08,
    loose: 0.12,
    xloose: 0.2,
  },

  scroll: {
    start: 'top 85%',
    startScrub: 'top bottom',
    endScrub: 'bottom top',
    scrub: 1.1,
    pinSpacing: true,
  },

  reveal: {
    y: '2rem',
    x: '1.5rem',
    opacity: 0,
    scale: 0.96,
  },

  loader: {
    sessionKey: 'star-intro-seen',
    holdMs: 1750,
    hideDuration: 0.7,
  },

  route: {
    veilIn: 0.32,
    veilOut: 0.62,
  },

  cursor: {
    idleSize: 10,
    hoverSize: 44,
    dragSize: 68,
    moveDuration: 0.42,
    labelDuration: 0.24,
  },

  hero: {
    scrollLength: 210,
    cardLift: 22,
    wallRotateX: 14,
    wallRotateZ: 12,
    wallTranslateYStart: -260,
    wallTranslateYEnd: 140,
  },
}

export const LENIS_CONFIG = {
  duration: 1.1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  orientation: /** @type {'vertical'} */ ('vertical'),
  gestureOrientation: /** @type {'vertical'} */ ('vertical'),
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 1.8,
  infinite: false,
}

export const THREE_CONFIG = {
  hero: {
    rotationSpeed: 0.003,
    parallaxFactor: 0.08,
    hoverZ: 0.8,
    hoverDuration: 0.4,
    cardWidth: 3.2,
    cardHeight: 2,
    cardRadius: 0.08,
    depthMin: -1.5,
    depthMax: 1.5,
    cameraZ: 6,
    cameraFov: 50,
  },

  atmosphere: {
    floatY: 0.08,
    rotateSpeed: 0.12,
  },

  lighting: {
    ambientColor: 0xfafaf8,
    ambientIntensity: 0.7,
    directionalColor: 0xffffff,
    directionalIntensity: 1.1,
    directionalX: 5,
    directionalY: 8,
    directionalZ: 5,
    fillColor: 0xe8940a,
    fillIntensity: 0.18,
    fillX: -5,
    fillY: -3,
    fillZ: 2,
  },

  material: {
    roughness: 0.15,
    metalness: 0,
    envMapIntensity: 1,
  },

  perf: {
    maxPixelRatio: 2,
    antialias: true,
    shadowMapSize: 1024,
  },
}

export const PAGE_TRANSITION = {
  initial: {
    opacity: 0,
    y: '1rem',
  },
  animate: {
    opacity: 1,
    y: '0rem',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: '-0.5rem',
    transition: {
      duration: 0.3,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}
