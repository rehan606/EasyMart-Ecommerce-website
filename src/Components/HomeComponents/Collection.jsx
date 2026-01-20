import React from 'react'
import collection1 from '../../assets/images/12.jpg'
import collection2 from '../../assets/images/13.jpg'
import collection3 from '../../assets/images/14.jpg'
import Button from '../Button/Button'

const Collection = () => {
    return (
        <section>
            <div className="container mx-auto px-4 md:px-10 py-10">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border border-zinc-200 p-4 rounded-md'>

                    {/* Collection Card 1 */}
                    <div
                        className='bg-cover h-80 flex items-center justify-end p-10 relative '
                        style={{ backgroundImage: `url(${collection1})` }}
                    >
                        {/* overlay */}
                        <div className='absolute inset-0 bg-black/30'></div>

                        {/* content wrapper */}
                        <div className='relative z-10 flex flex-col items-center lg:items-end text-center lg:text-end gap-6'>
                            <h3 className='text-2xl lg:text-4xl text-white font-bold'>
                                Women's <br /> Collection
                            </h3>
                            <Button title="Shop Now" path="/products" />
                        </div>
                    </div>
 
                    {/* Collection Card 2 */}
                    <div
                        className='bg-cover h-80 flex items-center justify-end p-10 relative'
                        style={{ backgroundImage: `url(${collection2})` }}
                    >
                        {/* overlay */}
                        <div className='absolute inset-0 bg-black/50'></div>

                        {/* content wrapper */}
                        <div className='relative z-10 flex flex-col lg:items-end text-center lg:text-end gap-6'>
                            <h3 className='text-2xl lg:text-4xl text-white font-bold'>
                                Childrens <br /> Collection
                            </h3>
                            <Button title="Shop Now" path="/products" />
                        </div>
                    </div>

                    {/* Collection Card 3 */}
                    <div
                        className='bg-cover h-80 flex items-center justify-end p-10 relative'
                        style={{ backgroundImage: `url(${collection3})` }}
                    >
                        {/* overlay */}
                        <div className='absolute inset-0 bg-black/40'></div>

                        {/* content wrapper */}
                        <div className='relative z-10 flex flex-col lg:items-end text-center lg:text-end gap-6'>
                            <h3 className='text-2xl lg:text-4xl text-white font-bold'>
                                Men's <br /> Collection
                            </h3>
                            <Button title="Shop Now" path="/products" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Collection
