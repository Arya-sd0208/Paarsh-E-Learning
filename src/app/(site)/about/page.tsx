"use client";

import React, { useState } from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import "./page.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Briefcase,
  Rocket,
  Lightbulb,
  BarChart3,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const AboutPage = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isFounderExpanded, setIsFounderExpanded] = useState(false);

  const missions = [
    {
      icon: <GraduationCap className="text-blue-600" />,
      title: "High-Quality Education",
      desc: "Deliver industry-relevant courses designed by experts."
    },
    {
      icon: <Globe className="text-green-600" />,
      title: "Foster Accessibility",
      desc: "Make learning accessible worldwide with flexible options."
    },
    {
      icon: <BookOpen className="text-purple-600" />,
      title: "Promote Lifelong Learning",
      desc: "Empower learners to continuously upgrade their skills."
    },
    {
      icon: <Briefcase className="text-orange-600" />,
      title: "Facilitate Job Placement",
      desc: "Bridge learning and employment with placement assistance."
    },
    {
      icon: <Rocket className="text-pink-600" />,
      title: "Embrace Innovation & Technology",
      desc: "Adopt latest technologies for engaging learning experiences."
    }
  ]

  return (
    <>
      <div className="w-full mt-10 text-center bg-white text-black dark:bg-[#18181b] dark:text-white transition-colors duration-300 relative overflow-hidden">
        <div className="text-center mb-16 md:mb-10 mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 dark:text-white mb-6">
            About Us
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="about-text dark:bg-transparent tracking-tighter mx-auto max-w-6xl relative z-10">
          <div className={`relative transition-all duration-700 ease-in-out ${isAboutExpanded ? 'max-h-[3000px]' : 'max-h-[350px] overflow-hidden'}`}>
            <p>Welcome to Paarsh E-Learning, your premier destination for online and offline learning across a wide range of courses. We are committed to providing high-quality education and empowering individuals to achieve their career goals. With our unique approach, we strive to make learning accessible, engaging, and effective.</p>
            <p>Founded in 2018 in Nashik, Paarsh E-Learning has quickly emerged as a leading platform for both online and offline education. Our mission is to bridge the gap between traditional learning methods and the evolving needs of modern learners. We understand that education should not be limited by geographical boundaries, and that's why we offer our courses through both online and offline channels.</p>
            <p>Our comprehensive course catalog covers a diverse range of subjects, ensuring that learners from various backgrounds and interests can find the right program for their needs. Whether you're interested in technology, business, design, health sciences, or any other field, we have courses designed to enhance your skills and knowledge.</p>
            <p>At Paarsh E-Learning, we take pride in our commitment to ensuring your success. We offer a unique 100% job placement guarantee, where we work closely with industry partners to provide you with promising career opportunities upon completion of your chosen course. We believe that education should be a stepping stone towards meaningful employment, and we strive to equip our learners with the necessary skills and connections to thrive in their chosen fields.</p>
            <p>To create a dynamic learning experience, we offer daily live sessions conducted by industry experts. These sessions enable you to interact with instructors and fellow learners in real-time, fostering a collaborative and engaging learning environment. Additionally, we provide one-to-one mentorship, where experienced mentors guide and support you throughout your learning journey. This personalized attention ensures that you receive the guidance and feedback needed to excel in your studies.</p>
            <p>With Paarsh E-Learning, you can access your courses at your convenience, allowing you to learn at your own pace and from any location. Our user-friendly platform provides seamless navigation, interactive resources, and a range of multimedia content to enhance your learning experience. We believe that education should be enjoyable and immersive, and we continuously strive to provide you with the best learning environment possible.</p>
            <p>Join us at Paarsh E-Learning and embark on a transformative educational journey. Whether you're looking to acquire new skills, enhance your career prospects, or simply pursue a passion, we are here to support you every step of the way. Explore our courses, engage with our community, and unlock your full potential with Paarsh E-Learning.</p>
            <p>We look forward to having you on board!</p>
            <p className="text-left font-bold border-t border-gray-100 dark:border-white/10 pt-10 mt-10">Sincerely,</p>
            <p className="text-left mb-10 text-blue-600 font-bold">The Paarsh E-Learning Team</p>

            {/* Fade Effect Overlay */}
            {!isAboutExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#18181b] dark:via-[#18181b]/80 z-20" />
            )}
          </div>

          <div className="mt-[-25px] relative z-30 pb-10">
            <button
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-blue-500/30 text-blue-600 font-bold shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group"
            >
              <span className="group-hover:text-blue-700">{isAboutExpanded ? "Read Less" : "Read More"}</span>
              <div className={`transition-transform duration-300 ${isAboutExpanded ? 'rotate-180' : ''}`}>
                <ChevronDown size={20} className="text-blue-500" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 mt-20 md:mt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <div className="space-y-5">
                {missions.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl shadow-lg p-8 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
              <div className="w-full flex justify-center h-[250px]">
                <Image src="/about/Gemini.png" alt="Our Vision" width={700} height={450} className="w-full max-w-md h-auto rounded-xl" />
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-xl font-medium leading-relaxed">
                  “To empower individuals worldwide through
                  <span className="text-blue-600 font-semibold"> accessible and innovative </span>
                  learning.”
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <Globe className="text-blue-600" />
                    <span>Global Learning</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <BarChart3 className="text-green-600" />
                    <span>Career Growth</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Lightbulb className="text-yellow-500" />
                    <span>Innovation First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="founder-section">
        <div className="social-media-container founder-section-dark">
          <h1 className="founder-text">Tushar Pagare</h1>
          <h3 className="ceo-text">Founder CEO </h3>

          <div className="social-icons-row">
            <a className="social-icon facebook" href="https://www.facebook.com/tushar.pagare.7" target="_blank" rel="noopener noreferrer"><FaFacebookF size={18} /></a>
            <a className="social-icon instagram" href="https://www.instagram.com/tushar4842" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
            <a className="social-icon linkedin" href="https://www.linkedin.com/in/tushar-pagare-a9244928a/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={18} /></a>
            <a className="social-icon github" href="https://github.com/tusharpaarsh" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></a>
          </div>

          <div className="mission-vision-container mission-vision-container-dark rounded-3xl p-8 mt-10 relative">
            <h2 className="text-2xl font-bold mb-6">" Visionary Leader and Education Advocate</h2>

            <div className={`relative transition-all duration-700 ease-in-out ${isFounderExpanded ? 'max-h-[2000px]' : 'max-h-[250px] overflow-hidden'}`}>
              <p>
                Tushar Pagare, the Founder and CEO of Paarsh E-Learning, is a visionary leader with a passion for transforming the education landscape. With a deep understanding of the power of learning and its potential to shape lives, Tushar is dedicated to providing accessible and innovative educational opportunities to individuals worldwide.
              </p>
              <p>
                Driven by a strong belief in the value of education, Tushar has spearheaded the growth of Paarsh E-Learning since its inception in 2018. Under his leadership, the platform has become a trusted destination for learners seeking high-quality courses and holistic support.
              </p>
              <p>
                With a forward-thinking mindset, Tushar remains at the forefront of educational advancements, embracing technology and innovative teaching methodologies to enhance the learning experience. He continuously collaborates with industry experts and partners to ensure that Paarsh E-Learning's courses align with current market trends and industry demands, giving learners a competitive edge in their chosen fields.
              </p>
              <p>
                Tushar's commitment to empowering individuals extends beyond the classroom. He is deeply invested in promoting lifelong learning, cultivating a supportive community, and facilitating job placements for learners, enabling them to thrive personally and professionally. His dedication to ethical practices and responsible learning creates an environment where learners can grow, connect, and contribute positively to society.
              </p>
              <p>
                As the Founder and CEO, Tushar Pagare brings a unique blend of visionary thinking, strategic acumen, and a genuine passion for education to Paarsh E-Learning. With his leadership, the platform continues to expand its reach, making a lasting impact on the lives of learners worldwide.
              </p>

              {/* Fade Effect Overlay */}
              {!isFounderExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-20" />
              )}
            </div>

            <div className="mt-[-20px] relative z-30">
              <button
                onClick={() => setIsFounderExpanded(!isFounderExpanded)}
                className="flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-blue-500/30 text-blue-600 font-bold shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group"
              >
                <span className="group-hover:text-blue-700">{isFounderExpanded ? "Read Less" : "Read More"}</span>
                <div className={`transition-transform duration-300 ${isFounderExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} className="text-blue-500" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;


