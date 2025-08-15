"use client";
import { useParams } from "next/navigation";

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>(); 

  return <div>{courseId}</div>;
};

export default CourseDetailPage;
