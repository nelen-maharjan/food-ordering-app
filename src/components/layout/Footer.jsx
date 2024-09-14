import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t px-6 py-4 text-gray-500 mt-16 bg-gray-100'>
      <div className='flex justify-between gap-8'>
        <div className=''>
          <iframe className='w-64 h-40 border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262.6351071876167!2d85.27504197017744!3d27.668379123160964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb180628d596cf%3A0x51e051805c5e5072!2sPanga%20Health%20Center%2C%20Panga%20%2CKirtipur!5e0!3m2!1sen!2snp!4v1726319257012!5m2!1sen!2snp" width="400" height="300" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='text-left'>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>Details</h3>
          <ul className='flex flex-col text-gray-600'>
            <Link href={'/'}>Home</Link>
            <Link href={'/#about'}>About</Link>
            <Link href={'/menu'}>Menu</Link>
          </ul>
        </div>
        <div className='text-left'>
          <h3 className='text-xl font-bold text-gray-800 mb-2'>Contact Us</h3>
          <ul className='flex flex-col text-gray-600'>
            <a className=' underline italic' href='tel:+9771234560987'>
              +977 123 4560 987
            </a>
            <a className=' underline italic' href='mailto:nelen.mhrz@gmail.com'>
              nelen.mhrz@gmail.com
            </a>
          </ul>
        </div>
      </div>

      <div className='flex justify-between mt-8'>
        <p className='text-lg'>&copy;Copyright 2024 || Nelen MaharZan</p>
        <div className='flex gap-2 text-gray-600 text-lg'>
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
        </div>
      </div>
    </footer>
  )
}

export default Footer