"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Slides = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const achievements = [
        { src: "/images/achievements/tata.png", alt: "Tata logo", size: 0.8 },
        { src: "/images/achievements/react.png", alt: "React logo" },
        { src: "/images/achievements/microsoft.jpg", alt: "Microsoft logo" },
        { src: "/images/achievements/google.webp", alt: "Google logo" },
        { src: "/images/achievements/amazon.png", alt: "Amazon logo" },
    ];

    const visibleCount = 4;
    const totalSlides = achievements.length;

    const extendedSlides = [...achievements, ...achievements.slice(0, visibleCount)];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
        setTransitionEnabled(true);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        setTransitionEnabled(true);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        slider.style.transition = transitionEnabled ? "transform 0.7s ease" : "none";

        const translateX = (currentIndex * 100) / visibleCount;
        slider.style.transform = `translateX(-${translateX}%)`;

        if (currentIndex >= totalSlides) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(0);
            }, 700);
        }
    }, [currentIndex, transitionEnabled, totalSlides, visibleCount]);

    return (
        <div
            className="relative overflow-hidden w-full max-w-6xl mx-auto mb-10 mt-8 md:mt-20 h-28 flex items-center"
            // className="relative overflow-hidden w-full max-w-6xl mx-auto mb-20 mt-20"
            // className="relative overflow-hidden w-auto mb-20 mt-20 "
            onMouseEnter={() => setTransitionEnabled(false)}
            onMouseLeave={() => setTransitionEnabled(true)}
        >

            <div
                ref={sliderRef}
                className="flex"
                style={{ width: `${(extendedSlides.length / visibleCount) * 100}%` }}
            >
                {extendedSlides.map((logo, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 flex justify-center items-center h-24"
                        // className="flex-shrink-0 flex justify-center items-center px-2"
                        style={{ width: `${100 / visibleCount}%` }}
                    >
                        <Image
                            // src={logo.src}
                            // alt={logo.alt}
                            // width={logo.width || 150}
                            // height={96}
                            // className="object-contain"

                            // src={logo.src}
                            // alt={logo.alt}
                            // width={200}
                            // height={70}
                            // className="object-contain "


                            src={logo.src}
                            alt={logo.alt}
                            width={(logo.size ?? 1) * 200}
                            height={(logo.size ?? 1) * 70}
                            className="object-contain" />
                    </div>
                ))}
            </div>

            {/* <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400 transition"
            >
                &#8592;
            </button> */}

            {/* <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-400 transition"
            >
                &#8594;
            </button> */}

            {/* <div className="absolute bottom-2 w-full flex justify-center space-x-2">
                {achievements.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex % totalSlides ? "bg-gray-800" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Slides;