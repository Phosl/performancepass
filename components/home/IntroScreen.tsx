"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BrandLockup } from "@/components/brand/BrandLockup";
import styles from "./IntroScreen.module.scss";

export function IntroScreen() {
  const root = useRef<HTMLDivElement>(null);
  const brand = useRef<HTMLDivElement>(null);
  const tagline = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("performance-pass-intro") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem("performance-pass-intro", "seen");
    const timeline = gsap.timeline({ onComplete: () => setVisible(false) });
    timeline
      .fromTo(brand.current, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .46, ease: "power3.out" })
      .fromTo(tagline.current, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .26 }, "-=.12")
      .to(root.current, { yPercent: -100, duration: .43, ease: "power3.inOut" }, "+=.04");

    return () => { timeline.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={root} className={styles.intro} aria-hidden="true">
      <div ref={brand} className={styles.introBrand}>
        <BrandLockup className={styles.lockup} />
      </div>
      <p ref={tagline}>Membership. Contenuti. Vantaggi.</p>
    </div>
  );
}
