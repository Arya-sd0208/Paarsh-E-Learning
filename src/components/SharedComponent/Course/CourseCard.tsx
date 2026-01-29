import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Course {
  id: number;
  name: string;
  image: string;
  galleryImage?: string;
  detailsImage?: string;
  slug: string;
  // description: string;
  date?: string;
  price?: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const { name, galleryImage, image, slug, date, price } = course;
  const courseImage = galleryImage || image;
  return (
    <div className="group mb-0 relative bg-white dark:bg-darkmode rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-full">
      <div className="mb-8 overflow-hidden rounded-sm">
        <Link href={`/Course/${slug}`} aria-label="course cover" className="block">
          <Image
            src={courseImage}
            alt={name}
            className="w-full transition group-hover:scale-125"
            width={408}
            height={272}
            style={{ width: '350px', height: '250px' }}
            quality={100}
            unoptimized
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3>
            <Link
              href={`/Course/${slug}`}
              className="mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-tight"
            >
              {name}
            </Link>
          </h3>
          {date && (
            <span className="text-sm font-semibold leading-loose text-SereneGray">
              {new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
            </span>
          )}
          {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {description}
          </p> */}
        </div>
        <div className="mt-6">
          <Link
            href={`/Course/${slug}`}
            className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
