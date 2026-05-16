"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { MOTION } from "@/lib/motion";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg" aria-hidden />,
});

const HEADLINE =
  "Websites that make your business impossible to ignore.";

function splitHeadline(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={`${char}-${i}`}
      className="hero__char-wrap"
      aria-hidden={char === " "}
    >
      <span className="hero__char">{char === " " ? "\u00A0" : char}</span>
    </span>
  ));
}

export default function Hero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLSpanElement>(null);
  const [rotationEnabled, setRotationEnabled] = useState(false);
  const [scrollHidden, setScrollHidden] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: MOTION.ease.out },
      });

      if (canvasWrapRef.current) {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        tl.fromTo(
          canvasWrapRef.current,
          {
            opacity: 0,
            y: 20,
            ...(isDesktop ? { y: "calc(-50% + 20px)" } : {}),
          },
          {
            opacity: 1,
            y: isDesktop ? "-50%" : 0,
            duration: MOTION.dur.slow,
          },
          0.2
        );
      }

      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: MOTION.dur.normal },
          0.4
        );
      }

      const chars = gsap.utils.toArray<HTMLElement>(".hero__char");
      if (chars.length) {
        tl.fromTo(
          chars,
          { y: "110%" },
          {
            y: "0%",
            duration: 0.8,
            stagger: 0.02,
            ease: MOTION.ease.out,
          },
          0.6
        );
      }

      if (subRef.current) {
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: MOTION.dur.normal },
          1.4
        );
      }

      if (scrollRef.current) {
        tl.fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: MOTION.dur.fast },
          1.6
        );
      }

      if (scrollLineRef.current && !reduced) {
        tl.to(
          scrollLineRef.current,
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          },
          1.6
        );
      }

      tl.call(() => setRotationEnabled(true), [], 2.0);
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hide = () => setScrollHidden(true);

    const lenis = window.starLenis;
    if (lenis) {
      lenis.on("scroll", hide);
      return () => lenis.off("scroll", hide);
    }

    window.addEventListener("scroll", hide, { once: true, passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, []);

  return (
    <section
      className="hero surface-light"
      data-section="hero"
      aria-label="Introduction"
    >
      <div className="hero__grid">
        <div className="hero__content relative z-raised">
          <p
            ref={labelRef}
            className="hero__label text-label text-ink-600 font-ui font-medium"
          >
            STAR{" "}
            <span className="text-saffron" aria-hidden>
              ✦
            </span>
          </p>

          <h1 className="hero__headline text-display text-ink-900">
            {splitHeadline(HEADLINE)}
          </h1>

          <p ref={subRef} className="hero__sub text-body-lg font-ui">
            Premium web design for Indian businesses — zero upfront cost.
          </p>

          <div
            ref={scrollRef}
            className="hero__scroll"
            style={{ visibility: scrollHidden ? "hidden" : "visible" }}
            aria-hidden={scrollHidden}
          >
            <span ref={scrollLineRef} className="hero__scroll-line" />
            <span className="hero__scroll-label">Scroll to explore</span>
          </div>
        </div>

        <div ref={canvasWrapRef} className="hero__canvas-wrap">
          <HeroCanvas rotationEnabled={rotationEnabled} />
        </div>
      </div>
    </section>
  );
}
