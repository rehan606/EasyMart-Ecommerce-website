import React from 'react'
import Hero from '../../Components/HomeComponents/Hero'
import Category from '../../Components/HomeComponents/Category'
import NewArrivals from '../../Components/HomeComponents/NewArrivals'
import LatestBanner from '../../Components/HomeComponents/LetestBanner'
import DayofDeal from '../../Components/HomeComponents/DayofDeal'
import Collection from '../../Components/HomeComponents/Collection'
import Features from '../../Components/HomeComponents/Features'
import BrandPartners from '../../Components/HomeComponents/BrandPartners'



const Home = () => {


  return (
    <div>
        <Hero />
        <Category />
        <NewArrivals />
        <LatestBanner  />
        <DayofDeal />
        <Collection />
        <Features />
        <BrandPartners />
    </div>
  )
}

export default Home
