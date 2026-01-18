import React from 'react'
import letestBg from '../../assets/images/execulisive colloction.jpg'
// import { Link } from 'react-router-dom'
// import heroBg from '../../assets/images/HERO-COVER.jpg'
import Button from '../Button/Button'

const LetestBanner = () => {
    return (
        // <section style={{backgroundImage: `url (${letestBg})`}} className='bg-cover h-[50vh]'>
        //     <div  className=' container mx-auto px-10 '> 
        //         <div  className="  text-white rounded-lg flex-col  justify-center   flex gap-4  "  >
        //             <p className="textColor1">30% off sale</p>
        //             <h2 className='text-6xl font-bold '>Latest Exclusive <br></br> <span className="textColor1">Summer</span>  Collection</h2>
        //             <div className='flex  mt-8 '>
        //                 <Link to='/products' className="customBg text-white px-6 py-2 rounded-md  text-center ">View All Products</Link>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <div className='my-10 '>
                    <div className='container mx-auto  bg-cover h-[70vh] px-10' style={{backgroundImage: `url(${letestBg})`}}>
                        <div className='w-full h-full flex flex-col items-end justify-center gap-2 text-right '>
                            <p className="">30% off sale</p>
                              <h2 className='text-6xl font-bold text-white mb-10'>Latest Exclusive <br></br> 
                            <span className="textColor1">Summer</span>  Collection</h2>
        
                            <Button path="/products" title="Shop Now"/> 
                        </div>
                    </div>
                </div>
    )
}

export default LetestBanner
