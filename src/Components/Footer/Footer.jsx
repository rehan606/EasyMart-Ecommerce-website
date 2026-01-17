import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-100   pt-10 md:pt-20">
            <div className="max-w-1400 mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    <div className="pr-10">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold ">Gr<span className="text-orange-500">o</span>cify</Link>

                        <p className="mt-4 text-zinc-800">Bred for a high content of beneficial substances. Our products adre aall fresh and health.</p>

                        <p className="mt-4 text-zinc-800"> <span className="text-orange-500"> {new Date().getFullYear()} </span> © All Right Reserved.  </p>

                        
                    </div>

                    {/* Company Links */}
                    <div className="">
                        <h3 className="text-xl font-bold text-zinc-800 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li className=""> <Link to={'/about'} className="text-zinc-800 hover:text-orange-500 transition-all duration-300 ">About</Link> </li>
                            <li> <Link to={'/faq'} className="text-zinc-800 hover:text-orange-500 transition-all duration-300 ">FAQ's</Link> </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="">
                        <h3 className="text-xl font-bold text-zinc-800 mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li> <Link to={'/contact'} className="text-zinc-800 hover:text-orange-500 transition-all duration-300 ">Support Center</Link> </li>
                            <li> <Link to={'/feedback'} className="text-zinc-800 hover:text-orange-500 transition-all duration-300 ">Feedback</Link> </li>
                            <li> <Link to={'/contact'} className="text-zinc-800 hover:text-orange-500 transition-all duration-300 ">Contact us</Link> </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="">
                        <h3 className="text-xl font-bold text-zinc-800 mb-4">Stay Connected</h3>
                        <p className="text-zinc-800">Question or Feedback? <br/> we'd love to hear from you. </p>

                            <div className='p-1 items-center rounded-full border border-orange-400 flex mt-4 bg-white'>
                                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 outline-none '  />

                                <button className='w-10 h-10 text-xl text-white rounded-full bg-linear-to-b from-orange-400 to-orange-500 flex items-center justify-center cursor-pointer '><IoSearchSharp /></button>

                            </div> 
                    </div>
                </div>   
                
            </div>

            {/* Developer Name  */}
            <div className=' mt-20 text-center bg-zinc-900 text-white italic '>
                <p className='py-4 '>This website Developed By - <a className='text-orange-500' href="https://www.linkedin.com/in/kh-rehan207/" target='_blank'>Rehan</a> </p> 
            </div>
        </footer>
    )
}

export default Footer