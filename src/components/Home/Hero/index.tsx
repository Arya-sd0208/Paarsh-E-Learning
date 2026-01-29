// 'use client'
// import { getImgPath } from '@/utils/image'
// import Image from 'next/image'
// import Link from 'next/link'

// const Hero = () => {
//   return (
//     <section className='relative md:pt-30 pt-15 bg-white  dark:bg-darklight bg-cover text-white'>
//       <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
//         <div
//           className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
//           data-aos='fade-right'
//           data-aos-delay='200'
//           data-aos-duration='1000'>
//           <div className='flex gap-2 items-center'>
//             <span className='w-3 h-3 rounded-full bg-success'></span>
//             <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
//               Learn & Grow
//             </span>
//           </div>
//           <h1 className='text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]'>
//             Education: The Gateway to Success
//           </h1>
//           <p className='text-grey dark:text-white/70 text-xl font-normal'>
//             Education is door for future & Paarsh E-Learning is the key for Bright your future
//           </p>
//           <a
//             href='/Course'
//             className='py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8'>
//             Explore More
//           </a>
//           {/* <div className='flex items-center mt-12 gap-4'>
//             <div className='flex items-center'>
//               <Image
//                 src={getImgPath('/images/hero/hero-profile-1.jpg')}
//                 alt='hero-image'
//                 width={40}
//                 height={40}
//                 quality={100}
//                 className='w-10! h-10! rounded-full border border-solid border-white -ml-0'
//               />
//               <Image
//                 src={getImgPath('/images/hero/hero-profile-2.jpg')}
//                 alt='hero-image'
//                 width={40}
//                 height={40}
//                 quality={100}
//                 className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
//               />
//               <Image
//                 src={getImgPath('/images/hero/hero-profile-3.jpg')}
//                 alt='hero-image'
//                 width={40}
//                 height={40}
//                 quality={100}
//                 className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
//               />
//             </div>
//             <div>
//               <p className='text-sm font-normal text-grey max-w-56'>
//                 Need help?{' '}
//                 <Link href='#' className='text-primary hover:text-blue-700'>
//                   Contact our experts
//                 </Link>{' '}
//                 Tell us about your project
//               </p>
//             </div>
//           </div> */}
//         </div>

//         <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] before:bg-[url('/images/hero/ ')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/ ')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
//           <Image
//             src={getImgPath('/images/hero/heroimg.png')}
//             alt='hero-image'
//             width={700}
//             height={450}
//             quality={100}
//             style={{ width: '700px', height: '450px',borderRadius: '10px',marginTop: '30px' }}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className="
        relative
        pt-12 sm:pt-16 md:pt-24 lg:pt-30
        bg-white dark:bg-darklight bg-cover
      "
    >
      <div
        className="
          container mx-auto max-w-6xl px-4
          grid grid-cols-1 md:grid-cols-12
          gap-8 md:gap-4
          relative z-10
        "
      >
   
        <div
          className="
            col-span-1 md:col-span-6
            p-0 md:p-4
            space-y-4
            flex flex-col
            items-center md:items-start
            justify-center
            text-center md:text-left
          "
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div className="flex gap-2 items-center justify-center md:justify-start mt-18 md:mt-0">
            <span className="w-3 h-3 rounded-full bg-success"></span>
            <span className="font-medium text-sm text-midnight_text dark:text-white/50">
              Learn & Grow
            </span>
          </div>

          <h1
            className="
              text-midnight_text dark:text-white
              font-bold
              text-3xl sm:text-4xl md:text-5xl
              leading-tight md:leading-[1.15]
            "
          >
            Education: The Gateway to Success
          </h1>

          <p
            className="
              text-grey dark:text-white/70
              text-base sm:text-lg md:text-xl
              font-normal
              max-w-xl
            "
          >
            Education is door for future & Paarsh E-Learning is the key for Bright your future
          </p>

          <a
            href="/Course"
            className="
              py-3 px-8
              bg-blue-600 hover:bg-blue-700
              text-white rounded-full
              transition duration-300
            "
          >
            Explore More
          </a>
        </div>

      
        <div
          className="
            col-span-1 md:col-span-6
            relative
            flex justify-center md:justify-end
          "
        >
          <Image
            src={getImgPath('/images/hero/heroimg.png')}
            alt="hero-image"
            width={700}
            height={450}
            quality={100}
            className="
              w-full
              max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
              h-auto md:h-[380px] lg:h-[450px]
              rounded-xl
              mt-0 md:mt-0
            "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
