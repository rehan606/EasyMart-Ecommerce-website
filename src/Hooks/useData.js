import React, { useEffect, useState } from 'react'

const useData = () => {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('../../src/Data/category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    useEffect(() =>{
        fetch('../../src/Data/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])



    return { categories, products }
}

export default useData
