import React from 'react'
import SectionHeaders from './SectionHeaders'

const ContactUs = () => {
  return (
    <section className='text-center my-16' id='contact'>
        <div className='mt-6 grid items-center'>
          <div>
            <SectionHeaders
              mainHeader={'We\'re ready to help you'}
              subHeader={'Leave a Message'}
            />
            <form
            action={"mailto:nelen.mhrz@gmail.com"}
            className='max-w-lg mx-auto'>
              <input
                type='text'
                placeholder='Your Name'
                className='block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md '
              />
              <input
                type='email'
                placeholder='Your Email'
                className='block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md '
              />
              <input
                type='text'
                placeholder='Subject'
                className='block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md'
              />
              <textarea
                placeholder='Message'
                className='block w-full mt-2 px-4 py-2 border border-gray-300 rounded-md h-32 resize-none'
              ></textarea>
              <button
                type='submit'
                className='mt-2 button'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default ContactUs