"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Index = () => {
    // const sliderRef = useRef<HTMLDivElement>(null);
    // const [transitionEnabled, setTransitionEnabled] = useState(true);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const achievements = [
    //     { src: "/images/achievements/tata.png", alt: "Tata logo" },
    //     { src: "/images/achievements/react.png", alt: "React logo", width: 250 },
    //     { src: "/images/achievements/microsoft.jpg", alt: "Microsoft logo", width: 250 },
    //     { src: "/images/achievements/google.webp", alt: "Google logo", width: 250 },
    //     { src: "/images/achievements/amazon.png", alt: "Amazon logo", width: 250 },
    // ];

    // const visibleCount = 4;
    // const totalSlides = achievements.length;

    // const extendedSlides = [...achievements, ...achievements.slice(0, visibleCount)];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) => prev + 1);
    //         setTransitionEnabled(true);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     if (!slider) return;

    //     slider.style.transition = transitionEnabled ? "transform 0.7s ease" : "none";

    //     const translateX = (currentIndex * 100) / visibleCount;
    //     slider.style.transform = `translateX(-${translateX}%)`;

    //     if (currentIndex >= totalSlides) {
    //         setTimeout(() => {
    //             setTransitionEnabled(false);
    //             setCurrentIndex(0);
    //         }, 700);
    //     }
    // }, [currentIndex, transitionEnabled, totalSlides]);

    useEffect(() => {
        const counters = document.querySelectorAll<HTMLElement>(".counter");
        const speed = 400;

        counters.forEach((counter) => {
            let current = 0;
            const target = Number(counter.dataset.target);

            const updateCounter = () => {
                const increment = Math.ceil(target / speed);
                if (current < target) {
                    current += increment;
                    counter.innerText = current.toString();
                    setTimeout(updateCounter, 20);
                } else {
                    counter.innerText = target.toString();
                }
            };
            updateCounter();
        });
    }, []);


    return (
        <div className="mb-15">
            <h2 className="sm:text-4xl text-[28px] font-bold text-center mt-20 text-[#2F73F2] dark:text-white">
                Our Achievements
            </h2>

            <div className="md:w-3/5 mx-auto text-center p-6 shadow-xl rounded-lg border border-gray-100 my-6 mt-15">
                <p>
                    Paarsh E-Learning is a Start-up based Edutech Company from Pune,
                    Nashik & Surat. We provide career-focused courses for students.
                </p>
            </div>

            <section className=" py-16 mt-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center text-black">
                    <div>
                        <h2 className="counter text-5xl font-bold text-sky-400" data-target="1280">0</h2>
                        <div className="h-1 w-24 bg-sky-400 mx-auto my-4 rounded"></div>
                        <p className="uppercase text-sm">Happy Students</p>
                    </div>

                    <div>
                        <h2 className="counter text-5xl font-bold text-sky-400" data-target="920">0</h2>
                        <div className="h-1 w-24 bg-sky-400 mx-auto my-4 rounded"></div>
                        <p className="uppercase text-sm">Approved Courses</p>
                    </div>

                    <div>
                        <h2 className="counter text-5xl font-bold text-sky-400" data-target="1250">0</h2>
                        <div className="h-1 w-24 bg-sky-400 mx-auto my-4 rounded"></div>
                        <p className="uppercase text-sm">Certified Students</p>
                    </div>

                    <div>
                        <h2 className="counter text-5xl font-bold text-sky-400" data-target="1200">0</h2>
                        <div className="h-1 w-24 bg-sky-400 mx-auto my-4 rounded"></div>
                        <p className="uppercase text-sm">Activity Reporting</p>
                    </div>
                </div>
            </section>
            {/* <div className="overflow-hidden w-full ">
                <div
                    ref={sliderRef}
                    className="flex"
                    style={{ width: `${(extendedSlides.length / visibleCount) * 100}%` }}
                >
                    {extendedSlides.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-1/4 flex justify-center items-center px-2"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={ logo.width || 150 }
                                height={96}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default Index;
