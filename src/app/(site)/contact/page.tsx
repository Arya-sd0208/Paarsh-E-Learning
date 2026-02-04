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
  Linkedin,
  Twitter,
  Github,
  Send
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-[#18181b] transition-colors duration-300">

      <section className="relative w-full bg-[#f8faff] dark:bg-[#1e1e24] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-gray-100 dark:border-white/5">

        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -mr-20 -mt-20 blur-3xl text-blue-600" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full -ml-20 -mb-20 blur-3xl" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
 
              <nav className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-6 font-medium">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight size={14} className="opacity-50" />
                <span className="text-gray-600 dark:text-gray-300">Contact Us</span>
              </nav>

                <div className="text-left mb-16 md:mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 dark:text-white mb-6">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full ml-20" />
                </div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-lg mb-8">
                Have questions? Get in touch with us! Our team is ready to help you on your learning journey.
              </p>
            </div>

            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-[550px] aspect-square group">
                
                <div className="absolute inset-0 bg-blue-600/5 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
                <Image
                  src="/images/contact-page/Working.png"
                  alt="Contact Us"
                  fill
                  className="object-contain relative z-10 w-[20px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
                We're here to help! Whether you have questions about our courses, need support, or just want to say hello, our team is here for you.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

      
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
           
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/5">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-white/10 pb-4">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/30">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Email address</p>
                    <Link href="mailto:contact@paarshelearning.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      contact@paarshelearning.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Phone number</p>
                    <Link href="tel:+919075201035" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      +91 90752 01035
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-400/30">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">Support Hours</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      Monday to Friday, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Office
              </h3>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-blue-600 mt-1 shrink-0" size={20} />
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Office no 1, Bhakti Apartment, Near Rasoi Hotel, Suchita Nagar, Mumbai Naka, Nashik 422001
                </p>
              </div>

              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.19149495048!2d73.7818!3d19.9814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzUzLjAiTiA3M8KwNDYnNTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute top-4 left-4 flex gap-2">
                  <button className="bg-white px-4 py-2 rounded-lg shadow text-xs font-bold text-blue-600">Directions</button>
                  <button className="bg-white px-4 py-2 rounded-lg shadow text-xs font-bold text-blue-600">View larger map</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 opacity-80">
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
