"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./home.module.scss";

export function IntroScreen() {
  const root = useRef<HTMLDivElement>(null);
  const performance = useRef<HTMLSpanElement>(null);
  const pass = useRef<HTMLSpanElement>(null);
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
      .fromTo(performance.current, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .42, ease: "power3.out" })
      .fromTo(pass.current, { x: -24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .32, ease: "power2.out" }, "-=.1")
      .fromTo(tagline.current, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .24 }, "-=.08")
      .to(root.current, { yPercent: -100, duration: .43, ease: "power3.inOut" }, "+=.04");

    return () => { timeline.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div ref={root} className={styles.intro} aria-hidden="true">
      <div className={styles.introBrand}>
        <span className={styles.wordClip}><span ref={performance}>Performance</span></span>
        <span ref={pass} className={styles.introPass}>Pass</span>
      </div>
      <p ref={tagline}>Video. Training. Vantaggi.</p>
    </div>
  );
}
