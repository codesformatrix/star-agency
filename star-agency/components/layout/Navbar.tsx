"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { MOTION } from "@/lib/motion";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const menuOpen = menuOpenPath === pathname;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      gsap.to(nav, {
        "--nav-bg": scrolled ? "rgba(250, 250, 248, 0.92)" : "rgba(250, 250, 248, 0)",
        "--nav-blur": scrolled ? "14px" : "0px",
        "--nav-border": scrolled
          ? "rgba(235, 235, 234, 1)"
          : "rgba(235, 235, 234, 0)",
        duration: MOTION.dur.fast,
        ease: MOTION.ease.out,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu || !menuOpen) return;

    const links = menu.querySelectorAll("[data-nav-link]");
    gsap.fromTo(
      links,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: MOTION.dur.normal,
        stagger: MOTION.stagger.loose,
        ease: MOTION.ease.out,
      }
    );
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-nav h-16 border-b transition-colors"
        style={
          {
            "--nav-bg": "rgba(250, 250, 248, 0)",
            "--nav-blur": "0px",
            "--nav-border": "rgba(235, 235, 234, 0)",
            backgroundColor: "var(--nav-bg)",
            backdropFilter: "blur(var(--nav-blur))",
            WebkitBackdropFilter: "blur(var(--nav-blur))",
            borderColor: "var(--nav-border)",
          } as React.CSSProperties
        }
      >
        <div className="container h-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1 font-ui font-extrabold text-[15px] tracking-wide text-ink-900"
          >
            STAR
            <span className="text-saffron" aria-hidden>
              ✦
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative font-ui text-[13px] font-medium tracking-wide text-ink-900 pb-1",
                    active &&
                      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-saffron after:rounded-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary text-[13px]">
              Let&apos;s talk
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpenPath(menuOpen ? null : pathname)
            }
          >
            <span
              className={clsx(
                "absolute block w-6 h-[2px] bg-ink-900 transition-transform duration-300",
                menuOpen ? "rotate-45" : "-translate-y-2"
              )}
            />
            <span
              className={clsx(
                "absolute block w-6 h-[2px] bg-ink-900 transition-opacity duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "absolute block w-6 h-[2px] bg-ink-900 transition-transform duration-300",
                menuOpen ? "-rotate-45" : "translate-y-2"
              )}
            />
          </button>
        </div>
      </nav>

      <MobileMenuOverlay
        menuRef={menuRef}
        menuOpen={menuOpen}
        setMenuOpenPath={setMenuOpenPath}
      />
    </>
  );
}

function MobileMenuOverlay({
  menuRef,
  menuOpen,
  setMenuOpenPath,
}: {
  menuRef: React.RefObject<HTMLDivElement | null>;
  menuOpen: boolean;
  setMenuOpenPath: (path: string | null) => void;
}) {
  return (
    <div
      ref={menuRef}
      className={clsx(
        "fixed inset-0 z-overlay bg-darker flex flex-col justify-between px-8 py-10 transition-opacity duration-300 md:hidden",
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!menuOpen}
    >
      <div className="flex flex-col gap-6 pt-20">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-nav-link
            className="text-h1 font-display italic text-bg"
              onClick={() => setMenuOpenPath(null)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          data-nav-link
          className="text-h2 font-ui font-semibold text-saffron"
              onClick={() => setMenuOpenPath(null)}
        >
          Let&apos;s talk
        </Link>
      </div>
      <div className="border-t border-ink-800 pt-6 text-ink-400 text-small font-ui">
        <p className="text-bg font-semibold">STAR Web Design Agency</p>
        <p className="mt-1">Jaipur, India</p>
      </div>
    </div>
  );
}
