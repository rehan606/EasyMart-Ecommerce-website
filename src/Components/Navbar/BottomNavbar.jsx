import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const categories = [
  "Electronics",
  "Groceries",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
];

const countries = ["Bangladesh", "India", "USA", "UK", "Canada"];

const menuItems = [
  {
    name: "Home",
    path: "/",
    // submenu: ["Home Two", "Home Three"],
  },
  {
    name: "Shop Now",
    path: "/products",
    // submenu: ["New Arrivals", "Best Sellers", "Top Rated"],
  },
  {
    name: "Categories",
    path: "/categories",
    // submenu: ["Electronics", "Fashion", "Groceries"],
  },
  {
    name: "Blogs",
    path: "/blogs",
    // submenu: ["Latest Blogs", "Tech News", "Guides"],
  },
  {
    name: "Offers",
    path: "/offers",
    // submenu: ["Flash Sale", "Discounts", "Coupons"],
  },
  {
    name: "Others",
    path: "/others",
    submenu: ["About Us", "Contact", "FAQ"],
  },
];

const BottomNavbar = () => {

    const [catOpen, setCatOpen] = useState(false);
    const [countryOpen, setCountryOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("Country");

    return (
        <section className="border-b border-t border-b-zinc-200 border-t-zinc-200 bg-white sticky top-0 z-30">
            <nav className="container mx-auto  px-10 md:px-8">
                <div className=" flex items-center justify-between h-16">
                    
                    {/* Left - All Categories */}
                    <div className="relative">
                    <button
                        onClick={() => setCatOpen(!catOpen)}
                        className="flex items-center gap-2 bg-[#F02640] text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                       <BiCategory /> All Categories <FaChevronDown />
                    </button>

                    {catOpen && (
                        <ul className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md z-50">
                        {categories.map((cat) => (
                            <li
                            key={cat}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            >
                            {cat}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>

                   

                    {/* Desktop Menu  */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => {
                            const hasSubmenu = item.submenu && item.submenu.length > 0;

                            return (
                                <div key={item.name} className="relative group">
                                    <ul>
                                        <li className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#F02640]">
                                            <NavLink
                                                to={item.path}
                                                className={({ isActive }) =>
                                                    isActive ? "textColor1" : "text-zinc-800"
                                                }
                                                >
                                                {item.name}
                                            </NavLink>

                                            {/* ✅ Arrow only if submenu exists */}
                                            {hasSubmenu && (
                                            <FaChevronDown className="text-xs mt-1" />
                                            )}
                                        </li>
                                    </ul>

                                    {/* ✅ Submenu only if exists */}
                                    {hasSubmenu && (
                                        <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md
                                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                                        transition-all duration-200 z-40">
                                            {item.submenu.map((sub) => (
                                                <li
                                                    key={sub}
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {sub}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    {/* Right - Country */}
                    <div className="relative hidden lg:block">
                        <button
                            onClick={() => setCountryOpen(!countryOpen)}
                            className="flex items-center gap-2 bg-[#F02640] text-white px-4 py-2 rounded-md text-sm font-medium"
                        >
                            <IoLocationOutline /> {selectedCountry} <FaChevronDown />
                        </button>

                        {countryOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                                {countries.map((country, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                        setSelectedCountry(country); // SET Country
                                        setCountryOpen(false);        // CLOSE Country Dropdown
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {country}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-2xl"
                    >
                    {mobileOpen ? <FaTimes className="text-zinc-800 font-light" /> : <FaBars className="text-zinc-800 font-light" />}
                    </button>
                </div>

                {/* Mobile Menu */}

                {mobileOpen && (
                    <div className="lg:hidden bg-white border-t border-zinc-200">
                        {menuItems.map((item) => {
                            const hasSubmenu = item.submenu && item.submenu.length > 0;

                            return (
                                <div key={item.name} className="border-b border-zinc-200 px-4 py-2">

                                    {/* 👉 If submenu exists */}
                                    {hasSubmenu ? (
                                        <details>
                                            <summary className="cursor-pointer font-medium">
                                                {item.name}
                                            </summary>
                                            <ul className="mt-2 ml-4">
                                                {item.submenu.map((sub) => (
                                                <li key={sub} className="py-1 text-sm text-gray-500">
                                                    {sub}
                                                </li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        /* 👉 If NO submenu */
                                        <NavLink
                                            to={item.path}
                                            className="block font-medium text-gray-700 py-1"
                                            onClick={() => setMobileOpen(false)}
                                            >
                                            {item.name}
                                        </NavLink>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

            </nav>
        </section>
    );
}

export default BottomNavbar;
