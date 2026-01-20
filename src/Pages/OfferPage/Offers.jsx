import React from "react";
import { Link } from "react-router-dom";
import offer1 from '../../assets/images/About-1.jpg'
import offer2 from '../../assets/images/About-3.jpg'

const offers = [
  {
    id: 1,
    title: "Mega Flash Sale",
    discount: "50% OFF",
    desc: "Limited time offer on selected products.",
    image: offer1,
  },
  {
    id: 2,
    title: "Weekend Special",
    discount: "30% OFF",
    desc: "Enjoy special discounts this weekend only.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    id: 3,
    title: "New User Offer",
    discount: "20% OFF",
    desc: "Exclusive offer for new EasyMart users.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 4,
    title: "Free Delivery",
    discount: "No Shipping Cost",
    desc: "Free delivery on orders over ৳1500.",
    image: offer2,
  },
];

const Offers = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Special Offers 🔥
        </h2>
        <p className="text-gray-500 mt-3">
          Grab the best deals before they’re gone!
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border border-zinc-200 p-4 rounded-lg">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                {offer.discount}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {offer.desc}
              </p>

              <Link
                to="/shop"
                className="inline-block mt-4 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
