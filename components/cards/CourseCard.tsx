import Image from "next/image";
import { Check, LockSimple, Play } from "@phosphor-icons/react/dist/ssr";
import type { MiniCourse } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import styles from "./cards.module.scss";

export function CourseCard({ course, compact = false }: { course: MiniCourse; compact?: boolean }) {
  return (
    <article className={`${styles.courseCard} ${compact ? styles.courseCompact : ""}`}>
      <div className={styles.courseMedia}>
        <Image src={course.image} alt={course.imageAlt} fill sizes="(max-width: 760px) 90vw, 40vw" />
        <div className={styles.courseOverlay}>
          <Badge tone="free">2 lezioni free</Badge>
          <span>{course.lessons.length} lezioni</span>
        </div>
      </div>
      <div className={styles.courseBody}>
        <p className={styles.cardEyebrow}>{course.category} · {course.level}</p>
        <h3>{course.title}</h3>
        <p className={styles.courseSubtitle}>{course.subtitle}</p>
        <ol className={styles.lessonList}>
          {course.lessons.map((lesson, index) => (
            <li key={lesson.title}>
              <span className={styles.lessonIcon}>
                {lesson.free ? (index === 0 ? <Play size={13} weight="fill" aria-hidden="true" /> : <Check size={14} weight="bold" aria-hidden="true" />) : <LockSimple size={13} weight="fill" aria-hidden="true" />}
              </span>
              <span>{lesson.title}</span>
              <small>{lesson.duration} min</small>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
