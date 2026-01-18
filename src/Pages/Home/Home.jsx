import React from 'react'
import Hero from '../../Components/HomeComponents/Hero'
import Category from '../../Components/HomeComponents/Category'
import NewArrivals from '../../Components/HomeComponents/NewArrivals'
import LatestBanner from '../../Components/HomeComponents/LetestBanner'

const Home = () => {
  return (
    <div>
        <Hero />
        <Category />
        <NewArrivals />
        <LatestBanner  />
    </div>
  )
}

export default Home
