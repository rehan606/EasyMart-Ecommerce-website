import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import useData from '../../Hooks/useData'
import { Link } from 'react-router-dom';

const NewArrivals = () => {

    const { categories, products } = useData();

    return (
        <section>
            <div className='container mx-auto px-10 '>
                <div className='flex items-center justify-between pb-10'>
                    <SectionTitle title='New' color='Arrivals' subtitle='This is a new section' />

                    <div className='flex items-center justify-end gap-4'>
                        {categories.map(category => (
                            <div key={category.id} className='my-10'>
                                <button className='text-md cursor-pointer'>{category?.name}</button>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>


        </section>
    )
}

export default NewArrivals
