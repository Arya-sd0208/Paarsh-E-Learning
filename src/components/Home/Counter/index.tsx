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
  { id: 1, name: 'Full Stack Development', image: '/images/course/fullstack.png', slug: 'full-stack' },
  { id: 2, name: 'MERN Stack Development', image: '/images/course/mern.png', slug: 'mern-stack' },
  { id: 3, name: 'Python Programming', image: '/images/course/python.png', slug: 'python-programming' },
  { id: 4, name: 'Data Science', image: '/images/course/data.jpg', slug: 'data-science' },
  { id: 5, name: 'Artificial Intelligence (AI)', image: '/images/course/ai.jpg', slug: 'ai' },
  { id: 6, name: 'Machine Learning', image: '/images/course/machine.png', slug: 'machine-learning' },
  { id: 7, name: 'Generative AI', image: '/images/course/generative.png', slug: 'generative-ai' },
  { id: 8, name: 'Cloud Computing (AWS)', image: '/images/course/cloud.jpg', slug: 'aws' },
  { id: 9, name: 'DevOps', image: '/images/course/devops.jpg', slug: 'devops' },
  { id: 10, name: 'C Language', image: '/images/course/c.jpg', slug: 'c-language' },
  { id: 11, name: 'C++ Language', image: '/images/course/cpp.jpg', slug: 'cpp-language' },
  { id: 12, name: 'Java Programming', image: '/images/course/java.jpg', slug: 'java-programming' },
  { id: 13, name: 'Java Full Stack Development', image: '/images/course/javafullstack.jpg', slug: 'java-full-stack' },
  { id: 14, name: 'Python Full Stack Development', image: '/images/course/pythonfull.webp', slug: 'python-full-stack' },
  { id: 15, name: 'Front-End Development (React)', image: '/images/course/react.jpg', slug: 'front-end-development-react' },
  { id: 16, name: 'Back-End Development', image: '/images/course/backend.jpg', slug: 'back-end-development' },
  { id: 17, name: 'Mobile App Development (Android / iOS)', image: '/images/course/mobile.jpg', slug: 'mobile-app-development-android-ios' },
  { id: 18, name: 'Flutter Development', image: '/images/course/flutterpng.png', slug: 'flutter-development' },
  { id: 19, name: 'Data Analytics', image: '/images/course/data-analytics.jpg', slug: 'data-analytics' },
  { id: 20, name: 'Cyber Security', image: '/images/course/cyber.jpg', slug: 'cyber-security' },
  { id: 21, name: 'Ethical Hacking', image: '/images/course/ethical.jpg', slug: 'ethical-hacking' },
  { id: 22, name: 'UI/UX Design', image: '/images/course/download.jpg', slug: 'ui-ux-design' },
]

const categoryCourses = [
  courseData.slice(0, 9),
  courseData.slice(9, 12),
  courseData.slice(12, 13),
]

const Counter = ({ isColorMode }: { isColorMode: boolean }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section className={isColorMode ? 'bg-section' : 'bg-white'}>
      <div className="container mx-auto max-w-7xl px-2 py-4 sm:py-2 md:py-15 ">

        {activeCategory === null && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {count.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveCategory(index)}
                className="group relative cursor-pointer p-5 sm:p-6 md:p-8 rounded-xl border shadow-md"
              >
                <span
                  className="
                    absolute bottom-0 right-0
                    w-0 h-0
                    bg-blue-600/15
                    rounded-tl-[100%]
                    group-hover:w-[75%]
                    group-hover:h-[75%]
                    transition-all duration-500 ease-out
                  "
                />

                <div className="relative z-10">
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold mt-4 text-center text-gray-800">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {activeCategory !== null && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="mb-4 sm:mb-6 px-4 py-2 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 rounded"
              >
                ← Back
              </button>

              <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-3 snap-x snap-mandatory">
                {categoryCourses[activeCategory].map(course => (
                  <motion.div
                    key={course.id}
                    className="
                      snap-start
                      min-w-[260px] max-w-[260px]
                      sm:min-w-[300px] sm:max-w-[300px]
                      md:min-w-[340px] md:max-w-[340px]
                      lg:min-w-[380px] lg:max-w-[380px]
                    "
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                  >
                    <CourseCard course={course}  />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default Counter
