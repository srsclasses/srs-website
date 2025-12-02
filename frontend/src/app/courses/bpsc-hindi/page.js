"use client";

import { coursesData } from '@/data/courses';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function BpscHindiPage() {
  const course = coursesData[1];
  return <CourseDetailView course={course} />;
}
