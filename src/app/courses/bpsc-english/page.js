"use client";

import coursesData from '@/data/courses.json';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscEnglishPage() {
  const course = coursesData.find(c => c.id === 2);
  return <CourseDetailView course={course} />;
}
