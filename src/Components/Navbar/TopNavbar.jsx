import React from 'react'
import {  FaPhone, FaPlane } from 'react-icons/fa'
import { IoPaperPlane } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (
        <section className='bg-zinc-200/40 py-4'>
            <div className='container mx-auto px-10 flex items-center justify-between text-zinc-800 text-sm font-light'>
                {/* Contact  */}
                <div className="flex items-center justify-between gap-2">
                    <FaPhone/>
                    <h5>+880 1822 1822 07</h5>
                    <IoPaperPlane />
                    <h5>+880 1822 1822 07</h5>

                </div>

                <div className="hidden lg:flex">
                    <h5>World Faster Online Shopping Destination</h5>
                </div>

                {/* Usefull Links  */}
                <div className="hidden md:flex">
                    <ul className='flex items-center justify-end gap-4'>
                        <li className=""> <Link to={'/#'}>Help</Link> </li>
                        <li className=""> <Link to={'/#'}>Track Order</Link> </li>
                        <li className=""> <Link to={'/#'}>Contact</Link> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TopNavbar
