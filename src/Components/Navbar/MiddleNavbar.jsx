import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const MiddleNavbar = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto px-4 md:px-10'>
                <div className='flex items-center justify-between py-4'>
                    {/* Logo */}
                    <div>
                        <Link to="/" className="flex items-center gap-1">
                            <LiaShoppingBagSolid className="text-2xl  textColor1 rounded-md " />
                                
                            <h2 className="text-2xl font-bold">Easy<span className="textColor1">Mart</span></h2>
                           
                        </Link>
                    </div>

                    {/* Search Bar  */}
                    <div className=' items-center gap-2 hidden md:flex lg:w-1/2 border border-gray-300 rounded-md px-3 py-2'>
                        <input type="text" placeholder='Search Products...' className='outline-none w-full text-md' />
                        <CiSearch className='text-2xl cursor-pointer'/>
                    </div>

                    {/*User and Cart Icon  */}
                    <div className='flex items-center  gap-6'>
                        <Link to='/login' className='hidden md:flex items-center  gap-2'>
                            <AiOutlineUser className='text-2xl' />
                            <div className='textColor'>
                                <span className="text-xs">Account</span>
                                <h2 className='text-xs font-semibold uppercase'>Login</h2>
                            </div>
                        </Link>
                        <Link to="/cart" className='flex items-center  gap-2'>
                            
                            <PiShoppingCartSimpleLight className='text-2xl' />
                            <div className='textColor'>
                                <span className="text-xs">Cart</span>
                                <h2 className='text-xs font-semibold uppercase'>0-items</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default MiddleNavbar
