import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { FaStar, FaClock } from "react-icons/fa6";

export interface Course {
  id: number;
  name: string;
  image: string;
  galleryImage?: string;
  detailsImage?: string;
  slug: string;
  description?: string;
  category?: string;
  date?: string;
  fee?: number;
  rating?: number;
  duration?: string;
  level?: string;
  mode?: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  const { name, galleryImage, image, slug, description, duration, level, mode, rating, fee } = course;
  const courseImage = galleryImage || image;
  return (
    <div className="group bg-white dark:bg-darkmode rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-800">
      {/* Course Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Link href={`/Course/${slug}`} className="block w-full h-full">
          <Image
            src={courseImage}
            alt={name}
            className="transition-transform duration-500 group-hover:scale-110 object-cover w-full h-full"
            fill
            quality={100}
            unoptimized
          />
        </Link>
      </div>

      {/* Course Content */}
      <div className="p-3.5 flex flex-col flex-1">
        <h3 className="mb-1">
          <Link
            href={`/Course/${slug}`}
            className="font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 text-base leading-tight transition-colors line-clamp-1"
          >
            {name}
          </Link>
        </h3>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Course Meta */}
        <div className="flex items-center gap-2.5 text-[11px] font-medium text-gray-600 dark:text-gray-400 mb-3 border-t border-gray-50 dark:border-gray-800 pt-3">
          <div className="flex items-center gap-1.5">
            <Icon icon="solar:clock-circle-linear" className="w-3 h-3 text-blue-600" />
            <span>{duration || "8 Weeks"}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span>{level || "Beginner"}</span>
          <span className="text-gray-300">|</span>
          <span>{mode || "Self-Paced"}</span>
        </div>

        {/* Course Fee (Optional on card) */}
        {fee && (
          <div className="mb-4">
            <span className="text-blue-600 font-extrabold text-lg">₹{fee.toLocaleString()}</span>
          </div>
        )}

        {/* Footer: Rating & Button */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>

          <Link
            href={`/Course/${slug}`}
            className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] rounded-lg transition-all shadow-md shadow-blue-200 dark:shadow-none hover:translate-y-[-2px]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
