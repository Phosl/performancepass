"use client";

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styles from "./PageTransition.module.scss";

gsap.registerPlugin(CustomEase);
CustomEase.create("performanceTransition", ".76, 0, .24, 1");

const diagonalWipe = {
  start: "polygon(-110% 100%, -42% 100%, 8% 150%, -110% 150%)",
  cover: "polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)",
  end: "polygon(102% -50%, 170% -50%, 220% 0%, 102% 0%)",
} as const;

const clipPathState = (value: string) => ({ clipPath: value, webkitClipPath: value });

interface PageTransitionContextValue {
  navigate: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Il tuo percorso",
  "/onboarding": "Profilo atleta",
  "/video": "Video training",
  "/corsi": "Mini-corsi",
  "/vantaggi": "Vantaggi",
  "/profilo": "Il tuo profilo",
  "/privacy": "Privacy",
  "/termini": "Termini",
};

function getRouteLabel(pathname: string) {
  if (routeLabels[pathname]) return routeLabels[pathname];
  const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? "Performance Pass";
  return decodeURIComponent(lastSegment).replaceAll("-", " ");
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) throw new Error("usePageTransition deve essere usato dentro PageTransitionProvider");
  return context;
}

export function PageTransitionProvider({ children, persistent }: { children: ReactNode; persistent?: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pageRef = useRef<HTMLDivElement>(null);
  const yellowPanelRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const pendingPathRef = useRef<string | null>(null);
  const transitioningRef = useRef(false);
  const mountedRef = useRef(false);

  const resetPageScroll = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const clearTransitionState = useCallback(() => {
    if (fallbackTimerRef.current !== null) window.clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = null;
    pendingPathRef.current = null;
    transitioningRef.current = false;
    timelineRef.current = null;
    document.documentElement.classList.remove("is-page-transitioning");
  }, []);

  const finishTransition = useCallback(() => {
    clearTransitionState();
    if (pageRef.current) {
      gsap.set(pageRef.current, { clearProps: "transform,opacity" });
      pageRef.current.querySelector<HTMLElement>("main")?.focus({ preventScroll: true });
    }
    if (yellowPanelRef.current) gsap.set(yellowPanelRef.current, { display: "none", ...clipPathState(diagonalWipe.start) });
    if (veilRef.current) gsap.set(veilRef.current, { display: "none", ...clipPathState(diagonalWipe.start) });
  }, [clearTransitionState]);

  const navigate = useCallback((href: string) => {
    if (transitioningRef.current) return;

    const destination = new URL(href, window.location.href);
    if (destination.origin !== window.location.origin) {
      window.location.assign(destination.href);
      return;
    }

    const page = pageRef.current;
    const yellowPanel = yellowPanelRef.current;
    const veil = veilRef.current;
    const route = routeRef.current;
    const progress = progressRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    transitioningRef.current = true;
    pendingPathRef.current = destination.pathname;
    document.documentElement.classList.add("is-page-transitioning");

    const commitNavigation = () => {
      resetPageScroll();
      router.push(`${destination.pathname}${destination.search}${destination.hash}`, { scroll: false });
      fallbackTimerRef.current = window.setTimeout(() => window.location.assign(destination.href), 8000);
    };

    if (reducedMotion || !page || !yellowPanel || !veil || !route || !progress) {
      commitNavigation();
      return;
    }

    route.textContent = getRouteLabel(destination.pathname);
    timelineRef.current?.kill();
    gsap.set(yellowPanel, { display: "block", ...clipPathState(diagonalWipe.start) });
    gsap.set(veil, { display: "grid", ...clipPathState(diagonalWipe.start) });
    gsap.set(route, { autoAlpha: 0, xPercent: -16, yPercent: 22, skewX: -7 });
    gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

    timelineRef.current = gsap.timeline({ onComplete: commitNavigation })
      .to(page, { scale: .9, opacity: 0, transformOrigin: "center center", duration: .5, force3D: true, ease: "performanceTransition" }, 0)
      .to(yellowPanel, { ...clipPathState(diagonalWipe.cover), duration: .5, force3D: true, ease: "performanceTransition" }, 0)
      .to(veil, { ...clipPathState(diagonalWipe.cover), duration: .5, force3D: true, ease: "performanceTransition" }, .08)
      .to(route, { autoAlpha: 1, xPercent: 0, yPercent: 0, skewX: 0, duration: .32, ease: "power3.out" }, .2)
      .to(progress, { scaleX: 1, duration: .32, ease: "power2.inOut" }, .21)
      .to(route, { autoAlpha: 1, duration: .07, ease: "none" }, .58);
  }, [resetPageScroll, router]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    const page = pageRef.current;
    const yellowPanel = yellowPanelRef.current;
    const veil = veilRef.current;
    const route = routeRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isExpectedRoute = transitioningRef.current && pendingPathRef.current === pathname;

    resetPageScroll();
    timelineRef.current?.kill();

    if (!page || reducedMotion) {
      finishTransition();
      return;
    }

    if (!isExpectedRoute || !yellowPanel || !veil || !route) {
      gsap.fromTo(page, { autoAlpha: 0, scale: .9 }, { autoAlpha: 1, scale: 1, duration: .45, clearProps: "transform,opacity", ease: "power3.out", onComplete: finishTransition });
      return;
    }

    gsap.set(page, { opacity: 0, scale: .9, transformOrigin: "center center" });
    timelineRef.current = gsap.timeline({ onComplete: finishTransition })
      .to(route, { autoAlpha: 0, xPercent: 18, yPercent: -20, skewX: -7, duration: .23, ease: "power2.in" }, 0)
      .to(veil, { ...clipPathState(diagonalWipe.end), duration: .52, force3D: true, ease: "performanceTransition" }, .02)
      .to(yellowPanel, { ...clipPathState(diagonalWipe.end), duration: .52, force3D: true, ease: "performanceTransition" }, .1)
      .to(page, { opacity: 1, scale: 1, duration: .54, force3D: true, ease: "performanceTransition" }, .08);
  }, [finishTransition, pathname, resetPageScroll]);

  useEffect(() => () => {
    timelineRef.current?.kill();
    if (fallbackTimerRef.current !== null) window.clearTimeout(fallbackTimerRef.current);
    document.documentElement.classList.remove("is-page-transitioning");
  }, []);

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      <div className={styles.wrapper}>
        {persistent}
        <div className={styles.page} key={pathname} ref={pageRef}>{children}</div>
        <div className={styles.yellowPanel} ref={yellowPanelRef} aria-hidden="true" />
        <div className={styles.veil} ref={veilRef} aria-hidden="true">
          <div className={styles.veilHead}><span>Performance Pass</span><span>Sempre avanti</span></div>
          <div className={styles.routeBlock}>
            <span className={styles.routeKicker}>Prossima destinazione</span>
            <span className={styles.route} ref={routeRef}>Performance Pass</span>
          </div>
          <span className={styles.motionMark}>Run / Jump / Throw</span>
          <div className={styles.progress}><span ref={progressRef} /></div>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
