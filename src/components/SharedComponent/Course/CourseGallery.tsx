import React from "react";
import CourseCard from "@/components/SharedComponent/Course/CourseCard";
import { coursesData } from "@/data/coursesData";

const CourseGallery = ({ courses = coursesData }: { courses?: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <CourseCard key={course.slug || index} course={course} />
      ))}
    </div>
  );
};

export default CourseGallery;
