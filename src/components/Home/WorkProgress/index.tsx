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
      className={`scroll-mt-25 py-12 lg:py-20 ${isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
        }`}id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center'>

          <div className='flex justify-center lg:justify-start'>
            <Image
              src={getImgPath('/images/work-progress/Image.png')}
              alt='work progress'
              width={500}
              height={500}
              quality={100}  
              className='w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] h-auto' />
          </div>

          <div
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
          >
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Why Choose ?
              </span>
            </div>

            <h2 className='pt-6 pb-6 text-[#2F73F2] font-bold dark:text-white text-2xl sm:text-3xl lg:text-4xl'>
              Paarsh E - Learning
            </h2>

            <p className='text-gray dark:text-white/70 text-sm sm:text-justify font-semibold text-justify tracking-tighter'>
              Paarsh E-Learning delivers industry-focused education through expert mentors and live interactive sessions.
              We combine practical learning, quality resources, and career support to help you achieve real success.
            </p>

            <div className="pt-8 text-justify tracking-tighter">
              <ul className="space-y-4 sm:space-y-5">
                {points.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
                    <p className="text-sm sm:text-base font-normal text-grey dark:text-white/70">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
