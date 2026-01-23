import React, { useEffect, useState } from 'react'

const useData = () => {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('/Data/category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    useEffect(() =>{
        fetch('/Data/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    return { categories, products }
}

export default useData
