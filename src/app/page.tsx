"use client";

import { useAllCoursesQuery } from "@/redux/features/learn/learn.api";
import Container from "@/utils/Container";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TCourse {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  price: string;
}

const HomePage = () => {
  const { data: courses } = useAllCoursesQuery("");

  return (
    <Container>
      <div>
        <h1 className="text-2xl pb-6 font-medium">Our Courses</h1>
        <div>
          {courses?.data?.length > 0 ? (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
              {courses?.data?.map((course: TCourse) => (
                <Link
                href={`/${course._id}`}
                  className="border p-4 rounded-[8px] flex flex-col"
                  key={course._id}
                >
                  <Image
                    alt=""
                    className="h-48 w-full rounded-[8px] object-cover"
                    src={course?.thumbnailUrl}
                    height={200}
                    width={600}
                  ></Image>
                  <h1 className="font-medium py-2">{course?.title}</h1>
                  <h1>{course?.description}</h1>
                  <div className="mt-auto flex justify-between items-center">
                    <div>
                      <div className="flex gap-1 pt-4 items-center">
                        <Star size={15} className="text-orange-300"></Star>
                        <Star size={15} className="text-orange-300"></Star>
                        <Star size={15} className="text-orange-300"></Star>
                        <Star size={15} className="text-orange-300"></Star>
                        <Star size={15} className="text-orange-300"></Star>
                        <p>(5.0)</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Image
                          alt=""
                          className="h-8 w-8 rounded-full object-cover"
                          src={
                            "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                          }
                          height={200}
                          width={600}
                        ></Image>
                        <h1 className="font-medium">John Smith</h1>
                      </div>
                    </div>
                    <div className="bg-black px-2 py-1 bg-opacity-20 rounded-xl">
                      <h1 className="font-medium">${course?.price}</h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            "No courses found"
          )}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
