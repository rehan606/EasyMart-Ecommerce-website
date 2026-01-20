import React, { useState,  } from 'react'
import useData from '../../Hooks/useData'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import ProductCard from '../../Components/ProductCard/ProductCard'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'

const ProductDetails = () => {
    const { products } = useData()
    const { id } = useParams()

    // ===== Find product safely =====
    const product = products?.find(p => p.id === Number(id))

    // ===== States =====
    const [qty, setQty] = useState(1)
    const [selectedColor, setSelectedColor] = useState(null)

    // ===== Set default color when product loads =====
    //   useEffect(() => {
    //     if (product?.colors?.length) {
    //       setSelectedColor(product.colors[0])
    //     }
    //   }, [product])

    // ===== Loading state =====
    if (!product) {
        return (
        <div className="py-20 text-center text-gray-500">
            Loading product details...
        </div>
        )
    }

    return (
        <section className="pt-8 lg:pt-16 pb-16">
            <div className="container mx-auto px-4 md:px-10">

                {/* ===== Main Grid ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">

                    {/* ================= LEFT: IMAGE ================= */}
                    <div className="relative flex justify-center border border-zinc-200 p-4 rounded-lg">
                        {product?.badge && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded">
                            {product.badge}
                        </span>
                        )}

                        <img
                        src={product?.image}
                        alt={product?.title}
                        className="max-h-400 object-contain"
                        />
                    </div>

                    {/* ================= RIGHT: DETAILS ================= */}
                    <div className="space-y-4 border border-zinc-200 p-6 rounded-lg">

                        <p className="text-sm text-gray-500">
                        Category: <span className="font-medium">{product?.category}</span>
                        </p>

                        <h1 className="text-2xl md:text-3xl font-bold">
                        {product?.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span className="font-medium">{product?.rating}</span>
                        <span className="text-sm text-gray-500">
                            ({product?.stock} in stock)
                        </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold textColor1">
                            ৳ {product?.salePrice}
                        </span>
                        <span className="line-through text-gray-400">
                            ৳ {product?.price}
                        </span>
                        </div>

                        <p className="text-gray-600">
                        {product?.description}
                        </p>

                        {/* Brand & SKU */}
                        <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Brand:</strong> {product?.brand}</p>
                        <p><strong>SKU:</strong> {product?.sku}</p>
                        </div>

                        {/* Colors */}
                        {product?.colors?.length > 0 && (
                        <div>
                            <p className="font-medium mb-2">Available Colors</p>
                            <div className="flex gap-3">
                            {product.colors.map((color, index) => (
                                <button
                                key={index}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border-2 ${
                                    selectedColor === color
                                    ? "border-[#F02640]"
                                    : "border-gray-300"
                                }`}
                                style={{ backgroundColor: color }}
                                />
                            ))}
                            </div>
                        </div>
                        )}

                        {/* Quantity */}
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center justify-start gap-4">
                                <p className="font-medium ">Quantity</p>
                                <div className="flex items-center border border-zinc-200  rounded-md">
                                    <button
                                    className="px-3 py-1"
                                    onClick={() => qty > 1 && setQty(qty - 1)}
                                    >
                                    -
                                    </button>
                                    <span className="px-4">{qty}</span>
                                    <button
                                    className="px-3 py-1"
                                    onClick={() => qty < product.stock && setQty(qty + 1)}
                                    >
                                    +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <button className="w-full md:w-auto customBg text-white px-8 py-3 rounded hover:bg-black transition">
                            Add to Cart
                            </button>
                        </div>
                        {/* Tags */}
                        {product?.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 text-sm">
                            {product.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="border px-3 py-1 rounded text-gray-600"
                            >
                                #{tag}
                            </span>
                            ))}
                        </div>
                        )}

                    </div>
                </div>

                {/* ===== Featured Products ===== */}
                <div className="mt-16 mb-6">
                    <SectionTitle title='Featured ' color="Products"/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4  border border-zinc-200 p-4 rounded-lg   '>
                    
                    {
                        products.slice(0, 4).map(prod => (
                            <ProductCard product={prod} key={prod._id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
