// 'use client'
// import { getImgPath } from '@/utils/image'
// import Image from 'next/image'
// import Link from 'next/link'

// const Hero = () => {
//   return (
//     <section className='relative md:pt-32 pt-20 bg-white dark:bg-darklight bg-cover text-white'>
//       <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
//         <div
//           className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
//           data-aos='fade-right'
//           data-aos-delay='200'
//           data-aos-duration='1000'>
//           <div className='flex gap-2 items-center'>
//             <span className='w-3 h-3 rounded-full bg-success'></span>
//             <span className='font-medium text-midnight_text text-sm dark:text-white/50 mt-0'>
//               Learn & Grow
//             </span>
//           </div>
//           <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
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

//           <div className='flex items-center mt-12 gap-4'>
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
//                 <Link href='/contact' className='text-primary hover:text-blue-700'>
//                   Contact our experts
//                 </Link>{' '}
//                 Tell us about your project
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="md:col-span-6 col-span-12 relative flex justify-center items-center">
//           <Image
//             src={getImgPath('/images/hero/Class2.png')}
//             alt='hero-image'
//             width={700}
//             height={450}
//             quality={100}
//             className="w-full h-auto sm:h-[50px] lg:h-[350px] object-cover rounded-[10px] mt-8"
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
    <section className='relative min-h-[50vh] flex items-center pt-20 mt-10 md:mt-16 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#e0f7ff] via-[#b9eaff] to-[#ffffff] dark:from-slate-900 dark:to-slate-800'>

      {/* Decorative Blur Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>

      <div className='container mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8 relative z-10'>

        {/* Left Content */}
        <div
          className='md:col-span-6 col-span-12 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-duration='1000'>

          <div className='flex gap-2 items-center mb-6 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/20 shadow-sm'>
            <span className='w-2 h-2 rounded-full bg-primary'></span>
            <span className='font-semibold text-primary/80 text-xs uppercase tracking-widest'>
              Learn & Grow
            </span>
          </div>

          <h1 className='text-[#0f172a] font-black dark:text-white text-5xl md:text-7xl leading-[1.1] mb-4 tracking-tight'>
            Education : <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
              The Gateway to Success
            </span>
          </h1>

          <p className='text-slate-600 dark:text-slate-300 text-xl font-normal max-w-lg mb-8 leading-relaxed'>
            Education is door for future & Paarsh E-Learning is the key for Bright your future
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-8'>
            <Link
              href='/Course'
              className='py-4 px-10 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300'>
              Explore more
            </Link>

            <div className='flex items-center gap-3'>
              <div className='flex -space-x-3'>
                {[1, 2, 3].map((i) => (
                  <div key={i} className='w-11 h-11 rounded-full border-4 border-white overflow-hidden shadow-sm'>
                    <Image
                      src={getImgPath(`/images/hero/hero-profile-${i}.jpg`)}
                      alt='user'
                      width={44}
                      height={44}
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
              <p className='text-sm font-normal text-grey max-w-56'>
                Need help?<br />
                <Link href='/contact' className='text-primary hover:text-blue-700'>
                  Contact our experts<br />
                </Link>
                Tell us about your project
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Unique Floating Image Frame */}
        <div
          className="md:col-span-6 col-span-12 relative flex justify-center items-center"
          data-aos='fade-left'
          data-aos-duration='1200'>

          <div className="relative w-full">
            {/* The background organic blob shape from the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] bg-primary/5 rounded-[60px] rotate-6 border border-primary/10"></div>

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-[45px] border-[10px] border-white shadow-2xl z-10 max-h-[400px] lg:max-h-[450px]">
              <Image
                src={getImgPath('/images/hero/elearn.png')}
                alt='Educational Portal'
                width={700}
                height={400}
                priority
                quality={100}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-800 p-3 rounded-3xl shadow-2xl border border-primary/10 z-20 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase">Success Rate</p>
                  <p className="text-lg font-black text-slate-800 dark:text-white">98% Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero