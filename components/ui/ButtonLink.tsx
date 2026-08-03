import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./ui.module.scss";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", arrow = false, className = "" }: ButtonLinkProps) {
  return (
    <TransitionLink className={`${styles.button} ${styles[variant]} ${className}`} href={href}>
      <span>{children}</span>
      {arrow && <ArrowRight size={18} weight="bold" aria-hidden="true" />}
    </TransitionLink>
  );
}
