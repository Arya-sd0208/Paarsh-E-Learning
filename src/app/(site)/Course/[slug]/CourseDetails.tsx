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
import { Toaster } from 'react-hot-toast';
import EnrollModal from "@/components/SharedComponent/Course/EnrollModal";
// import VideoPlayer from '@/components/SharedComponent/Course/VideoPlayer';
import { getImgPath } from '@/utils/image';

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
  designation?: string;
  experience?: string;
  rating?: number;
  reviewsCount?: string;
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
  category: string;
  overview: string;
  shortDesc: string;
  duration?: string;
  level?: string;
  mode?: string;
  rating?: number;
  reviews?: string;
  fee?: number;
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
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      const foundCourse = coursesData.find((c) => c.slug === slug);
      setCourse(foundCourse || (null as any));
    }
  }, [slug]);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">Loading course excellence...</p>
      </div>
    );
  }

  const syllabusMap: Record<string, string> = {
    "data-science": "1 Data Science.pdf",
    "salesforce-development": "2 Salesforce Development.pdf",
    "project-manager": "10 Project Manager (Project Planning).pdf",
    "ethical-hacking": "11 Ethical Hacking.pdf",
    "software-testing": "12 Software Testing.pdf",
    "ui-ux": "13 UI UX.pdf",
    "api-automation-testing": "14 API Automation Testing.pdf",
    "chatgpt-for-scrum-masters": "15 ChatGPT for Scrum Masters (AI in Agile & Scrum Practices).pdf",
    "game-development": "16 Game Development (2D,3D,Game Engines).pdf",
    "machine-learning": "17 Machine Learning.pdf",
    "artificial-intelligence": "18 Artificial Intelligence.pdf",
    "digital-marketing": "19 Digital Marketing (SEO, Social Media).pdf",
    "network-security": "20 Network Security.pdf",

    "back-end-development": "Back-End Development.pdf",
    "language-syllabus": "Language Syllabus.pdf",
    "c-language": "C Language Syllabus.pdf",
    "cpp-language": "C++ Language Syllabus.pdf",
    "cloud-computing": "Cloud Computing (AWS Azure).pdf",
    "data-architecture": "Data Architecture (Data Modeling).pdf",
    "flutter-development": "Flutter Development.pdf",
    "front-end-development": "Front-End Development.pdf",
    "full-stack-web-development": "Full Stack Web Development.pdf",
    "ios-development": "iOS Development (Swift & Apple).pdf",
    "java-full-stack": "Java Full Stack Development (Core + Advanced).pdf",
    "java-programming": "Java Programming (Core Java & OOP).pdf",
    "kotlin-development": "Kotlin Development.pdf",
    "mern-stack": "MERN Stack Development.pdf",
    "mobile-app-development": "Mobile App Development (Android).pdf",
    "dotnet-development": "NET Development (C#, ASP.NET).pdf",
    "power-bi": "Power BI.pdf",
    "python-full-stack": "Python Full Stack Development.pdf",
    "python-programming": "Python Programming (Core Python).pdf",
    "react-development": "React Development.pdf",
    "react-native": "React Native Development.pdf",
    "rust-programming": "Rust Programming Language.pdf",
    "sql-data-science": "SQL for Data Science.pdf",
    "tableau": "Tableau (Data Visualization & Dashboards).pdf",
    "wordpress-development": "WordPress Development.pdf"
  };


  return (
    <div className="bg-[#F8FAFC] dark:bg-darkmode min-h-screen pt-20 pb-20">
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-2 text-sm font-medium">
        <ol className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <li className="hover:text-blue-600 transition-colors cursor-pointer" onClick={() => router.push('/')}>Home</li>
          <li><Icon icon="solar:alt-arrow-right-linear" width="16" /></li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer" onClick={() => router.push('/Course')}>Courses</li>
          <li><Icon icon="solar:alt-arrow-right-linear" width="16" /></li>
          <li className="text-blue-600">{course.name}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#6366F1] py-10 md:py-14 px-4">
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
      <main className="container mx-auto max-w-7xl px-4 pt-2 pb-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Course Details */}
          <div className="lg:col-span-8 space-y-2">

            {/* What You'll Learn */}
            {/* {course.whatYouLearn && (
              <section className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-bold mb-8 dark:text-white flex items-center gap-3">
                <h2 className="text-2xl font-bold mb-8 text-[#2B4278] dark:text-white flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#01A0E2] rounded-lg flex items-center justify-center text-white text-sm">?</span>
                  What You'll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Icon icon="solar:check-circle-bold" className="text-[#01A0E2]" width="20" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )} */}

            {/* Course Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#2B4278] dark:text-white">Course Overview</h2>
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-justify">
                  {course.overview}
                </p>
              </div>
            </section>

            {/* Curriculum */}
            <section className="space-y-2 -mt-19">
              <h2 className="text-2xl font-bold text-[#2B4278] dark:text-white">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className={`group bg-white dark:bg-gray-900 border ${activeAccordion === index ? 'border-[#01A0E2] ring-1 ring-[#01A0E2]/20' : 'border-gray-100 dark:border-gray-800'} rounded-2xl overflow-hidden transition-all duration-300 shadow-sm`}>
                    <div
                      className="p-6 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 ${activeAccordion === index ? 'bg-[#01A0E2] text-white' : 'bg-gray-50 dark:bg-gray-800 text-gray-500'} rounded-full flex items-center justify-center font-bold group-hover:bg-[#01A0E2] group-hover:text-white transition-all`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-widest text-[#01A0E2] mb-0.5">Module {index + 1}</p>
                          <h3 className={`font-bold dark:text-white ${activeAccordion === index ? 'text-[#01A0E2]' : 'group-hover:text-[#2B4278]'} transition-colors`}>{item.title}</h3>
                          {activeAccordion !== index && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{item.topics}</p>
                          )}
                        </div>
                      </div>
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        className={`text-gray-400 ${activeAccordion === index ? 'text-[#01A0E2] rotate-180' : 'group-hover:text-[#01A0E2]'} transition-transform`}
                      />
                    </div>

                    {/* Accordion Content */}
                    <div className={`transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-[500px] opacity-100 border-t border-gray-100 dark:border-gray-800' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="p-6 bg-[#01A0E2]/5 dark:bg-[#01A0E2]/10">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.topics}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section
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
            )} */}



          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 self-start sticky top-24 z-30">
            <div className="space-y-8">

              {/* Tools & Stack */}
              {course.tools && (
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 mt-10">
                  <h3 className="font-bold mb-6 flex items-center gap-2 text-[#2B4278] dark:text-white">
                    <Icon icon="solar:box-bold" className="text-[#01A0E2]" />
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {course.tools.map((tool, idx) => {
                      const iconMap: { [key: string]: string } = {
                        'html5': 'logos:html-5',
                        'css3': 'logos:css-3',
                        'javascript': 'logos:javascript',
                        'react': 'logos:react',
                        'nodejs': 'logos:nodejs-icon',
                        'mongodb': 'logos:mongodb-icon',
                        'docker': 'logos:docker-icon',
                        'github': 'logos:github-icon',
                        'express': 'logos:express',
                        'python': 'logos:python',
                        'py-charm': 'logos:pycharm',
                        'vscode': 'logos:visual-studio-code',
                        'anaconda': 'logos:anaconda-icon',
                        'linux': 'logos:linux-tux',
                        'figma': 'logos:figma',
                        'adobe-xd': 'logos:adobe-xd',
                        'sketch': 'logos:sketch',
                        'illustrator': 'logos:adobe-illustrator',
                        'photoshop': 'logos:adobe-photoshop',
                        'after-effects': 'logos:adobe-after-effects',
                      };
                      const iconName = iconMap[tool.toLowerCase()] || `logos:${tool.toLowerCase()}`;

                      return (
                        <div key={idx} className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md cursor-help overflow-hidden p-1.5" title={tool}>
                          <Icon icon={iconName} width="28" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Enrollment Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-[#01A0E2]/10 dark:border-gray-800 ring-1 ring-[#01A0E2]/5 mt-10">
                {course.fee && (
                  <div className="mb-6">
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Course Fee</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[#01A0E2]">₹{course.fee.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm font-medium">/ Full Course</span>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-5 bg-[#01A0E2] hover:bg-[#2B4278] text-white font-black text-lg rounded-2xl shadow-lg shadow-[#01A0E2]/30 transition-all hover:scale-[1.02] active:scale-95 mb-4"
                >
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
                        <Icon icon={feature.icon} className="text-[#01A0E2]" width="20" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* Certification Banner */}
              <div className="bg-gradient-to-br from-[#2B4278] to-[#01A0E2] rounded-3xl p-8 text-white relative overflow-hidden mt-10">
                <Icon icon="solar:medal-ribbon-bold" className="absolute bottom-[-20px] right-[-20px] w-40 h-40 text-white/5 -rotate-12" />
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Icon icon="solar:verified-check-bold" className="text-[#01A0E2]" width="32" />
                  </div>
                  <h3 className="text-xl font-bold font-primary">{course.certificationInfo?.title || 'Professional Certification'}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {course.certificationInfo?.description || 'Get recognized by industry leaders with our professional certificate.'}
                  </p>
                  <div className="pt-4">
                    <div className="relative aspect-[16/11] w-full rounded-2xl border border-white/10 overflow-hidden group shadow-2xl">
                      <Image
                        src={getImgPath('/images/testimonial/certificate.jpg')}
                        alt='Professional Certification'
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                          <Icon icon="solar:verified-check-bold" className="text-[#01A0E2]" />
                          Industry Recognized
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>

        {course.instructor && (
          <section className="space-y-4 border-t border-gray-100 dark:border-gray-800 mt-2 pt-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl font-bold text-[#2B4278] dark:text-white">Meet Your Trainer</h2>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#01A0E2]/10 dark:bg-[#01A0E2]/30 rounded-xl border border-[#01A0E2]/20 dark:border-[#01A0E2]/50">
                <Icon icon="solar:star-bold" className="text-yellow-500" />
                <span className="font-bold text-[#2B4278] dark:text-blue-100">{course.instructor.rating}</span>
                <span className="text-sm text-[#01A0E2] dark:text-[#01A0E2] font-medium">({course.instructor.reviewsCount} Reviews)</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#01A0E2]/10 dark:bg-[#01A0E2]/10 rounded-full blur-3xl transform translate-x-20 -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl ring-4 ring-white dark:ring-gray-800 shrink-0">
                  <Image src={course.instructor.image} alt={course.instructor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <h3 className="text-3xl font-extrabold dark:text-white mb-2">{course.instructor.name}</h3>
                    <p className="text-blue-600 font-bold text-lg">{course.instructor.designation}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-800">
                      <Icon icon="solar:case-outline" className="text-blue-600" />
                      <span className="text-sm font-bold dark:text-gray-300">{course.instructor.experience} Exp.</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-100 dark:border-gray-800">
                      <Icon icon="solar:verified-check-bold" className="text-green-600" />
                      <span className="text-sm font-bold dark:text-gray-300">Certified Expert</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify italic">
                    "{course.instructor.bio}"
                  </p>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-center md:justify-start gap-6">
                    <div className="text-center md:text-left">
                      <p className="text-2xl font-black text-blue-600">5k+</p>
                      <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Students Taught</p>
                    </div>
                    <div className="w-px h-10 bg-gray-100 dark:bg-gray-800"></div>
                    <div className="text-center md:text-left">
                      <p className="text-2xl font-black text-blue-600">4.9/5</p>
                      <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Avg. Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <section className="container mx-auto max-w-7xl px-4 -mt-24 w-fit">
        <div className="bg-[#081738] rounded-[3rem] p-10 md:p-15 text-center text-white relative overflow-hidden">
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95 w-full sm:w-auto text-lg"
              >
                Enroll Today
              </button>
              {syllabusMap[slug] ? (
                <a
                  href={`/syllabus/${syllabusMap[slug]}`}
                  download
                  className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all w-full sm:w-auto text-lg text-center"
                >
                  Download Syllabus
                </a>
              ) : (
                <span className="px-10 py-5 border-2 border-white/10 text-white/50 rounded-2xl text-lg cursor-not-allowed">
                  Syllabus Not Available
                </span>
              )}

            </div>
          </div>
        </div>
      </section>
      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={course.name}
      />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default CourseDetails;
