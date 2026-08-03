"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Play, SquaresFour, Gift, UserCircle } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import styles from "./AppHeader.module.scss";

const nav = [
  { href: "/", label: "Home", Icon: House },
  { href: "/dashboard", label: "Per te", Icon: SquaresFour },
  { href: "/video", label: "Video", Icon: Play },
  { href: "/vantaggi", label: "Vantaggi", Icon: Gift },
];

export function AppHeader() {
  const pathname = usePathname();
  const { profile } = useAthlete();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={styles.header}>
        <div className={`shell ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="Performance Pass, home">
            <span className={styles.logoMark}>P</span>
            <span>Performance<span>Pass</span></span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigazione principale">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? styles.active : ""}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/profilo" className={styles.profileLink} aria-label="Apri il profilo">
            <span className={styles.avatar}>{profile.name.slice(0, 1).toUpperCase()}</span>
            <span className={styles.profileText}><small>Profilo</small>{profile.name}</span>
          </Link>
        </div>
      </header>
      <nav className={styles.mobileNav} aria-label="Navigazione mobile">
        {[...nav.slice(0, 3), { href: "/profilo", label: "Profilo", Icon: UserCircle }].map(({ href, label, Icon }) => (
          <Link key={href} href={href} className={isActive(href) ? styles.activeMobile : ""}>
            <Icon size={21} weight={isActive(href) ? "fill" : "regular"} aria-hidden="true" /><span>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
