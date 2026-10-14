import Image from "next/image";
import styles from "./BrandLockup.module.scss";

type BrandLockupProps = {
  className?: string;
};

export function BrandLockup({ className }: BrandLockupProps) {
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <span className={rootClassName} role="img" aria-label="Performance Pass by Atletica TV">
      <span className={styles.productName} aria-hidden="true">
        <span>Performance</span>
        <strong>Pass</strong>
      </span>
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.network} aria-hidden="true">
        <small>by</small>
        <span className={styles.networkMark}>
          <Image
            src="/brand/atletica-tv-logo-official.svg"
            alt=""
            width={331}
            height={77}
          />
        </span>
      </span>
    </span>
  );
}
