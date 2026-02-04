"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Mail,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Send,
  Navigation
} from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-[#18181b] transition-colors duration-300">

      <section className="relative w-full bg-[#f8faff] dark:bg-[#1e1e24] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <nav className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4 font-medium">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight size={14} className="opacity-50" />
                <span className="text-gray-600 dark:text-gray-300">Contact Us</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 dark:text-white mb-6 leading-tight">
                Contact Us
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-md">
                Have questions? Get in touch with our team.<br />
                We're ready to help you on your learning journey.
              </p>
            </div>

            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

                <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-full animate-pulse border border-blue-500/10 shadow-[0_0_50px_rgba(59,130,246,0.1)]" />
                <div className="absolute inset-10 bg-white/40 dark:bg-white/5 rounded-full backdrop-blur-3xl border border-white/20 shadow-2xl animate-spin-slow duration-[20s]" />

                <div className="absolute top-10 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float" />
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-float-delayed" />

                <div className="absolute top-[20%] left-[10%] animate-bounce-slow">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl rotate-12 border border-gray-100 dark:border-white/10">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                </div>
                <div className="absolute bottom-[25%] right-[5%] animate-bounce-delayed">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl -rotate-12 border border-gray-100 dark:border-white/10">
                    <Phone size={24} className="text-green-500" />
                  </div>
                </div>
                <div className="absolute top-[10%] right-[15%] animate-float">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl rotate-[-15deg] border border-gray-100 dark:border-white/10">
                    <MapPin size={24} className="text-red-500" />
                  </div>
                </div>

                <Image
                  src="/images/contact-page/Working.png"
                  alt="Contact Us Illustration"
                  width={450}
                  height={450}
                  className="object-contain relative z-20 hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-12 -mt-10">
            <div className="bg-white dark:bg-gray-900 rounded-[30px] p-8 md:p-10 border border-gray-50 dark:border-white/5 shadow-2xl shadow-gray-100/50">
              <h2 className="text-2xl md:text-3xl font-black text-blue-950 dark:text-white mb-10">
                Contact Information
              </h2>

              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-[20px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                    <Phone className="text-white" size={28} />
                  </div>
                  <Link href="tel:+919075201033" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                    +91 90752 01033
                  </Link>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-[20px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Email address</p>
                    <Link href="mailto:contact@sparkandlearning.com" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      info@paarshelearning.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-400 rounded-[20px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-400/20">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Address</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      Office no 1, Bhakti Apartmnent, Near Rasoi Hotel, Suchita Nagar, Mumbai Naka, Nashik 422001
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-300 rounded-[20px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-300/20">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Working hours</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      Monday to Friday, 9:30 AM - 7:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-[30px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.19149495048!2d73.7818!3d19.9814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzUzLjAiTiA3M8KwNDYnNTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 group-hover:scale-110 transition-transform">
                <div className="bg-white p-3 rounded-full shadow-xl">
                  <Navigation size={24} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                We're here to help! Whether you have questions about our <br className="hidden md:block" /> courses, need support, or just want to say hello, our team is here for you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-bold text-blue-950 dark:text-white">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#fcfdff] focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-bold text-blue-950 dark:text-white">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#fcfdff] focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-bold text-blue-950 dark:text-white">Your Phone (optional)</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#fcfdff] focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-lg font-bold text-blue-950 dark:text-white">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-[#fcfdff] focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 active:scale-95">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <section className="mt-24 text-center pb-24">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 dark:text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are achieving their career goals with our expert-led courses.
          </p>
          <Link
            href="/Course"
            className="inline-flex items-center justify-center px-12 py-5 bg-[#008080] hover:bg-[#006666] text-white text-xl font-bold rounded-xl transition-all shadow-xl shadow-[#008080]/20 active:scale-95"
          >
            Browse Courses
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
