"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { coursesData } from '@/data/coursesData';

interface CurriculumItem {
    title: string;
    topics: string;
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
    curriculum: CurriculumItem[];
    videoUrl: string;
}

const CourseDetails = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const [course, setCourse] = useState<CourseType | null>(null);

    useEffect(() => {
        if (slug) {
            const foundCourse = coursesData.find(c => c.slug === slug);
            setCourse(foundCourse || null);
        }
    }, [slug]);

    if (!course) {
        return <div className="text-center py-16">Loading course details...</div>;
    }

    return (
        <div className="w-full bg-white text-gray-800 mt-23">
            <section className="bg-[#081738] py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-700 mb-6">
                            {course.name}
                        </h2>
                        <p className="text-lg mb-6 text-grey dark:text-white/70">
                            {course.description}
                        </p>

                        {/* <ul className="space-y-2 mb-6">
                            <li>Beginner to Advanced</li>
                            <li>Duration: 6 Months</li>
                            <li>Certificate Included</li>
                            <li>Online & Offline Classes</li>
                        </ul> */}

                        <div className="block mx-auto mb-8 font-semibold text-midnight_text dark:text-white w-3/4 ml-1">
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 ">
                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
                                    <p className="text-lg font-normal text-grey dark:text-white/70">
                                        100% Job Placement Guarantee
                                    </p>
                                </li>
                                <li className="flex items-start gap-4 ">
                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
                                    <p className="text-lg font-normal text-grey dark:text-white/70">
                                        Live Classes with Expert Mentors
                                    </p>
                                </li>
                                <li className="flex items-start gap-4 ">
                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
                                    <p className="text-lg font-normal text-grey dark:text-white/70">
                                        Industry-Relevant Curriculum
                                    </p>
                                </li>
                                <li className="flex items-start gap-4 ">
                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
                                    <p className="text-lg font-normal text-grey dark:text-white/70">
                                        Hands-on Projects & Real-world Experience
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                                Enroll Now
                            </button>
                            {/* <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                                Download Syllabus
                            </button> */}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src={course.detailsImage || course.image}
                            alt={course.name}
                            width={400}
                            height={800}
                            className="w-full h-full max-w-md rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-10 max-w-7xl mx-auto mt-5 -mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-blue-700">
                    Course Overview
                </h2>
                <p className="text-lg leading-relaxed">
                    {course.overview}
                </p>
            </section>

            <section className="py-14 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* <h2 className="text-3xl font-semibold mb-8 text-blue-700">
                        Course Preview
                    </h2> */}
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={course.videoUrl}
                            title="Course Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full rounded-lg shadow-md h-[450px]"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-14 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-blue-700">
                        Course Curriculum
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {course.curriculum.map((item, index) => (
                            <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p>{item.topics}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <section className="py-14 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-blue-700">
                    Course Curriculum
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-lg">
                            Module 1: Web Fundamentals
                        </h3>
                        <p>HTML, CSS, Flexbox, Grid, Responsive Design</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Module 2: JavaScript
                        </h3>
                        <p>Basics, DOM, ES6, APIs, Async Programming</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Module 3: React.js
                        </h3>
                        <p>Components, Hooks, Routing, API Integration</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Module 4: Backend Development
                        </h3>
                        <p>Node.js, Express.js, REST APIs, Authentication</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Module 5: Database & Deployment
                        </h3>
                        <p>MongoDB, SQL, GitHub, Cloud Deployment</p>
                    </div>
                </div>
            </section> */}

            {/* <section className=" py-14 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-blue-700">
                        Projects You Will Build
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Portfolio Website",
                            "Admin Dashboard",
                            "Authentication System",
                            "REST API Backend",
                            "Full Stack Web App",
                            "Final Capstone Project",
                        ].map((project, index) => (
                            <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
                                {project}
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-14 px-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-blue-700 -ml-6">
                    Certification
                </h2>
                <p className="text-lg -ml-6">
                    Receive an industry-recognized course completion certificate to
                    enhance your resume and LinkedIn profile.
                </p>
            </section>

            <section className="bg-blue-800 py-14 px-6 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Start Your Learning Journey Today
                </h2>
                <p className="mb-6">
                    Limited seats available. Enroll now and upgrade your skills.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                    Enroll Now
                </button>
            </section>
        </div>
    );
};

export default CourseDetails;