import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOTION } from "./motion";

let initialized = false;

export function initGSAP() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: MOTION.ease.out,
    duration: MOTION.dur.normal,
  });

  ScrollTrigger.defaults({
    start: MOTION.scroll.start,
    toggleActions: "play none none none",
  });
}

export { gsap, ScrollTrigger };
