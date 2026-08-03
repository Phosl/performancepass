"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.65, delay, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 90%", once: true } },
    );
    return () => animation.scrollTrigger?.kill();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
