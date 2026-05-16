"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";
import { LENIS_CONFIG } from "@/lib/motion";
import { initGSAP } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initGSAP();

    const lenis = new Lenis({
      ...LENIS_CONFIG,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });
    window.starLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.starLenis;
    };
  }, []);

  return <>{children}</>;
}
