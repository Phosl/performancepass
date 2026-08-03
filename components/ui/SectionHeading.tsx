import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./ui.module.scss";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeading({ eyebrow, title, description, href, linkLabel = "Vedi tutto" }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <div>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className={styles.sectionDescription}>{description}</p>}
      </div>
      {href && (
        <Link className={styles.textLink} href={href}>
          {linkLabel}<ArrowRight size={17} weight="bold" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
