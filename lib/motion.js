/* ============================================================
   STAR WEB DESIGN AGENCY — motion.js
   
   Central motion configuration for GSAP + Lenis.
   Import MOTION and LENIS_CONFIG anywhere animations are needed.
   Never hardcode durations or easings inline — always use these.
   ============================================================ */

/* ────────────────────────────────────────────────────────────
   GSAP MOTION TOKENS
   ──────────────────────────────────────────────────────────── */

export const MOTION = {

  /* ── Durations (seconds — GSAP uses seconds) ─────────────── */
  dur: {
    instant: 0.15,   /* Micro feedback — button press, cursor snap  */
    fast:    0.3,    /* Hover transitions, small UI changes          */
    normal:  0.6,    /* Standard reveals, nav open/close            */
    slow:    1.0,    /* Section entrances, hero elements             */
    xslow:   1.6,    /* Page transitions, cinematic moments          */
    hero:    2.0,    /* Hero sequence — the opening statement        */
  },

  /* ── Easings ─────────────────────────────────────────────── */
  ease: {
    /* Primary — used for 80% of animations */
    out:      'power4.out',

    /* Scroll-triggered section reveals */
    reveal:   'power3.out',

    /* Hover states and interactive feedback */
    spring:   'back.out(1.7)',

    /* Page-level transitions */
    inOut:    'power3.inOut',

    /* Subtle — body text, secondary elements */
    smooth:   'power2.out',

    /* One-off special emphasis moments only */
    elastic:  'elastic.out(1, 0.3)',

    /* Three.js — not GSAP, used as reference */
    linear:   'none',
  },

  /* ── Stagger values (seconds between each item) ─────────── */
  stagger: {
    tight:  0.04,   /* Dense lists, many small elements     */
    normal: 0.08,   /* Card grids, service items            */
    loose:  0.12,   /* Section headlines, major elements    */
    xloose: 0.2,    /* Very deliberate, cinematic pacing    */
  },

  /* ── ScrollTrigger defaults ──────────────────────────────── */
  scroll: {
    /* When animation starts (relative to viewport) */
    start:       'top 85%',

    /* For scrub animations */
    startScrub:  'top bottom',
    endScrub:    'bottom top',

    /* Scrub lag — higher = more drag/inertia feel */
    scrub:       1.2,

    /* Pin spacing */
    pinSpacing:  true,
  },

  /* ── Reveal defaults (applied to data-reveal elements) ───── */
  reveal: {
    y:        '2rem',      /* translateY start position    */
    x:        '1.5rem',   /* translateX start position    */
    opacity:  0,           /* Starting opacity             */
    scale:    0.96,        /* Starting scale for scale reveals */
  },

}

/* ────────────────────────────────────────────────────────────
   LENIS SMOOTH SCROLL CONFIG
   ──────────────────────────────────────────────────────────── */

export const LENIS_CONFIG = {
  /*
   * Duration of momentum scroll (higher = longer coast)
   * 1.2 is the sweet spot — feels premium without being laggy
   */
  duration: 1.2,

  /*
   * Custom easing — expo-like curve
   * Makes scroll decelerate naturally, like heavy objects slowing
   */
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

  /* Scroll direction */
  orientation:      /** @type {'vertical'} */ ('vertical'),
  gestureOrientation: /** @type {'vertical'} */ ('vertical'),

  /* Smooth on desktop, native on touch (better mobile feel) */
  smoothWheel: true,
  smoothTouch: false,

  /* Touch momentum multiplier */
  touchMultiplier: 2,

  /*
   * Infinite scroll — false for standard sites
   * Set true only for specific scroll-loop sections
   */
  infinite: false,
}

/* ────────────────────────────────────────────────────────────
   THREE.JS ANIMATION CONSTANTS
   ──────────────────────────────────────────────────────────── */

export const THREE_CONFIG = {

  /* ── Hero card orbit ─────────────────────────────────────── */
  hero: {
    /* Auto-rotation speed (radians per second) */
    rotationSpeed:   0.003,

    /* Mouse parallax strength (lower = subtler) */
    parallaxFactor:  0.08,

    /* Hover response — how far card comes toward camera */
    hoverZ:          0.8,

    /* Transition duration for hover (seconds) */
    hoverDuration:   0.4,

    /* Card dimensions (Three.js units) */
    cardWidth:       3.2,
    cardHeight:      2.0,
    cardRadius:      0.08,

    /* Depth range for floating cards */
    depthMin:       -1.5,
    depthMax:        1.5,

    /* Camera position */
    cameraZ:         6,
    cameraFov:       50,
  },

  /* ── Ambient lighting ────────────────────────────────────── */
  lighting: {
    ambientColor:     0xfafaf8,
    ambientIntensity: 0.6,

    directionalColor: 0xffffff,
    directionalIntensity: 1.2,
    directionalX:     5,
    directionalY:     8,
    directionalZ:     5,

    /* Soft fill light from below */
    fillColor:        0xe8940a,   /* Saffron hint */
    fillIntensity:    0.15,
    fillX:            -5,
    fillY:            -3,
    fillZ:            2,
  },

  /* ── Material defaults ───────────────────────────────────── */
  material: {
    roughness:  0.15,
    metalness:  0.0,
    envMapIntensity: 1.0,
  },

  /* ── Performance ─────────────────────────────────────────── */
  perf: {
    /* Cap pixel ratio for performance on high-DPI screens */
    maxPixelRatio: 2,

    /* Antialias — disable on mobile for performance */
    antialias: true,

    /* Shadow quality */
    shadowMapSize: 1024,
  },
}

/* ────────────────────────────────────────────────────────────
   PAGE TRANSITION CONFIG (Framer Motion)
   ──────────────────────────────────────────────────────────── */

export const PAGE_TRANSITION = {
  initial: {
    opacity:  0,
    y:        '1rem',
  },
  animate: {
    opacity:  1,
    y:        '0rem',
    transition: {
      duration: 0.6,
      ease:     [0.16, 1, 0.3, 1],    /* expo out */
    },
  },
  exit: {
    opacity:  0,
    y:        '-0.5rem',
    transition: {
      duration: 0.3,
      ease:     [0.87, 0, 0.13, 1],   /* expo in */
    },
  },
}

/* ────────────────────────────────────────────────────────────
   GSAP UNIVERSAL SETUP
   Call this once in app/layout.js
   ──────────────────────────────────────────────────────────── */

/*
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { SplitText } from 'gsap/SplitText'

  export function initGSAP() {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    // Set GSAP defaults — all animations use these unless overridden
    gsap.defaults({
      ease:     MOTION.ease.out,
      duration: MOTION.dur.normal,
    })

    // ScrollTrigger defaults
    ScrollTrigger.defaults({
      start:   MOTION.scroll.start,
      toggleActions: 'play none none none',
    })
  }
*/