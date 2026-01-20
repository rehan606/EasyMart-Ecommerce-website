import React from 'react'
import heroBg from '../../assets/images/HERO-COVER.jpg'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div className=' lg:mt-4 lg:mb-16 '>
            <div className='  bg-cover h-[50vh] lg:h-[70vh] ' style={{backgroundImage: `url(${heroBg})`}}>
                <div className='container mx-auto h-full flex items-center px-4 md:px-10'>
                <div className='md:w-1/2 h-full flex flex-col justify-center gap-2 '>
                    <h2 className='textColor1 text-md md:text-2xl '>70% off for Summer Sale </h2>
                    <h1 className='textColor text-3xl md:text-4xl lg:text-6xl font-bold mb-10 '>Biggest Sale For <span className='textColor1'>Man</span> & <span className='textColor1'>women</span></h1>

                    <Button path="/products" title="Shop Now"/> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
