"use client";

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styles from "./PageTransition.module.scss";

gsap.registerPlugin(CustomEase);
CustomEase.create("performanceTransition", ".72, 0, .2, 1");

const diagonalWipe = {
  start: "polygon(-110% 100%, -42% 100%, 8% 150%, -110% 150%)",
  cover: "polygon(-10% -10%, 110% -10%, 110% 110%, -10% 110%)",
  end: "polygon(102% -50%, 170% -50%, 220% 0%, 102% 0%)",
} as const;

const accentWipe = {
  start: "polygon(-115% 100%, -109% 100%, -59% 150%, -65% 150%)",
  end: "polygon(112% -50%, 118% -50%, 168% 0%, 162% 0%)",
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
  const accentPanelRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<HTMLSpanElement>(null);
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
    if (accentPanelRef.current) gsap.set(accentPanelRef.current, { display: "none", ...clipPathState(accentWipe.start) });
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
    const accentPanel = accentPanelRef.current;
    const veil = veilRef.current;
    const route = routeRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    transitioningRef.current = true;
    pendingPathRef.current = destination.pathname;
    document.documentElement.classList.add("is-page-transitioning");

    const commitNavigation = () => {
      resetPageScroll();
      router.push(`${destination.pathname}${destination.search}${destination.hash}`, { scroll: false });
      fallbackTimerRef.current = window.setTimeout(() => window.location.assign(destination.href), 8000);
    };

    if (reducedMotion || !page || !accentPanel || !veil || !route) {
      commitNavigation();
      return;
    }

    route.textContent = getRouteLabel(destination.pathname);
    timelineRef.current?.kill();
    gsap.set(accentPanel, { display: "block", ...clipPathState(accentWipe.start) });
    gsap.set(veil, { display: "grid", ...clipPathState(diagonalWipe.start) });
    gsap.set(route, { autoAlpha: 0, yPercent: 18 });

    timelineRef.current = gsap.timeline({ onComplete: commitNavigation })
      .to(page, { scale: .97, opacity: .12, transformOrigin: "center center", duration: .42, force3D: true, ease: "performanceTransition" }, 0)
      .to(veil, { ...clipPathState(diagonalWipe.cover), duration: .44, force3D: true, ease: "performanceTransition" }, .03)
      .to(accentPanel, { ...clipPathState(accentWipe.end), duration: .52, force3D: true, ease: "performanceTransition" }, 0)
      .to(route, { autoAlpha: 1, yPercent: 0, duration: .26, ease: "power3.out" }, .17)
      .to(route, { autoAlpha: 1, duration: .04, ease: "none" }, .52);
  }, [resetPageScroll, router]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    const page = pageRef.current;
    const accentPanel = accentPanelRef.current;
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

    if (!isExpectedRoute || !accentPanel || !veil || !route) {
      gsap.fromTo(page, { autoAlpha: 0, scale: .97 }, { autoAlpha: 1, scale: 1, duration: .35, clearProps: "transform,opacity", ease: "power3.out", onComplete: finishTransition });
      return;
    }

    gsap.set(page, { opacity: .16, scale: .97, transformOrigin: "center center" });
    timelineRef.current = gsap.timeline({ onComplete: finishTransition })
      .to(route, { autoAlpha: 0, yPercent: -14, duration: .18, ease: "power2.in" }, 0)
      .to(veil, { ...clipPathState(diagonalWipe.end), duration: .44, force3D: true, ease: "performanceTransition" }, .02)
      .to(page, { opacity: 1, scale: 1, duration: .46, force3D: true, ease: "performanceTransition" }, .02);
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
        <div className={styles.accentPanel} ref={accentPanelRef} aria-hidden="true" />
        <div className={styles.veil} ref={veilRef} aria-hidden="true">
          <span className={styles.route} ref={routeRef}>Home</span>
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
