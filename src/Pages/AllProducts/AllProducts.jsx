import React from 'react'
import useData from '../../Hooks/useData'

const AllProducts = () => {

    const {products, categories} = useData();


    return (
        <section className='py-16'>
            <div className='container mx-auto px-10 grid grid-cols-12'>
                {/* Category Sidebar */}
                <aside className='col-span-4 '>
                    <div className='   border border-zinc-200 rounded-md p-4 '>
                        <div className='border-b border-zinc-200 mb-4 pb-4'>
                            <h2 className='text-lg '>Filter By Category</h2>
                        </div>
                        <ul className='space-y-4'>
                            {categories.map(category => (
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox"  />
                                    <li key={category.id}>{category.name}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Product Listings */}
                <div className=' col-span-8'>

                </div>
            </div>
        </section>
    )
}

export default AllProducts
