"use client";

import { coursesData } from '@/data/courses';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscEnglishPage() {
  const course = coursesData[2];
  return <CourseDetailView course={course} />;
}
