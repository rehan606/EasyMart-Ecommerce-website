import React from "react";
import useData from "../../Hooks/useData";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

const BrandPartners = () => {
    const { products } = useData();

    const brands = Array.from(
    new Map(
        (Array.isArray(products) ? products : []).map(item => [
        item.brand,
        { name: item.brand, image: item.image }
        ])
    ).values()
    );


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">

        {/* Section Title */}
        <div className="mb-10">
            <SectionTitle title='Our Trusted' color="Brands" subtitle="Partnering with premium & trusted brands" />
        </div>

        

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col items-center justify-center group h-28 border border-zinc-300">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-12 object-contain grayscale group-hover:grayscale-0 transition"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {brand.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BrandPartners;
