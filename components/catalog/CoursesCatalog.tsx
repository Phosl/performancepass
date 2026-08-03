import { courses } from "@/lib/mock-data";
import { CourseCard } from "@/components/cards/CourseCard";
import styles from "./catalog.module.scss";

export function CoursesCatalog() {
  return <div className={`shell ${styles.courseGrid}`}>{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div>;
}
