import React from 'react'
import letestBg from '../../assets/images/execulisive colloction.jpg'
import Button from '../Button/Button'

const LetestBanner = () => {
    return (
        
        <div className='my-4 lg:my-10 '>
            <div className='container mx-auto px-4 md:px-10'>
            <div className='  bg-cover h-[50vh] lg:h-[70vh]  relative' style={{backgroundImage: `url(${letestBg})`}}>
                
                {/* overlay */}
                <div className='absolute inset-0 bg-black/40 '></div>
                {/* content wrapper */}
                <div className='w-full h-full flex flex-col text-center md:items-end justify-center md:gap-2 md:text-right relative z-10 px-4 md:px-10'>
                    <p className="md:text-xl text-white">30% off sale</p>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-10'>Latest Exclusive <br></br> 
                    <span className="textColor1">Summer</span>  Collection</h2>
        
                    <Button path="/products" title="Shop Now"/> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default LetestBanner
