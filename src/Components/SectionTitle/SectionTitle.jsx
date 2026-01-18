import React from 'react'

const SectionTitle = ({title, color, subtitle}) => {
    return (
        <div className=''>
            <div className="container mx-auto ">
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold  '>{title} <span className='textColor1'>{color}</span></h2>
                        <p className=' text-gray-600'>{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle
