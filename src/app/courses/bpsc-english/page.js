"use client";

import coursesData from '@/data/courses.json';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscEnglishPage() {
  const englishCourse1 = coursesData.find(c => c.id === 2);
  const englishCourse2 = coursesData.find(c => c.id === 5);
  return (
    <>
      <CourseDetailView course={englishCourse1} />
      <CourseDetailView course={englishCourse2} />
    </>
  );
}
