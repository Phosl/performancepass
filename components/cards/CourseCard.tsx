"use client";

import Image from "next/image";
import { Check, LockSimple, Play } from "@phosphor-icons/react/dist/ssr";
import type { MiniCourse } from "@/lib/types";
import { canAccessContent } from "@/lib/content-access";
import { useMember } from "@/context/MemberContext";
import { Badge } from "@/components/ui/Badge";
import styles from "./cards.module.scss";

export function CourseCard({ course, compact = false }: { course: MiniCourse; compact?: boolean }) {
  const { profile } = useMember();
  const previewCount = course.lessons.filter((lesson) => lesson.access === "preview").length;

  return (
    <article className={`${styles.courseCard} ${compact ? styles.courseCompact : ""}`}>
      <div className={styles.courseMedia}>
        <Image src={course.image} alt={course.imageAlt} fill sizes="(max-width: 760px) 90vw, 40vw" />
        <div className={styles.courseOverlay}>
          <Badge tone="preview">{previewCount} {previewCount === 1 ? "anteprima" : "anteprime"}</Badge>
          <span>{course.lessons.length} lezioni</span>
        </div>
      </div>
      <div className={styles.courseBody}>
        <p className={styles.cardEyebrow}>{course.category} · {course.level}</p>
        <h3>{course.title}</h3>
        <p className={styles.courseSubtitle}>{course.subtitle}</p>
        <ol className={styles.lessonList}>
          {course.lessons.map((lesson, index) => {
            const accessible = canAccessContent(lesson.access, profile.status);
            return (
              <li key={lesson.title} className={accessible ? undefined : styles.lessonLocked}>
                <span className={styles.lessonIcon}>
                  {accessible ? (index === 0 ? <Play size={13} weight="fill" aria-hidden="true" /> : <Check size={14} weight="bold" aria-hidden="true" />) : <LockSimple size={13} weight="fill" aria-hidden="true" />}
                </span>
                <span>{lesson.title}</span>
                <small>{lesson.duration} min</small>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
