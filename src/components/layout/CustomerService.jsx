import Image from 'next/image';
import React from 'react'

const CustomerService = () => {
  return (
    <section className='text-center my-8'>
        <div className="mx-8 grid md:grid-cols-2 items-center gap-8">
        <div className='flex justify-center items-center'>
            <Image src={'/chef.png'} alt='chef' width={300} height={250}/>
        </div>
        <div>
            <h2 className='font-bold text-3xl'>We Provide Best Service for Our <span className='text-primary'>Customer</span></h2>
            <p className='mt-8 text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, assumenda aut. Nisi aperiam sint quos incidunt. A repudiandae nobis doloribus fugiat qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam a id!</p>
        </div>
        </div>
    </section>
  )
}

export default CustomerService