import React from 'react'
import TopNavbar from './TopNavbar'
import MiddleNavbar from './MiddleNavbar'
import BottomNavbar from './BottomNavbar'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-30 '>
            <TopNavbar />
            <MiddleNavbar />
            <BottomNavbar />
        </div>
    )
}

export default Navbar
