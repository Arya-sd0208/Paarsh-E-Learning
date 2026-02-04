// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { coursesData } from '@/data/coursesData';

// interface CurriculumItem {
//     title: string;
//     topics: string;
// }

// interface CourseType {
//     id: number;
//     name: string;
//     image: string;
//     galleryImage?: string;
//     detailsImage?: string;
//     slug: string;
//     description: string;
//     overview: string;
//     shortDesc: string;
//     curriculum: CurriculumItem[];
//     videoUrl: string;
// }

// const CourseDetails = () => {
//     const params = useParams();
//     const slug = params?.slug as string;
//     const [course, setCourse] = useState<CourseType | null>(null);

//     useEffect(() => {
//         if (slug) {
//             const foundCourse = coursesData.find(c => c.slug === slug);
//             setCourse(foundCourse || null);
//         }
//     }, [slug]);

//     if (!course) {
//         return <div className="text-center py-16">Loading course details...</div>;
//     }

//     return (
//         <div className="w-full bg-white text-gray-800 mt-23">
//             <section className="bg-[#081738] py-16 px-6">
//                 <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//                     <div>
//                         <h2 className="text-4xl font-bold text-blue-700 mb-6">
//                             {course.name}
//                         </h2>
//                         <p className="text-lg mb-6 text-grey dark:text-white/70">
//                             {course.description}
//                         </p>

//                         {/* <ul className="space-y-2 mb-6">
//                             <li>Beginner to Advanced</li>
//                             <li>Duration: 6 Months</li>
//                             <li>Certificate Included</li>
//                             <li>Online & Offline Classes</li>
//                         </ul> */}

//                         <div className="block mx-auto mb-8 font-semibold text-midnight_text dark:text-white w-3/4 ml-1">
//                             <ul className="space-y-5">
//                                 <li className="flex items-start gap-4 ">
//                                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                                     <p className="text-lg font-normal text-grey dark:text-white/70">
//                                         100% Job Placement Guarantee
//                                     </p>
//                                 </li>
//                                 <li className="flex items-start gap-4 ">
//                                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                                     <p className="text-lg font-normal text-grey dark:text-white/70">
//                                         Live Classes with Expert Mentors
//                                     </p>
//                                 </li>
//                                 <li className="flex items-start gap-4 ">
//                                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                                     <p className="text-lg font-normal text-grey dark:text-white/70">
//                                         Industry-Relevant Curriculum
//                                     </p>
//                                 </li>
//                                 <li className="flex items-start gap-4 ">
//                                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                                     <p className="text-lg font-normal text-grey dark:text-white/70">
//                                         Hands-on Projects & Real-world Experience
//                                     </p>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="flex gap-4">
//                             <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
//                                 Enroll Now
//                             </button>
//                             {/* <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
//                                 Download Syllabus
//                             </button> */}
//                         </div>
//                     </div>

//                     <div className="flex justify-center">
//                         <Image
//                             src={course.detailsImage || course.image}
//                             alt={course.name}
//                             width={400}
//                             height={800}
//                             className="w-full h-full max-w-md rounded-lg"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </section>

//             <section className="py-10 max-w-7xl mx-auto mt-5 -mb-10">
//                 <h2 className="text-3xl font-semibold mb-4 text-blue-700">
//                     Course Overview
//                 </h2>
//                 <p className="text-lg leading-relaxed">
//                     {course.overview}
//                 </p>
//             </section>

