// // import React from 'react'
// // import { count } from '@/app/api/data'
// // import Image from 'next/image'

// // const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
// //   return (
// //     <section
// //       className={` ${
// //         isColorMode
// //           ? 'dark:bg-darklight bg-section'
// //           : 'dark:bg-darkmode bg-white'
// //       }`}>
// //       <div className='container mx-auto max-w-6xl px-4'>
// //         <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
// //           {count.map((item, index) => (
// //             <div
// //               key={index}
// //               className='flex flex-col items-center gap-[0.875rem]'
// //               data-aos='fade-up'
// //               data-aos-delay={`${index * 200}`}
// //               data-aos-duration='1000'>
// //               <Image
// //                 src={item.icon}
// //                 alt='icon'
// //                 width={30}
// //                 height={30}
// //                 unoptimized
// //               />
// //               <span className='text-3xl font-semibold text-midnight_text dark:text-white'>
// //                 {item.value}
// //               </span>
// //               <p className='text-base text-grey text-center max-w-[17.8125rem] w-full dark:text-white/50'>
// //                 {item.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Counter









// 'use client'

// import React, { useState } from 'react'
// import { count } from '@/app/api/data'
// import Image from 'next/image'
// import Link from 'next/link'

// const courseData = [
//   {
//     id: 1,
//     name: 'Full Stack Development',
//     image: '/images/course/fullstack.png',
//     slug: 'full-stack',
//     description: '',
//   },
//   {
//     id: 2,
//     name: 'MERN Stack Development',
//     image: '/images/course/mern.png',
//     slug: 'mern-stack',
//     description: '',
//   },
//   {
//     id: 3,
//     name: 'Python Programming',
//     image: '/images/course/python.png',
//     slug: 'python-programming',
//     description: '',
//   },
//   {
//     id: 4,
//     name: 'Data Science',
//     image: '/images/course/data.jpg',
//     slug: 'data-science',
//     description: '',
//   },
//   {
//     id: 5,
//     name: 'Artificial Intelligence (AI)',
//     image: '/images/course/ai.jpg',
//     slug: 'ai',
//     description: '',
//   },
//   {
//     id: 6,
//     name: 'Machine Learning',
//     image: '/images/course/machine.png',
//     slug: 'machine-learning',
//     description: '',
//   },
//   {
//     id: 7,
//     name: 'Generative AI',
//     image: '/images/course/generative.png',
//     slug: 'generative-ai',
//     description: '',
//   },
//   {
//     id: 8,
//     name: 'Cloud Computing (AWS)',
//     image: '/images/course/cloud.jpg',
//     slug: 'aws',
//     description: '',
//   },
//   {
//     id: 9,
//     name: 'DevOps',
//     image: '/images/course/devops.jpg',
//     slug: 'devops',
//     description: '',
//   },
//   {
//     id: 10,
//     name: 'C Language',
//     image: '/images/course/c.jpg',
//     slug: 'c-language',
//     description: '',
//   },
//   {
//     id: 11,
//     name: 'C++ Language',
//     image: '/images/course/cpp.jpg',
//     slug: 'c++-language',
//     description: '',
//   },
//   {
//     id: 12,
//     name: 'Java Programming',
//     image: '/images/course/java.jpg',
//     slug: 'java-programming',
//     description: '',
//   },
//   {
//     id: 13,
//     name: 'Java Full Stack Development',
//     image: '/images/course/javafullstack.jpg',
//     slug: 'java-full-stack',
//     description: '',
//   },
//   {
//     id: 14,
//     name: 'Python Full Stack Development',
//     image: '/images/course/pythonfull.webp',
//     slug: 'python-full-stack',
//     description: '',
//   },
//   {
//     id: 15,
//     name: 'Front-End Development (React)',
//     image: '/images/course/react.jpg',
//     slug: 'front-end-development-react',
//     description: '',
//   },
//   {
//     id: 16,
//     name: 'Back-End Development',
//     image: '/images/course/backend.jpg',
//     slug: 'back-end-development',
//     description: '',
//   },
//   {
//     id: 17,
//     name: 'Mobile App Development (Android / iOS)',
//     image: '/images/course/mobile.jpg',
//     slug: 'mobile-app-development-android-ios',
//     description: '',
//   },
//   {
//     id: 18,
//     name: 'Flutter Development',
//     image: '/images/course/flutterpng.png',
//     slug: 'flutter-development',
//     description: '',
//   },
//   {
//     id: 19,
//     name: 'Data Analytics',
//     image: '/images/course/data-analytics.jpg',
//     slug: 'data-analytics',
//     description: '',
//   },
//   {
//     id: 20,
//     name: 'Cyber Security',
//     image: '/images/course/cyber.jpg',
//     slug: 'cyber-security',
//     description: '',
//   },
//   {
//     id: 21,
//     name: 'Ethical Hacking',
//     image: '/images/course/ethical.jpg',
//     slug: 'ethical-hacking',
//     description: '',
//   },
//   {
//     id: 22,
//     name: 'UI/UX Design',
//     image: '/images/course/download.jpg',
//     slug: 'ui-ux-design',
//     description: '',
//   },
// ]

