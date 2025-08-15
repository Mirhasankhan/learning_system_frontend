"use client";
import { useCourseQuery, useLectureQuery } from "@/redux/features/learn/learn.api";
import Container from "@/utils/Container";
import { useParams } from "next/navigation";
import { useState } from "react";

interface TModule {
  moduleNumber: number;
  title: string;
  lectures: [];
}

const CourseDetailPage = () => {
  const [lectureId, setLectureId] = useState("")
  const { courseId } = useParams<{ courseId: string }>();
  const { data: course } = useCourseQuery(courseId);
  const {data : lecture}  = useLectureQuery(lectureId)
  const modules = course?.data?.modules;
  console.log(lecture);

  return (
    <Container>
      <div className="grid grid-cols-3 gap-12 py-12">
        <div className="col-span-2 bg-red-400">
          lectured tuto
        </div>
        <div className="col-span-1">
          <h1>{course?.data?.title}</h1>
          <div>
            {modules?.map((module: TModule, index: number) => (
              <div key={index}>
                <h1>Module: {module?.moduleNumber}</h1>
                <h1>Module: {module?.title}</h1>
                {module?.lectures?.map((lecture: any) => (
                  <p className="cursor-pointer" onClick={()=>setLectureId(lecture?._id)} key={lecture.title}>{lecture.title}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseDetailPage;
