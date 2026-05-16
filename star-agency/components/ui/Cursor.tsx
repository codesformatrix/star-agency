"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { MOTION } from "@/lib/motion";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    if (isTouch) return;

    document.body.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot) return;

    gsap.set(dot, { opacity: 0, xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(dot, "x", {
      duration: 0.5,
      ease: MOTION.ease.smooth,
    });
    const yTo = gsap.quickTo(dot, "y", {
      duration: 0.5,
      ease: MOTION.ease.smooth,
    });

    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { opacity: 1 });
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onLeave = () => {
      gsap.to(dot, { opacity: 0, duration: MOTION.dur.fast });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [data-cursor="view"], [role="button"]'
      );
      const isView = Boolean(target.closest('[data-cursor="view"]'));

      if (interactive) {
        dot.classList.add("is-hovering");
        if (label) {
          gsap.to(label, {
            opacity: isView ? 1 : 0,
            duration: MOTION.dur.fast,
          });
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (
        related?.closest('a, button, [data-cursor="view"], [role="button"]')
      ) {
        return;
      }
      dot.classList.remove("is-hovering");
      if (label) {
        gsap.to(label, { opacity: 0, duration: MOTION.dur.fast });
      }
    };

    document.body.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseover", onOver);
    document.body.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      document.body.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseover", onOver);
      document.body.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor fixed top-0 left-0 z-cursor pointer-events-none flex items-center justify-center"
      aria-hidden
    >
      <span
        ref={labelRef}
        className="absolute font-ui text-[9px] font-semibold uppercase tracking-widest text-white opacity-0"
      >
        View
      </span>
    </div>
  );
}
