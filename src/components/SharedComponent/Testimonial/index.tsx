// import React from 'react'
// import Image from 'next/image'
// import { getImgPath } from '@/utils/image'
// import { achievements } from '@/app/api/data'

// const Testimonial = () => {
//   return (
//     <section
//       className='scroll-mt-24 bg-section dark:bg-darklight border-none'
//       id='testimonials'>
//       <div className='container mx-auto max-w-6xl px-4'>
//         <div>
//           <div className='pt-10'>
//             <h2
//               className='sm:text-4xl text-[28px] leading-tight font-bold text-[#2F73F2] md:text-center text-start pb-20 md:w-4/6 w-full m-auto dark:text-white'
//               data-aos='fade-up'
//               data-aos-delay='200'
//               data-aos-duration='1000'>
//               Our Benefits
//             </h2>
//             <div className="ml-23 text-center">
//               <ul className="space-y-5">
//                 {achievements.map((item, index) => (
//                   <li key={index} className="flex items-start gap-4">
//                     <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0"></span>
//                     <p className="text-md font-normal text-grey dark:text-white/70">
//                       {item.title}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <Image
//               src={getImgPath('/images/testimonial/vector-smart.png')}
//               alt='logo'
//               width={150}
//               height={0}
//               quality={100}
//               className='w_f w-95! h-58! mr-10 -mt-[20%] ml-45'
//             />
//           </div>
//           {/* <div className='text-center'>
//             <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
//               Jonathan Diesel
//             </strong>
//             <p className='text-base text-gray dark:text-white/50 '>
//               Happy Customer, Apple inc
//             </p>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonial
import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { achievements } from '@/app/api/data'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight py-12 lg:py-20'
      id='testimonials'
    >
      <div className='container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>

        <h2
          className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F73F2] text-center dark:text-white mb-10 lg:mb-16'
          data-aos='fade-up'
        >
          Our Benefits
        </h2>


        <div className='grid lg:grid-cols-2 gap-10 items-center'>

          <div
            className='order-1 lg:order-2 flex justify-center lg:justify-end'
            data-aos='zoom-in'
          >
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Benefits illustration'
              width={450}
              height={450}
              className='
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[380px]
                lg:max-w-[450px]
                h-auto
              '
            />
          </div>

          
          <ul className='order-2 lg:order-1 space-y-5'>
            {achievements.map((item, index) => (
              <li
                key={index}
                data-aos='fade-up'
                data-aos-delay={index * 120}
                className='flex items-start gap-4'
              >
                <span className='mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0'></span>

                <p className='text-sm sm:text-base dark:text-white/70'>
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
