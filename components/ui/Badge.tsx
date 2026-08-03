import styles from "./ui.module.scss";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "free" | "premium" | "neutral" | "accent";
}

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
