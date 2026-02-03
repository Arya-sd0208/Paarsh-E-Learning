'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='relative md:pt-32 pt-20 bg-white dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50 mt-0'>
              Learn & Grow
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
            Education: The Gateway to Success
          </h1>
          <p className='text-grey dark:text-white/70 text-xl font-normal'>
            Education is door for future & Paarsh E-Learning is the key for Bright your future
          </p>
          <a
            href='/Course'
            className='py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 px-8'>
            Explore More
          </a>
        </div>

        <div className="md:col-span-6 col-span-12 relative flex justify-center items-center">
          <Image
            src={getImgPath('/images/hero/heroimg.png')}
            alt='hero-image'
            width={700}
            height={450}
            quality={100}
            className="w-full h-[400px] sm:h-[50px] lg:h-[350px] object-cover rounded-[10px] mt-8"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
