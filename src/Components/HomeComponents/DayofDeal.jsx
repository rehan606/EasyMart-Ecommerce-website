import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import useData from '../../Hooks/useData';
import ProductCard from '../ProductCard/ProductCard';
import Countdown from '../CountDownTimer/Countdown';

const DayofDeal = () => {
    const {products} = useData();

    return (
        <section>
            <div className='container mx-auto px-4 md:px-10 py-10'>
                <div className='flex items-center justify-between'>
                    <SectionTitle title="Day off The" color="Deal"  subtitle=" Don't wait, The time will be end.   "/>

                    {/* Timer  */} 
                    <div className='flex items-center justify-center gap-4'>
                        <h2 className="hidden md:block text-md font-semibold">Time End:</h2>
                        <Countdown endTime={new Date().setHours(new Date().getHours() + 20)} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 border border-zinc-200 p-4 rounded-md'>
                    {
                        products.slice(-4).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default DayofDeal
