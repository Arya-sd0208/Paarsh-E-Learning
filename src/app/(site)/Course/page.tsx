import React from 'react'
import HeroSub from '@/components/SharedComponent/HeroSub'
import { Metadata } from "next";
import CoursesCardSection from '@/components/SharedComponent/Blog/blogCard'
import { point } from '@/app/api/data';

export const metadata: Metadata = {
  title: "Courses | Paarsh E - Learning",
  icons: {
    icon: '/favicon.png',
  },
};

const CoursePage = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/Course', text: 'Courses' },
  ]

  return (
    <>
      <HeroSub
        title="We Offer The Best Courses for Best Career..!"
        description="At Paarsh E-Learning, we take pride in our commitment to ensuring your success. We offer a unique 100% job placement guarantee, where we work closely with our 85+ industry partners to provide you with promising career opportunities upon completion of your chosen course. We believe that education should be a stepping stone towards meaningful employment, and we strive to equip our learners with the necessary skills and connections to thrive in their chosen fields."
        breadcrumbLinks={breadcrumbLinks}
      />


      <div className="block mx-auto mb-12 md:mb-24 font-semibold text-midnight_text dark:text-white border-l-4 border-primary w-full lg:w-3/4 lg:-mt-100 px-4 lg:px-0 lg:pl-15 lg:ml-260">
        <ul className="space-y-4 md:space-y-5">
          {point.map((item, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4 ">
              <span className="mt-1.5 md:mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
              <p className="text-base md:text-lg font-normal text-grey dark:text-white/70">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <CoursesCardSection />
    </>
  )
}

export default CoursePage;
