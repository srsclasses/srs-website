"use client";

import { useParams } from 'next/navigation';
import coursesData from '@/data/courses.json';
import CourseDetailView from '@/components/courses/CourseDetailView';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = parseInt(params.id);
  const course = coursesData.find(c => c.id === courseId);

  return <CourseDetailView course={course} />;
}
