import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollTop/ScrollToTop'
import ScrollTop from '../Components/ScrollTop/ScrollTop'
import Loader from '../Components/Loader/Loader'



const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    // Simulate loading for demonstration purposes
    setTimeout(() => {
        setLoading(false);
    }, 2000);

    if (loading) {
        return <Loader />;
    }

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
