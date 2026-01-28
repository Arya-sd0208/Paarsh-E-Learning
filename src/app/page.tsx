import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Testimonial from '@/components/SharedComponent/Testimonial'
import Achievements from '@/components/SharedComponent/Achievements'
import Slides from '@/components/SharedComponent/Slides';
// import { coursesData } from '@/data/coursesData';
// import Blog from '@/components/SharedComponent/Blog'
// import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Paarsh E - Learning",
    icons: {
    icon: '/favicon.png',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Achievements />
      <Testimonial />
      <Slides />
      {/* <Blog /> */}
      {/* <Contactform /> */}
    </main>
  )
}
