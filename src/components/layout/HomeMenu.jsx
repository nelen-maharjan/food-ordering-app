'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

const HomeMenu = () => {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(()=>{
        fetch('/api/menu-items').then(res =>{
            res.json().then(menuItems =>{
                setBestSellers(menuItems.slice(-3))
            })
        })
    }, [])

    return (
        <section className=''>
            <div className='absolute left-0 right-0 w-full'>
                <div className='h-48 w-48 absolute -left-10 -top-[70px] -z-10'>
                    <Image src='/sallad1.png' layout='fill' objectFit='contain' alt='salad' />
                </div>
                <div className='h-48 w-48 absolute -right-10 -top-24 -z-10'>
                    <Image src='/sallad2.png' layout='fill' objectFit='contain' alt='salad' />
                </div>
            </div>
            <div className='text-center mb-4'>
                <SectionHeaders 
                subHeader={"Check Out"} 
                mainHeader={"Our Best Sellers"} />
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                {bestSellers?.length > 0 && bestSellers.map(item =>(
                    <MenuItem key={item._id} {...item} />
                ))}
            </div>
            
        </section>
    )
}

export default HomeMenu