// const CourseCard = ({ course, index, isColorMode }: { course: any; index: number; isColorMode: Boolean }) => {
//   return (
//     <div className='group mb-0 relative'>
//       <div className='mb-8 overflow-hidden rounded-sm'>
//         <Link href={`/Course/${course.slug}`} aria-label='course cover' className='block'>
//           <Image
//             src={course.image}
//             alt={course.name}
//             className='w-full transition group-hover:scale-125'
//             width={408}
//             height={272}
//             style={{ width: '100%', height: 'auto' }}
//             quality={100}
//             unoptimized
//           />
//         </Link>
//       </div>
//       <div className='absolute top-0 bg-primary py-2 ml-4 mt-4 px-5 rounded-sm'>
//         <span className='text-white font-medium text-sm'>
//           Course
//         </span>
//       </div>
//       <div>
//         <h3>
//           <Link
//             href={`/Course/${course.slug}`}
//             className='mb-4 inline-block font-semibold text-dark text-black hover:text-primary dark:text-white dark:hover:text-primary text-[22px] leading-tight'>
//             {course.name}
//           </Link>
//         </h3>
//         <span className='text-sm font-semibold leading-loose text-SereneGray'>
//           {course.description || 'Professional Training'}
//         </span>
//       </div>
//     </div>
//   )
// }

// const cardCourseAssignments = [
//   courseData.slice(0, 9),     
//   courseData.slice(9, 21),    
//   courseData.slice(21, 22),   
// ]


// const CounterCard = ({ item, index, isColorMode, assignedCourses }: { item: any; index: number; isColorMode: Boolean; assignedCourses: any[] }) => {
//   const [courseIndex, setCourseIndex] = useState<number>(0)

//   const handleCoursePrev = () => {
//     setCourseIndex(
//       courseIndex - 1 < 0 ? assignedCourses.length - 1 : courseIndex - 1
//     )
//   }

//   const handleCourseNext = () => {
//     setCourseIndex((courseIndex + 1) % assignedCourses.length)
//   }

//   return (
//     <div
//       className='flex flex-col items-center gap-[0.875rem] p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-md dark:shadow-lg dark:box-shadow-dark hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 -mt-20'
//       data-aos='fade-up'
//       data-aos-delay={`${index * 200}`}
//       data-aos-duration='1000'>
//       <Image
//         src={item.icon}
//         alt='icon'
//         width={30}
//         height={30}
//         unoptimized
//       />
//       <span className='text-3xl font-semibold text-midnight_text dark:text-white'>
//         {item.value}
//       </span>
//       <p className='text-base text-grey text-center max-w-[17.8125rem] w-full dark:text-white/50'>
//         {item.description}
//       </p>

//       <div className='relative w-full'>
//         <div className='relative bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden'>
//           <div className='relative h-48 w-full'>
//             <Image
//               src={assignedCourses[courseIndex].image}
//               alt={assignedCourses[courseIndex].name}
//               fill
//               className='object-cover'
//               unoptimized
//             />
//           </div>

//           <div className='p-4'>
//             <h3 className='text-base font-semibold text-midnight_text dark:text-white mb-1'>
//               {assignedCourses[courseIndex].name}
//             </h3>
//             <p className='text-sm text-grey dark:text-white/50 mb-4'>
//               {assignedCourses[courseIndex].description}
//             </p>

//             <div className='flex justify-between items-center mb-4'>
//               <button
//                 onClick={handleCoursePrev}
//                 className='p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
//                 ❮
//               </button>
//               <span className='text-xs text-grey dark:text-white/50'>
//                 {courseIndex + 1} / {assignedCourses.length}
//               </span>
//               <button
//                 onClick={handleCourseNext}
//                 className='p-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
//                 ❯
//               </button>
//             </div>

