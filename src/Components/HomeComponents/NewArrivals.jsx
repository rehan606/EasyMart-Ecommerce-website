import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import useData from '../../Hooks/useData'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'

const NewArrivals = () => {
  const { categories, products } = useData()

  // active category state (All বা category id)
  const [activeCategory, setActiveCategory] = useState('All')



  // filter products based on categoryId
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          product => product.categoryId === activeCategory
        )

  return (
    <section>
      <div className="container mx-auto px-4 md:px-10 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-10 gap-6">
          <SectionTitle
            title="New"
            color="Arrivals"
            subtitle="This is a new section"
          />

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {/* All Button */}
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition
                ${
                  activeCategory === 'All'
                    ? 'bg-[#F02640] text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-orange-100'
                }`}
            >
              All
            </button>

            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    activeCategory === category.id
                      ? 'bg-[#F02640] text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-orange-100'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 border border-zinc-200 p-4 rounded-md">
          {filteredProducts
            ?.sort((a, b) => b.rating - a.rating)
            .slice(0, 8)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <div className="flex justify-center mt-10 mx-auto">
          <Link
            to="/products"
            className="customBg text-white px-6 py-2 rounded-md text-center"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
