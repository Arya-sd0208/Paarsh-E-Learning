// 'use client'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { points } from '@/app/api/data'
// import { getImgPath } from '@/utils/image'


// interface ProgressItem {
//   title: string
//   Progress: number
// }

// const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {


//   return (
//     <section
//       className={`scroll-mt-25 ${isColorMode
//         ? 'dark:bg-darklight bg-section'
//         : 'dark:bg-darkmode bg-white'
//         }`}
//       id='about'>
//       <div className='container mx-auto max-w-6xl px-4'>

//         <div className='grid md:grid-cols-12 items-center gap-7'>

//           <div className='md:col-span-6'>
//             <Image
//               src={getImgPath('/images/work-progress/Image.png')}
//               alt='logo'
//               width={375}
//               height={0}
//               quality={100}
//               style={{ width: 'auto', height: '700px',marginLeft:'80px' }}
//               className='md:block hidden'
//             />
//           </div>
//           <div
//             className='md:col-span-6'
//             data-aos='fade-left'
//             data-aos-delay='200'
//             data-aos-duration='1000'>
//             <div className='flex gap-2 items-center'>
//               <span className='w-3 h-3 rounded-full bg-success'></span>
//               <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
//                 Why Choose ?
//               </span>
//             </div>
//             <h2 className='pt-9 pb-8 text-[#2F73F2] font-bold dark:text-white text-4xl'>
//               Paarsh E - Learning
//             </h2>
//             <p className='text-gray dark:text-white/70 text-base font-semibold'>
//               Paarsh E-Learning delivers industry-focused education through expert mentors and live interactive sessions.
//               We combine practical learning, quality resources, and career support to help you achieve real success.
//             </p>

//             <div className="block mx-auto pt-10">
//               <ul className="space-y-5">
//                 {points.map((item, index) => (
//                   <li key={index} className="flex items-start gap-4">
//                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                     <p className="text-sm font-normal text-grey dark:text-white/70">
//                       {item.title}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Progresswork



'use client'
import React from 'react'
import Image from 'next/image'
import { points } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`relative overflow-hidden  pb-20 lg:pb-32 ${isColorMode
        ? 'dark:bg-darklight bg-section'
        : 'dark:bg-darkmode bg-white'
        }`} id='about'>

      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>

          {/* Left Side: Visual Content with Dynamic Decorations */}
          <div
            className='relative flex justify-center order-2 lg:order-1'
            data-aos='zoom-in-right'
            data-aos-duration='1200'
          >
            {/* Background blur shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-[80px] animate-pulse" />

            <div className="relative group">
              {/* Image Frame with Glassmorphism Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[50px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-3 rounded-[40px] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden">
                <Image
                  src={getImgPath('/images/work-progress/why_choose.png')}
                  alt='Why Choose Paarsh'
                  width={600}
                  height={600}
                  quality={100}
                  className='w-full max-w-[480px] object-contain transform group-hover:scale-105 transition-transform duration-1000'
                />
              </div>

              {/* Success Badge - Floating */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-2xl border border-primary/10 hidden sm:flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Success Rate</p>
                  <p className="text-xl font-black text-primary">100%</p>
                </div>
              </div>

              {/* Expert Badge - Floating */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-2xl border border-secondary/10 hidden sm:flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-secondary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-4.794c.183-.441-.272-.823-.741-.741a23.959 23.959 0 0 0-4.582.832c-.832.187-1.553.768-1.71 1.613l-.014.075c-.282 1.515-.377 3.058-.281 4.595a.41.41 0 0 0 .466.383c1.027-.101 2.045-.451 3.12-.963Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 18.72a9.094 9.094 0 0 1-3.741-4.794c-.183-.441.272-.823.741-.741a23.959 23.959 0 0 1 4.582.832c.832.187 1.553.768 1.71 1.613l.014.075c.282 1.515.377 3.058.281 4.595a.41.41 0 0 1-.466.383c-1.027-.101-2.045-.451-3.12-.963Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 21h5.656a.41.41 0 0 0 .41-.41V20a.41.41 0 0 0-.41-.41H9.172a.41.41 0 0 0-.41.41v.59c0 .226.184.41.41.41Z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">Expert Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Side: Compelling Content */}
          <div
            className='order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-duration='1200'
          >
            <div className='inline-flex items-center gap-2 bg-primary/5 dark:bg-primary/20 px-4 py-1.5 rounded-full border border-primary/10 mb-6'>
              <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
              <span className='font-bold text-primary dark:text-primary-light text-xs uppercase tracking-widest'>
                Why Choose ?
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-primary dark:text-white leading-[1.1] mb-8'>
              Paarsh <span className="text-secondary relative">E-Learning
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 9C27.2302 4.0492 68.3033 2 159 2C249.697 2 290.77 4.0492 314.5 9" stroke="#01A0E2" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className='text-gray-600 dark:text-white/70 text-lg leading-relaxed mb-12 sm:text-justify'>
              Deliver industry-focused education through expert mentors and live interactive sessions. We combine practical learning, quality resources, and career support to help you achieve real success.
            </p>

            <div className="grid gap-4 sm:gap-5">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/5 border border-primary/5 hover:border-secondary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-primary dark:text-secondary group-hover:text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-white/80 font-bold text-base transition-colors duration-300 group-hover:text-primary dark:group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Progresswork
