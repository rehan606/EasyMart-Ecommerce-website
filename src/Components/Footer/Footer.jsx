import React from 'react'
import { FaApple } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa6';
import { IoSearchSharp } from "react-icons/io5";
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';

const Footer = () => {

    const {categories} = useData();

    return (
        <footer className="bg-zinc-100   pt-10 lg:pt-22">
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
                    {/* Logo */}
                    <div className="col-span-2 md:pr-20">
                        <Link to="/" className="flex items-center gap-1">
                            <LiaShoppingBagSolid className="text-2xl  textColor1 rounded-md " />
                                
                            <h2 className="text-2xl font-bold">Easy<span className="textColor1">Mart</span></h2>
                           
                        </Link>
                        <p className='mt-4 text-sm'> EasyMart is the biggest Market of cloths, Accesorise, Children's, Men & Women collection </p>

                        <div className='flex items-center gap-2 '>
                            <button className="flex items-center gap-3 border border-gray-300  px-4 py-2 mt-6 hover:shadow-lg transition-all duration-300 bg-zinc-900 cursor-pointer">
                                <FaGooglePlay className='text-3xl text-white'/>
                                <div className='text-left'>
                                    <span className='text-xs text-white '>GET IT ON</span>
                                    <h3 className='font-bold text-sm text-white'>Google Play</h3>
                                </div>  
                            </button>

                            <button className="flex items-center gap-3 border border-gray-300  px-4 py-2 mt-6 hover:shadow-lg transition-all duration-300 bg-zinc-900  cursor-pointer">
                                <FaApple className='text-3xl text-white'/>
                                <div className='text-left'>
                                    <span className='text-xs text-white '>DOWNLOAD ON</span>
                                    <h3 className='font-bold text-sm text-white'>App Store</h3>
                                </div>  
                            </button>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="">
                        <h3 className="text-md font-semibold textColor1 mb-4">Category</h3>
                        <ul className="space-y-3 flex flex-col">
                            {
                                categories.slice(0, 5).map(category => (
                                    <Link to={`/category/${category.slug}`} className="text-zinc-800 hover:textColor1 hover:textColor transition-all duration-300 ">{category.name}</Link>
                                ) )
                            }
                            
                            
                        </ul>
                    </div>

                    

                    {/* Support Links */}
                    <div className="">
                        <h3 className="text-md font-semibold textColor1 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li> <Link to={'/contact'} className="text-zinc-800 hover:textColor1  transition-all duration-300 ">Support Center</Link> </li>
                            <li> <Link to={'/feedback'} className="text-zinc-800 hover:textColor1 transition-all duration-300 ">Feedback</Link> </li>
                            <li> <Link to={'/contact'} className="text-zinc-800 hover:textColor1 transition-all duration-300 ">Contact us</Link> </li>
                            <li className=""> <Link to={'/about'} className="text-zinc-800 hover:textColor1 transition-all duration-300 ">About</Link> </li>
                            <li> <Link to={'/faq'} className="text-zinc-800 hover:textColor1 transition-all duration-300 ">FAQ's</Link> </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="">
                        <h3 className="text-md font-semibold textColor1 mb-4">Contact </h3>
                        <p className="text-zinc-800">Question or Feedback? <br/> we'd love to hear from you. </p>

                            
                    </div>
                </div>   
                
            </div>

            {/* Developer Name  */}
            <div className=' mt-10 lg:mt-20 text-center bg-zinc-900 text-white italic '>
                <p className='py-4 text-sm font-light'>This website Developed By - <a className='textColor1' href="https://www.linkedin.com/in/kh-rehan207/" target='_blank'>Rehan</a> </p> 
            </div>
        </footer>
    )
}

export default Footer