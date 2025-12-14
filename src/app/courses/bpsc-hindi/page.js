"use client";

import coursesData from '@/data/courses.json';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscHindiPage() {
  const hindiCourse1 = coursesData.find(c => c.id === 1);
  const hindiCourse2 = coursesData.find(c => c.id === 3);
  return (
    <>
      <CourseDetailView course={hindiCourse1} />
      <CourseDetailView course={hindiCourse2} />
    </>
  );
}