//             <section className="py-14 px-6">
//                 <div className="max-w-5xl mx-auto">
//                     {/* <h2 className="text-3xl font-semibold mb-8 text-blue-700">
//                         Course Preview
//                     </h2> */}
//                     <div className="aspect-w-16 aspect-h-9">
//                         <iframe
//                             src={course.videoUrl}
//                             title="Course Preview"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             className="w-full rounded-lg shadow-md h-[450px]"
//                         ></iframe>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-gray-50 py-14 px-6">
//                 <div className="max-w-7xl mx-auto">
//                     <h2 className="text-3xl font-semibold mb-8 text-blue-700">
//                         Course Curriculum
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         {course.curriculum.map((item, index) => (
//                             <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
//                                 <h3 className="text-lg font-bold">{item.title}</h3>
//                                 <p>{item.topics}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* <section className="py-14 px-6 max-w-7xl mx-auto">
//                 <h2 className="text-3xl font-semibold mb-8 text-blue-700">
//                     Course Curriculum
//                 </h2>
//                 <div className="space-y-6">
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             Module 1: Web Fundamentals
//                         </h3>
//                         <p>HTML, CSS, Flexbox, Grid, Responsive Design</p>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             Module 2: JavaScript
//                         </h3>
//                         <p>Basics, DOM, ES6, APIs, Async Programming</p>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             Module 3: React.js
//                         </h3>
//                         <p>Components, Hooks, Routing, API Integration</p>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             Module 4: Backend Development
//                         </h3>
//                         <p>Node.js, Express.js, REST APIs, Authentication</p>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-lg">
//                             Module 5: Database & Deployment
//                         </h3>
//                         <p>MongoDB, SQL, GitHub, Cloud Deployment</p>
//                     </div>
//                 </div>
//             </section> */}

//             {/* <section className=" py-14 px-6">
//                 <div className="max-w-7xl mx-auto">
//                     <h2 className="text-3xl font-semibold mb-8 text-blue-700">
//                         Projects You Will Build
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         {[
//                             "Portfolio Website",
//                             "Admin Dashboard",
//                             "Authentication System",
//                             "REST API Backend",
//                             "Full Stack Web App",
//                             "Final Capstone Project",
//                         ].map((project, index) => (
//                             <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
//                                 {project}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section> */}

//             <section className="py-14 px-6 max-w-7xl mx-auto">
//                 <h2 className="text-3xl font-semibold mb-4 text-blue-700 -ml-6">
//                     Certification
//                 </h2>
//                 <p className="text-lg -ml-6">
//                     Receive an industry-recognized course completion certificate to
//                     enhance your resume and LinkedIn profile.
//                 </p>
//             </section>

//             <section className="bg-blue-800 py-14 px-6 text-center text-white">
//                 <h2 className="text-3xl font-bold mb-4">
//                     Start Your Learning Journey Today
//                 </h2>
//                 <p className="mb-6">
//                     Limited seats available. Enroll now and upgrade your skills.
//                 </p>
//                 <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
//                     Enroll Now
//                 </button>
//             </section>
//         </div>
//     );
// };

// export default CourseDetails;


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { coursesData } from "@/data/coursesData";

interface CurriculumItem {
  title: string;
  topics: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

interface CertificationInfo {
  title: string;
  description: string;
  image: string;
}

interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface CourseType {
  id: number;
  name: string;
  image: string;
  galleryImage?: string;
  detailsImage?: string;
  slug: string;
  description: string;
  overview: string;
  shortDesc: string;
  duration?: string;
  level?: string;
  mode?: string;
  rating?: number;
  reviews?: string;
  whatYouLearn?: string[];
  projects?: Project[];
  tools?: string[];
  certificationInfo?: CertificationInfo;
  instructor?: Instructor;
  curriculum: CurriculumItem[];
  videoUrl: string;
}

const CourseDetails = ({ slug }: { slug: string }) => {
  const [course, setCourse] = useState<CourseType | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      const foundCourse = coursesData.find((c) => c.slug === slug);
      setCourse(foundCourse || (null as any));
    }
  }, [slug]);

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">Loading course excellence...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] dark:bg-darkmode min-h-screen pt-24 pb-20">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4 text-sm font-medium">
        <ol className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <li className="hover:text-blue-600 transition-colors cursor-pointer" onClick={() => router.push('/')}>Home</li>
          <li><Icon icon="solar:alt-arrow-right-linear" width="16" /></li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer" onClick={() => router.push('/Course')}>Courses</li>
          <li><Icon icon="solar:alt-arrow-right-linear" width="16" /></li>
          <li className="text-blue-600">{course.name}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#6366F1] py-16 md:py-24 px-4">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                {course.level || 'Featured'}
              </span>
              <span className="text-white/60 text-sm">Course &gt; {course.level || 'Development'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {course.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-xl opacity-90 leading-relaxed">
              {course.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Icon icon="solar:user-bold" className="text-yellow-400" />
                <span className="text-sm font-bold">{course.reviews || '1.2k'} Students Enrolled</span>
              </div>
            </div>
          </div>

          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video w-full max-w-xl">
              <iframe
                src={course.videoUrl}
                title={course.name}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Info Bar */}
      <div className="container mx-auto max-w-7xl px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
              <Icon icon="solar:clock-circle-bold" width="24" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duration</p>
              <p className="text-sm md:text-base font-bold dark:text-white">{course.duration || '8 Weeks'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600">
              <Icon icon="solar:chart-square-bold" width="24" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Skill Level</p>
              <p className="text-sm md:text-base font-bold dark:text-white">{course.level || 'Beginner'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600">
              <Icon icon="solar:laptop-bold" width="24" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Learning Mode</p>
              <p className="text-sm md:text-base font-bold dark:text-white">{course.mode || 'Self-Paced'}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center text-yellow-600">
              <Icon icon="solar:star-bold" width="24" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Reviews</p>
              <div className="flex items-center gap-1 font-bold dark:text-white text-sm md:text-base">
                <span>{course.rating || '4.8'}</span>
                <div className="flex text-yellow-500">
                  <Icon icon="material-symbols:star-rounded" />
                </div>
                <span className="text-gray-400 font-normal">({course.reviews || '1.2k'})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left Column: Course Details */}
          <div className="lg:col-span-8 space-y-12">

            {/* What You'll Learn */}
            {/* {course.whatYouLearn && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">?</span>
                  What You'll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Icon icon="solar:check-circle-bold" className="text-blue-600" width="20" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )} */}

            {/* Course Overview */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold dark:text-white">Course Overview</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
                  {course.overview}
                </p>
              </div>
            </section>

            {/* Curriculum */}
            <section className="space-y-8 -mt-24">
              <h2 className="text-2xl font-bold dark:text-white">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors shadow-sm">
                    <div className="p-6 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.topics}</p>
                        </div>
                      </div>
                      <Icon icon="solar:alt-arrow-down-linear" className="text-gray-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            {course.projects && (
              <section className="space-y-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold dark:text-white text-center">Gain Proficiency with Real Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {course.projects.map((project, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-xl transition-all">
                      <div className="relative aspect-video">
                        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold mb-2 dark:text-white">{project.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Instructor Profile */}
            {/* {course.instructor && (
              <section className="bg-blue-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white/20 flex-shrink-0">
                    <Image src={course.instructor.image} alt={course.instructor.name} fill className="object-cover" unoptimized />
                  </div>
                  <div className="text-center md:text-left space-y-4">
                    <div>
                      <h3 className="text-3xl font-extrabold">{course.instructor.name}</h3>
                      <p className="text-blue-100 font-medium opacity-80">{course.instructor.role}</p>
                    </div>
                    <p className="text-blue-50/90 leading-relaxed italic max-w-lg">
                      "{course.instructor.bio}"
                    </p>
                  </div>
                </div>
              </section>
            )} */}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">

              {/* Tools & Stack */}
              {course.tools && (
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 mt-12">
                  <h3 className="font-bold mb-6 flex items-center gap-2 dark:text-white">
                    <Icon icon="solar:box-bold" className="text-blue-600" />
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {course.tools.map((tool, idx) => (
                      <div key={idx} className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md cursor-help overflow-hidden p-1.5" title={tool}>
                        <Icon icon={`logos:${tool}`} width="28" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enrollment Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-blue-50 dark:border-gray-800 ring-1 ring-blue-600/5 mt-10">

                <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95 mb-4">
                  Enroll Now
                </button>
                {/* <div className="text-center text-xs text-gray-400 font-medium mb-8">100% Money-Back Guarantee</div> */}

                <div className="space-y-5">
                  <p className="text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">This course includes:</p>
                  <ul className="space-y-4">
                    {[
                      { icon: "solar:video-library-bold", text: "85+ Video Lessons" },
                      { icon: "solar:play-stream-bold", text: "Live Class Access" },
                      { icon: "solar:file-download-bold", text: "Downloadable Resources" },
                      { icon: "solar:checklist-minimalistic-bold", text: "Lifetime Access" },
                      { icon: "solar:medal-star-bold", text: "Certificate of Completion" }
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <Icon icon={feature.icon} className="text-blue-600" width="20" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* Certification Banner */}
              <div className="bg-gradient-to-br from-[#0F172A] to-[#334155] rounded-3xl p-8 text-white relative overflow-hidden">
                <Icon icon="solar:medal-ribbon-bold" className="absolute bottom-[-20px] right-[-20px] w-40 h-40 text-white/5 -rotate-12" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Icon icon="solar:verified-check-bold" className="text-blue-400" width="32" />
                  </div>
                  <h3 className="text-xl font-bold font-primary">{course.certificationInfo?.title || 'Professional Certification'}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {course.certificationInfo?.description || 'Get recognized by industry leaders with our professional certificate.'}
                  </p>
                  <div className="pt-2">
                    <Image src="/images/course/certificate.png" alt="Certificate" width={200} height={140} className="rounded-lg border border-white/10" unoptimized />
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>

      <section className="container mx-auto max-w-7xl px-4 -mt-15">
        <div className="bg-[#081738] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[150%] bg-blue-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[120%] bg-indigo-500 rounded-full blur-[100px]"></div>
          </div>
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black font-primary">Start Your Learning Journey Today</h2>
            <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed font-medium">
              Limited seats available for the upcoming cohort. Master in-demand skills and accelerate your career path with industry experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <button className="px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95 w-full sm:w-auto text-lg">
                Enroll Today
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all w-full sm:w-auto text-lg">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
