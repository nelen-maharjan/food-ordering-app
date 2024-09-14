import Image from 'next/image'
import React from 'react'
import { Right } from '../icons/Right'

const Hero = () => {
    return (
        <section className='hero md:mt-4'>
            <div className='py-8 md:py-12'>
                <h1 className='text-4xl font-semibold '>
                    {"It's"} not just <br />
                    Food, {"it's"} an<br />
                    <span className='text-primary'>
                        Experience
                    </span>
                </h1>
                <p className='my-6 text-gray-500 text-sm'>
                    Delicious food is the missing piece that makes any gathering complete and memorable, a simple yet delicious joy in life.
                </p>
                <div className='flex gap-4 text-sm'>
                    <button className='flex gap-2 bg-primary uppercase items-center justify-center text-white px-4 py-2 rounded-full'>
                        Order now
                        <Right />
                    </button>
                    <button className='flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold'>
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className='relative hidden md:block'>
                <Image src='/food.jpg' alt='pizza' layout='fill' objectFit='contain' />
            </div>
        </section>
    )
}

export default Hero