//             <Link
//               href={`/Course/${assignedCourses[courseIndex].slug}`}
//               className='block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-md transition-colors'>
//               View Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
//   return (
//     <section
//       className={` ${isColorMode
//         ? 'dark:bg-darklight bg-section'
//         : 'dark:bg-darkmode bg-white'
//         }`}>
//       <div className='container mx-auto max-w-6xl px-4 py-16 md:py-24'>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {count.map((item, index) => (
//             <CounterCard
//               key={index}
//               item={item}
//               index={index}
//               isColorMode={isColorMode}
//               assignedCourses={cardCourseAssignments[index] || []}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Counter



'use client'

import React, { useState } from 'react'
import { count } from '@/app/api/data'
import Image from 'next/image'
import CourseCard from '@/components/SharedComponent/Course/CourseCard'
import { motion, AnimatePresence } from 'framer-motion'

const courseData = [
  // Top Rated Courses (Category 0)
  { id: 1, name: 'Full Stack Development', image: '/images/course/javafull.jpeg', slug: 'full-stack', rating: 4.8, description: 'Master both frontend and backend technologies.', duration: '6 Months' },
  { id: 2, name: 'MERN Stack Development', image: '/images/course/mern.jpeg', slug: 'mern-stack', rating: 4.7, description: 'Build modern apps with MongoDB, Express, React, and Node.', duration: '4 Months' },
  { id: 4, name: 'Data Science', image: '/images/course/datascience.jpeg', slug: 'data-science', rating: 4.6, description: 'Analyze data and derive insights using top tools.', duration: '5 Months' },
  { id: 5, name: 'Artificial Intelligence (AI)', image: '/images/course/Artificial.jpeg', slug: 'ai', rating: 4.8, description: 'Explore the future with AI and machine learning.', duration: '6 Months' },
  { id: 6, name: 'Machine Learning', image: '/images/course/ml.jpeg', slug: 'machine-learning', rating: 4.7, description: 'Build intelligent systems that learn from data.', duration: '4 Months' },
  { id: 8, name: 'Cloud Computing (AWS)', image: '/images/course/cloud.jpeg', slug: 'aws', rating: 4.5, description: 'Master the leading cloud services platform.', duration: '3 Months' },
  { id: 20, name: 'Cyber Security', image: '/images/course/cs.jpeg', slug: 'cyber-security', rating: 4.8, description: 'Learn to protect networks and systems from threats.', duration: '4 Months' },

  // Popular Courses (Category 1)
  { id: 3, name: 'Python Programming', image: '/images/course/PyPython.jpeg', slug: 'python-programming', rating: 4.9, description: 'Learn Python from basics to advanced levels.', duration: '2 Months' },
  { id: 12, name: 'Java Programming', image: '/images/course/java.jpeg', slug: 'java-programming', rating: 4.6, description: 'Master Java for enterprise-grade applications.', duration: '3 Months' },
  { id: 10, name: 'C Language', image: '/images/course/c.jpeg', slug: 'c-language', rating: 4.4, description: 'Build a strong foundation in low-level programming.', duration: '1 Month' },
  { id: 11, name: 'C++ Language', image: '/images/course/cpp.jpeg', slug: 'cpp-language', rating: 4.5, description: 'Learn object-oriented programming with C++.', duration: '2 Months' },
  { id: 13, name: 'Java Full Stack Development', image: '/images/course/javafull.jpeg', slug: 'java-full-stack', rating: 4.8, description: 'Comprehensive Java stack for full-scale projects.', duration: '6 Months' },
  { id: 14, name: 'Python Full Stack Development', image: '/images/course/pythonfull.jpeg', slug: 'python-full-stack', rating: 4.7, description: 'Build complete applications using Python and Django/Flask.', duration: '6 Months' },
  { id: 15, name: 'Front-End Development (React)', image: '/images/course/Reactjs.jpeg', slug: 'front-end-development-react', rating: 4.9, description: 'Create highly interactive UIs with React.', duration: '3 Months' },
  { id: 16, name: 'Back-End Development', image: '/images/course/backend.jpeg', slug: 'back-end-development', rating: 4.7, description: 'Focus on databases, servers, and business logic.', duration: '3 Months' },
  { id: 17, name: 'Mobile App Development (Android / iOS)', image: '/images/course/mobile.jpeg', slug: 'mobile-app-development-android-ios', rating: 4.6, description: 'Build native and cross-platform mobile apps.', duration: '4 Months' },

  // Specialized / Non-I.T. related roles (Category 2)
  { id: 18, name: 'Flutter Development', image: '/images/course/flutter.jpeg', slug: 'flutter-development', rating: 4.8, description: 'Create stunning apps for mobile, web, and desktop.', duration: '3 Months' },
  { id: 19, name: 'Data Analytics', image: '/images/course/data.jpeg', slug: 'data-analytics', rating: 4.7, description: 'Transform raw data into actionable business insights.', duration: '3 Months' },
  { id: 21, name: 'Ethical Hacking', image: '/images/course/ethical.jpeg', slug: 'ethical-hacking', rating: 4.9, description: 'Identify vulnerabilities and secure systems responsibly.', duration: '3 Months' },
  { id: 22, name: 'UI/UX Design', image: '/images/course/ui.jpeg', slug: 'ui-ux-design', rating: 4.7, description: 'Craft exceptional user experiences and visuals.', duration: '2 Months' },
]

