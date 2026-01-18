import React from 'react'
import letestBg from '../../assets/images/execulisive colloction.jpg'
import Button from '../Button/Button'

const LetestBanner = () => {
    return (
        
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
