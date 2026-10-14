"use client";

import { usePathname } from "next/navigation";
import { Gift, House, IdentificationCard, Play, Storefront } from "@phosphor-icons/react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./AppHeader.module.scss";

const nav = [
  { href: "/", label: "Home", Icon: House, activePaths: ["/"] },
  { href: "/vantaggi", label: "Vantaggi", Icon: Gift, activePaths: ["/vantaggi"] },
  { href: "/contenuti", label: "Contenuti", Icon: Play, activePaths: ["/contenuti", "/video", "/corsi"] },
  { href: "/partner", label: "Partner", Icon: Storefront, activePaths: ["/partner"] },
  { href: "/il-mio-pass", label: "Il mio Pass", Icon: IdentificationCard, activePaths: ["/il-mio-pass"] },
] as const;

function matchesPath(pathname: string, paths: readonly string[]) {
  return paths.some((path) => path === "/"
    ? pathname === "/"
    : pathname === path || pathname.startsWith(`${path}/`));
}

export function AppHeader() {
  const pathname = usePathname();
  const joinIsActive = matchesPath(pathname, ["/iscriviti"]);

  return (
    <>
      <header className={styles.header}>
        <div className={`shell ${styles.inner}`}>
          <TransitionLink href="/" className={styles.logo} aria-label="Performance Pass by Atletica TV, home">
            <BrandLockup className={styles.brandLockup} />
          </TransitionLink>

          <nav className={styles.desktopNav} aria-label="Navigazione principale">
            {nav.map((item) => {
              const active = matchesPath(pathname, item.activePaths);
              return (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className={active ? styles.active : undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </TransitionLink>
              );
            })}
            <TransitionLink
              href="/iscriviti"
              className={`${styles.joinAction} ${joinIsActive ? styles.joinActive : ""}`}
              aria-current={joinIsActive ? "page" : undefined}
            >
              Iscriviti
            </TransitionLink>
          </nav>

          <TransitionLink
            href="/iscriviti"
            className={`${styles.mobileJoin} ${joinIsActive ? styles.joinActive : ""}`}
            aria-current={joinIsActive ? "page" : undefined}
          >
            Iscriviti
          </TransitionLink>
        </div>
      </header>

      <nav className={styles.mobileNav} aria-label="Navigazione principale mobile">
        {nav.map((item) => {
          const active = matchesPath(pathname, item.activePaths);
          const Icon = item.Icon;
          return (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={active ? styles.activeMobile : undefined}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={20} weight={active ? "fill" : "regular"} aria-hidden="true" />
              <span>{item.label}</span>
            </TransitionLink>
          );
        })}
      </nav>
    </>
  );
}