const categoryCourses = [
  courseData.slice(0, 7),  // Top Rated Course
  courseData.slice(7, 16), // Popular Course
  courseData.slice(16, 20), // Non-I.T. Course
]

const Counter = ({ isColorMode }: { isColorMode: boolean }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section className={isColorMode ? 'bg-section' : 'bg-white'}>
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">

        <AnimatePresence mode='wait'>
          {activeCategory === null ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {count.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveCategory(index)}
                  className="
                        group relative cursor-pointer p-10 rounded-[40px] 
                        bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/5
                        shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(43,66,120,0.1)]
                        transition-all duration-500 overflow-hidden
                    "
                >
                  {/* Decorative Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating Circle Decoration */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />

                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 p-[1px] rounded-[40px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-primary/20 transition-all duration-700">
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[39px] -z-10" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Container with Glass Effect */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-lg border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                        <Image
                          src={item.icon}
                          alt=""
                          width={48}
                          height={48}
                          className="w-12 h-12 transform transition-transform duration-500"
                          style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(34%) saturate(2338%) hue-rotate(198deg) brightness(91%) contrast(83%)' }}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-primary dark:text-white mb-4 text-center tracking-tight group-hover:text-secondary transition-colors duration-300">
                      {item.value}
                    </h3>

                    <p className="text-gray-500 dark:text-white/60 text-center leading-relaxed font-medium mb-8">
                      {item.description || "Explore a curated selection of top-tier professional courses."}
                    </p>

                    {/* View Details Indicator */}
                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span>View Courses</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="active-view"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative w-full overflow-hidden"
            >
              <div className="bg-gradient-to-br from-primary via-secondary/20 to-white rounded-3xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 lg:gap-10  overflow-y-hidden overflow-x-hidden relative  max-h-[600px] lg:max-h-[550px]">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-80 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-80 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                {/* Left Panel */}
                <div className="lg:w-1/3 flex flex-col justify-center z-10 space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-semibold border border-primary/10 backdrop-blur-sm text-white">
                      Featured Collection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight text-primary">
                      {count[activeCategory].value}
                    </h2>
                    <p className="text-primary/80 text-lg leading-relaxed max-w-md">
                      Explore our hand-picked selection of top courses in {count[activeCategory].value}. Level up your skills today!
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveCategory(null)}
                    className="
                            group flex items-center gap-3 px-8 py-4 bg-primary text-white 
                            rounded-xl font-bold text-lg shadow-lg shadow-primary/20
                            hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-fit
                        "
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <span>Back to Categories</span>
                  </button>
                </div>

                {/* Right Scrollable Panel - Restored Slider with Reduced Scale */}
                <div className="lg:w-2/3 relative z-10 flex items-center">
                  <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-3 snap-x snap-mandatory w-full scrollbar-hide">
                    {categoryCourses[activeCategory]?.map(course => (
                      <motion.div
                        key={course.id}
                        className="
                            snap-start
                            min-w-[240px] max-w-[240px]
                            sm:min-w-[280px] sm:max-w-[280px]
                            md:min-w-[310px] md:max-w-[310px]
                            lg:min-w-[330px] lg:max-w-[330px]
                            "
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Counter
