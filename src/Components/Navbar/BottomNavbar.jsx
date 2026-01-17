import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const BottomNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const categories = ["Electronics", "Fashion", "Grocery", "Home", "Sports"];
  const countries = ["Bangladesh", "India", "USA", "UK"];

  const menus = [
    {
      name: "Home",
      sub: ["Overview", "Featured"]
    },
    {
      name: "Categories",
      sub: ["Electronics", "Fashion", "Grocery"]
    },
    {
      name: "Products",
      sub: ["New Arrivals", "Best Sellers"]
    },
    {
      name: "Blogs",
      sub: ["Latest Blogs", "Tech News"]
    },
    {
      name: "Offers",
      sub: ["Discounts", "Flash Sale"]
    }
  ];

  return (
    <nav className="w-full bg-white shadow relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Left: All Categories */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center gap-2 bg-[#F02640] text-white px-4 py-2 rounded-md text-sm"
            >
              All Categories <FaChevronDown />
            </button>

            {categoryOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Middle Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {menus.map((menu, i) => (
              <li key={i} className="relative group cursor-pointer">
                <div className="flex items-center gap-1">
                  {menu.name}
                  <FaChevronDown className="text-xs" />
                </div>

                {/* Submenu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
                  {menu.sub.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Right: Country Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-2 bg-[#F02640] text-white px-4 py-2 rounded-md text-sm"
            >
              Country <FaChevronDown />
            </button>

            {countryOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                {countries.map((country, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            {menus.map((menu, i) => (
              <div key={i} className="py-2 border-b">
                <p className="font-medium">{menu.name}</p>
                <div className="pl-4 text-sm text-gray-600">
                  {menu.sub.map((s, idx) => (
                    <p key={idx}>{s}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default BottomNavbar;
