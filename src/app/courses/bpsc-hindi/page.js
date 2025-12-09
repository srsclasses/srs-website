"use client";

import coursesData from '@/data/courses.json';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscHindiPage() {
  const course = coursesData.find(c => c.id === 1);
  return <CourseDetailView course={course} />;
}
