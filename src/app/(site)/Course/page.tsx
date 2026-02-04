"use client";
import React, { useState, useMemo } from 'react';
import { Icon } from '@iconify/react';
import CourseCard from '@/components/SharedComponent/Course/CourseCard';
import { coursesData } from '@/data/coursesData';

const categories = [
  "All Courses",
  "Web Development",
  "Data Science",
  "Design",
  "Programming",
  "Cloud & DevOps",
  "Cyber Security"
];

const CoursePage = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === "All Courses" ||
        (activeCategory === "Web Development" && (course.name.includes("Full Stack") || course.name.includes("MERN") || course.name.includes("Front-End") || course.name.includes("Back-End"))) ||
        (activeCategory === "Data Science" && (course.name.includes("Data Science") || course.name.includes("Data Analytics"))) ||
        (activeCategory === "Design" && course.name.includes("Design")) ||
        (activeCategory === "Programming" && (course.name.includes("Python") || course.name.includes("C ") || course.name.includes("C++") || course.name.includes("Java"))) ||
        (activeCategory === "Cloud & DevOps" && (course.name.includes("Cloud") || course.name.includes("DevOps"))) ||
        (activeCategory === "Cyber Security" && (course.name.includes("Cyber") || course.name.includes("Hacking")));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-gray-50 dark:bg-darkmode min-h-screen pb-20 pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-200 to-white py-20 px-4 overflow-hidden border-b border-gray-100 dark:border-none">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-50px] left-[-30px] w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6 drop-shadow-sm">
            Our Courses
          </h1>
          <p className="text-blue-900/70 text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">
            Industry-oriented courses designed to build real-world skills and propel your career forward.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon icon="solar:magnifer-linear" className="text-gray-400 w-6 h-6 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search courses by name or skill..."
              className="w-full pl-12 pr-4 py-4 md:py-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl focus:ring-4 focus:ring-blue-500/20 outline-none text-gray-700 dark:text-gray-200 text-lg transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories & Filter Tabs */}
      <section className="container mx-auto max-w-7xl px-4 -mt-8 relative z-20">
        <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 backdrop-blur-md">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto max-w-7xl px-4 mt-4 pb-20">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course as any} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl shadow-inner border border-dashed border-gray-300 dark:border-gray-700">
            <Icon icon="solar:document-add-linear" className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400">No courses found</h3>
            <p className="text-gray-400">Try adjusting your search or category filter</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CoursePage;
