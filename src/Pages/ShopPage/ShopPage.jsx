import React, { useState } from 'react'
import useData from '../../Hooks/useData'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { FiFilter } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const ShopPage = () => {
    const { products, categories } = useData()

    // ================= STATES =================
    const [selectedCategory, setSelectedCategory] = useState(null)   // selected category
    const [sortType, setSortType] = useState('default')              // sorting
    const [priceRange, setPriceRange] = useState(10000)              // price filter
    const [showFilter, setShowFilter] = useState(false)              // mobile filter drawer

    // ================= CATEGORY CLICK =================
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(prev => prev === categoryId ? null : categoryId)
    }

    // ================= FILTER LOGIC =================
    let filteredProducts = selectedCategory
        ? products.filter(p => p.categoryId === selectedCategory)
        : products

    // price filter
    filteredProducts = filteredProducts.filter(
        p => p.price <= priceRange
    )

    // sorting
    if (sortType === 'lowToHigh') {
        filteredProducts.sort((a, b) => a.price - b.price)
    }
    if (sortType === 'highToLow') {
        filteredProducts.sort((a, b) => b.price - a.price)
    }

  return (
    <section className="pb-10 mt-4">
        <div className="container mx-auto px-4">

            {/* ================= TOP BAR ================= */}
            <div className="flex items-center justify-between mb-6 border-b border-zinc-200 pb-4">

                {/* Filter Button (Mobile & Tablet) */}
                <button
                    onClick={() => setShowFilter(true)}
                    className="flex items-center gap-2 border px-4 py-2 rounded-md md:hidden"
                >
                    <FiFilter />
                    Filter
                </button>

                {/* Sort Dropdown */}
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="border customBorder textColor outline-0 px-4 py-2 rounded-md ml-auto "
                >
                    <option className='hover:customBg hover:text-white' value="default">Sort By</option>
                    <option className='hover:customBg hover:text-white' value="lowToHigh">Price: Low to High</option>
                    <option className='hover:customBg hover:text-white' value="highToLow">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-12 gap-6">

                {/* ================= DESKTOP SIDEBAR ================= */}
                <aside className="hidden md:block md:col-span-3">
                    <FilterSidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    handleCategoryClick={handleCategoryClick}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    />
                </aside>

                {/* ================= MOBILE FILTER DRAWER ================= */}
                {showFilter && (
                    <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
                        <div className="absolute left-0 top-0 h-full w-72 bg-white p-4">
                            
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button onClick={() => setShowFilter(false)}>
                                    <IoClose size={24} />
                                </button>
                            </div>

                            <FilterSidebar
                            categories={categories}
                            selectedCategory={selectedCategory}
                            handleCategoryClick={handleCategoryClick}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            />
                        </div>
                    </div>
                )}

                {/* ================= PRODUCT GRID ================= */}
                <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border border-zinc-200 p-4 rounded-md">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ShopPage

// ================= FILTER SIDEBAR COMPONENT =================
const FilterSidebar = ({
    categories,
    selectedCategory,
    handleCategoryClick,
    priceRange,
    setPriceRange, 
}) => {
 
    return (
        <div className="border border-zinc-200 rounded-md p-4 space-y-6">

            {/* Category Filter */}
            <div>
                <h3 className="font-semibold border-b border-zinc-200 pb-2 mb-4">
                Filter By Category
                </h3>

                <ul className="space-y-3">
                    {categories.map(category => (
                        <li key={category.id}>
                        <label
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <input
                            type="checkbox"
                            checked={selectedCategory === category.id}
                            onChange={() => handleCategoryClick(category.id)}
                            />
                            {category.name}
                        </label>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Price Range */}
            <div>
                <h3 className="font-semibold border-b border-zinc-200 pb-2 mb-4">
                Filter By Price
                </h3>

                <input
                type="range"
                min="0"
                max="100000"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full"
                />

                <p className="text-sm mt-2">
                Max Price: ৳ {priceRange}
                </p>
            </div>

        </div>
    )
}
