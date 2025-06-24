'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
             Elevated Beauty at Aurora Beauty Lab
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
             Indulge in a luxurious self-care experience, featuring premium treatments, expert techniques, and personalized attention — delivered with elegance, every day.

Let me know if you'd like variations for a homepage hero, slogan, or different service sections!
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  View Menu
                </button>
              </Link>
              <Link href='/#reserve'>
                <button className='text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300'>
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <div className='flex bg-white gap-5 px-5 py-2  items-center bottom-10 left-10 rounded-xl absolute'>
              <Image
                src={'/images/hero/glow.avif'}
                alt='pizza-image'
                width={100}
                height={100}
                className='object-cover'
                loading='lazy'
              />
              <p className='text-lg font-normal'>
                Discover 50+ <br />  Ways to Glow
              </p>
            </div>
            <div>
              <Image
              src='/images/hero/main-hero.png'
              alt='nothing'
              width={1000}
              height={805}
            />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
