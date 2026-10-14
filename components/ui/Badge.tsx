import styles from "./ui.module.scss";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "preview" | "member" | "neutral" | "accent";
}

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
