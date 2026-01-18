import React, { useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import useData from '../../Hooks/useData'
import ProductCard from '../ProductCard/ProductCard'

const NewArrivals = () => {
  const { categories, products } = useData()

  // active category state
  const [activeCategory, setActiveCategory] = useState('All')

  // filter products based on category
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          product => product.category === activeCategory
        )

  return (
    <section>
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-10 gap-6">
          <SectionTitle
            title="New"
            color="Arrivals"
            subtitle="This is a new section"
          />

          {/* Category Buttons */}
          <div className="flex flex-wrap items-center gap-4">
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
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    activeCategory === category.name
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
