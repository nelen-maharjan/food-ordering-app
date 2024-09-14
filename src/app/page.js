import ContactUs from '@/components/layout/ContactUs'
import CustomerService from '@/components/layout/CustomerService'
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16' id='about'>
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About us'}
        />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex, necessitatibus animi similique quasi officiis nemo beatae sequi soluta eveniet optio officia excepturi dolorem molestias ipsum! Tempore, rem molestiae. Ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex, necessitatibus animi similique quasi officiis nemo beatae sequi soluta eveniet optio officia excepturi dolorem molestias ipsum! Tempore, rem molestiae. Ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis dolorum voluptates facere deleniti fugit reiciendis.!
          </p>
        </div>
      </section>

      <CustomerService />

      <ContactUs />

    </>
  )
}

export default Home
