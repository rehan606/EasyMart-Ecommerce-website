import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollTop/ScrollToTop'
import ScrollTop from '../Components/ScrollTop/ScrollTop'


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <ScrollTop />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default MainLayout
