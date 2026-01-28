import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode border-t border-dark_border '>
      <div className='container mx-auto max-w-7xl '>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>

          <div className='sm:col-span-4 sm:col-span-3 col-span-10 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 sm:min-h-20 shrink-0 '>

            <div className='sm:content-normal sm:text-start text-center content-center sm:w-auto'>

              <Link href='/' className='md:block flex justify-center'>
                <Image
                  src={getImgPath('/images/logo/logo-wide.webp')}
                  alt='logo'
                  width={280}
                  height={80}
                  style={{ width: '310px', height: 'auto', marginLeft: '-50px', marginTop: '-100px' }}
                  quality={100}
                  unoptimized
                />
              </Link>
              <h2 className='text-white/50 text-[16px] leading-tight font-normal -ml-10 mt-10 '>
                Education is door for future & Paarsh E-Learning is the key for Bright your future.
              </h2>

              <div className='mt-5'>
                <ul className='flex items-center gap-3 -ml-10'>
                  <li className='group'>
                    <Link href='https://www.facebook.com/paarsh.elearning/'>
                      <svg
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_1_343)'>
                          <path d='M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_343'>
                            <rect width='25' height='25' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://x.com/EPaarsh'>
                      <svg
                        width='23'
                        height='23'
                        viewBox='0 0 23 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_1_345)'>
                          <path d='M21.3412 0H1.65878C0.742615 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.742615 23 1.65878 23H21.3412C22.2574 23 23 22.2574 23 21.3412V1.65878C23 0.742615 22.2574 0 21.3412 0V0ZM16.7508 8.96648C16.7559 9.07966 16.7583 9.19337 16.7583 9.3076C16.7583 12.7955 14.1034 16.8176 9.24812 16.8178H9.24829H9.24812C7.75745 16.8178 6.37031 16.3809 5.20216 15.6321C5.4087 15.6565 5.61892 15.6686 5.83177 15.6686C7.06853 15.6686 8.20667 15.2468 9.11019 14.5387C7.95468 14.5173 6.98044 13.7542 6.64423 12.7053C6.80514 12.7362 6.97061 12.7531 7.1403 12.7531C7.38123 12.7531 7.61461 12.7206 7.83641 12.6601C6.62861 12.4183 5.71877 11.3508 5.71877 10.0727C5.71877 10.0607 5.71877 10.05 5.71912 10.039C6.07481 10.2367 6.48156 10.3557 6.91463 10.3691C6.20589 9.89615 5.74 9.08773 5.74 8.17192C5.74 7.68831 5.87073 7.23523 6.09744 6.84515C7.39912 8.44233 9.34445 9.49273 11.5383 9.6031C11.493 9.40973 11.4696 9.20828 11.4696 9.00122C11.4696 7.54407 12.6518 6.36189 14.1095 6.36189C14.8688 6.36189 15.5546 6.68283 16.0362 7.19592C16.6376 7.0773 17.2023 6.8576 17.7124 6.55526C17.515 7.17136 17.0966 7.68831 16.5516 8.01522C17.0856 7.95135 17.5945 7.80974 18.0674 7.59952C17.7141 8.12893 17.2661 8.59394 16.7508 8.96648Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_345'>
                            <rect width='23' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.linkedin.com/in/paarsh-e-learning/?originalSubdomain=in' target='_blank' rel='noopener noreferrer'>
                      <svg
                        width='22'
                        height='23'
                        viewBox='0 0 22 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_1_347)'>
                          <path d='M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_1_347'>
                            <rect width='22' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.instagram.com/accounts/login/?next=%2Fpaarsh_elearning%2F&source=omni_redirect' target='_blank' rel='noopener noreferrer'>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 23 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_instagram)'>
                          <path d='M11.5 2.875C14.4312 2.875 14.7719 2.8875 15.8125 2.9375C16.7719 2.9844 17.3125 3.125 17.6875 3.2344C18.1719 3.3875 18.5 3.5875 18.8438 3.9312C19.1875 4.275 19.3875 4.6031 19.5406 5.0875C19.65 5.4625 19.7906 6.0031 19.8375 6.9625C19.8875 8.0031 19.9 8.3438 19.9 11.275C19.9 14.2062 19.8875 14.5469 19.8375 15.5875C19.7906 16.5469 19.65 17.0875 19.5406 17.4625C19.3875 17.9469 19.1875 18.275 18.8438 18.6188C18.5 18.9625 18.1719 19.1625 17.6875 19.3156C17.3125 19.425 16.7719 19.5656 15.8125 19.6125C14.7719 19.6625 14.4312 19.675 11.5 19.675C8.56875 19.675 8.22812 19.6625 7.1875 19.6125C6.22812 19.5656 5.6875 19.425 5.3125 19.3156C4.82812 19.1625 4.5 18.9625 4.15625 18.6188C3.8125 18.275 3.6125 17.9469 3.45938 17.4625C3.35 17.0875 3.20938 16.5469 3.1625 15.5875C3.1125 14.5469 3.1 14.2062 3.1 11.275C3.1 8.3438 3.1125 8.0031 3.1625 6.9625C3.20938 6.0031 3.35 5.4625 3.45938 5.0875C3.6125 4.6031 3.8125 4.275 4.15625 3.9312C4.5 3.5875 4.82812 3.3875 5.3125 3.2344C5.6875 3.125 6.22812 2.9844 7.1875 2.9375C8.22812 2.8875 8.56875 2.875 11.5 2.875ZM11.5 5.5C8.4125 5.5 5.85625 8.0562 5.85625 11.1438C5.85625 14.2312 8.4125 16.7875 11.5 16.7875C14.5875 16.7875 17.1438 14.2312 17.1438 11.1438C17.1438 8.0562 14.5875 5.5 11.5 5.5ZM11.5 15.0625C9.5375 15.0625 8 13.525 8 11.5625C8 9.6 9.5375 8.0625 11.5 8.0625C13.4625 8.0625 15 9.6 15 11.5625C15 13.525 13.4625 15.0625 11.5 15.0625ZM17.3438 5.225C17.3438 5.9313 16.775 6.5 16.0688 6.5C15.3625 6.5 14.7938 5.9313 14.7938 5.225C14.7938 4.5188 15.3625 3.95 16.0688 3.95C16.775 3.95 17.3438 4.5188 17.3438 5.225Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_instagram'>
                            <rect width='23' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li className='group'>
                    <Link href='https://www.youtube.com/@paarshinfotech3697' target='_blank' rel='noopener noreferrer'>
                      <svg
                        width='25'
                        height='30'
                        viewBox='0 0 23 23'
                        fill='#A3BBD1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='group-hover:fill-primary'>
                        <g clipPath='url(#clip0_youtube)'>
                          <path d='M22.2812 5.35625C22.0625 4.5 21.4375 3.875 20.5938 3.65625C18.8125 3.25 11.5 3.25 11.5 3.25C11.5 3.25 4.1875 3.25 2.40625 3.65625C1.5625 3.875 0.9375 4.5 0.71875 5.35625C0.375 7.1875 0.375 10.9062 0.375 10.9062C0.375 10.9062 0.375 14.625 0.71875 16.4562C0.9375 17.3125 1.5625 17.9375 2.40625 18.1562C4.1875 18.5625 11.5 18.5625 11.5 18.5625C11.5 18.5625 18.8125 18.5625 20.5938 18.1562C21.4375 17.9375 22.0625 17.3125 22.2812 16.4562C22.625 14.625 22.625 10.9062 22.625 10.9062C22.625 10.9062 22.625 7.1875 22.2812 5.35625ZM9.3125 14.5312V7.28125L15.2188 10.9062L9.3125 14.5312Z' />
                        </g>
                        <defs>
                          <clipPath id='clip0_youtube'>
                            <rect width='23' height='23' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <Link
                href='#'
                className='px-9 py-3 rounded-lg bg-primary text-white hover:bg-blue-700 hover:shadow-none'>
                Get Started
              </Link> */}
            </div>
          </div>
          <div className='md:col-span-4 sm:col-span-3 col-span-10 sm:flex items-center sm:min-h-25 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border'>
            <div>
              <span className='text-xl font-bold text-white pb-4 inline-block'>
                Quick Links
              </span>
              <ul className='justify-center mb-4 items-center sm:gap-7 gap-3'>
                <li className='text-xl text-white/50 pb-5'>
                  <Link href='/#' className='hover:text-primary'>
                    Home
                  </Link>
                </li>
                <li className='text-xl text-white/50 pb-5'>
                  <Link href='/about' className='hover:text-primary'>
                    About
                  </Link>
                </li>
                <li className='text-xl text-white/50 pb-5'>
                  <Link href='/Course' className='hover:text-primary'>
                    Courses
                  </Link>
                </li>
                <li className='text-xl text-white/50 pb-5'>
                  <Link href='/blog' className='hover:text-primary '>
                    Blogs
                  </Link>
                </li>
                <li className='text-xl text-white/50 pb-5'>
                  <Link href='/contact' className='hover:text-primary'>
                    Contact
                  </Link>
                </li>
                {/* <li className='text-xl text-white/50 -pb-15'>
                  <Link href='/explore' className='hover:text-primary '>
                    Explore
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className='md:col-span-4 col-span-10 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end md:min-h-25 shrink-0'>
            <div className='md:w-3/4 w-full sm:text-start text-center'>

              {/* <span className='font-bold text-white pb-4 inline-block text-2xl'>
                Subscribe newsletter
              </span>
              <p className='text-MistyBlue text-xl pb-7 text-white/50'>
                To be updated with all the latest trends and product
              </p>
              <form className='newsletter-form flex rounded-lg sm:w-full w-3/4 sm:mx-0 mx-auto'>
                <input
                  type='email'
                  placeholder='Email*'
                  className='p-4 text-xl border-transparent rounded-s-lg rounded-e-none! outline-0 focus:border-primary dark:focus:border-primary w-[calc(100%_-_137px)] flex bg-white dark:bg-midnight_text dark:text-white dark:border-solid dark:border dark:border-border_color'
                />
                <button
                  type='submit'
                  className='p-[0.625rem] text-xl font-medium bg-primary text-white border-none cursor-pointer rounded-e-lg outline-0 text-center w-[8.5625rem] hover:bg-blue-700 hover:shadow-none'>
                  Subscribe
                </button>
              </form> */}



              <div className='flex flex-col md:items-start items-center -mt-24'>
                <span className='text-xl font-bold text-white pb-4 inline-block'>
                  Contact
                </span>
                <div className='sm:block flex'>
                  <p className='text-xl font-bold text-white'>Phone</p>
                  <Link
                    href='tel:+91 98600 98343'
                    className=' text-xl text-white/50 hover:text-white '>
                    +91 98600 98343
                  </Link>

                </div>
                <div className='pb-5 sm:block flex'>
                  <Link
                    href='tel:+91 98600 98343'
                    className='text-xl text-white/50 hover:text-white'>
                    +91 90752 01035
                  </Link>

                </div>
                <div className='sm:block flex items-center gap-3'>
                  <p className='text-xl font-bold text-white'>Email</p>
                  <Link
                    href='info@paarshelearning.com'
                    className='text-xl text-white/50 hover:text-white'>
                    info@paarshelearning.com
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 p-7 border-t border-solid border-dark_border'>

        <div>
          <p className='text-g text-white/50 text-start ml-13'>
            Copyrights © 2026 Paarsh E-Learning. All rights reserved.
            {/* <Link
              href='https://getnextjstemplates.com/'
              target='_blank'
              className='hover:text-primary'>
              GetNextJs Templates
            </Link>{' '}
            • Distributed by
            <Link
              href='https://themewagon.com/'
              target='_blank'
              className='hover:text-primary'>
              {' '}ThemeWagon
            </Link> */}
          </p>
          <p className='text-lg text-white/50 text-end -mt-7  mr-31'>Terms & Conditions Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
