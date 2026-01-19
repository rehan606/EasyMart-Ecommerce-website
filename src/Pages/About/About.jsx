import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from "react-icons/fa";
import Features from "../../Components/HomeComponents/Features";
import about1 from '../../assets/images/about.png';
import about2 from '../../assets/images/about-2.png';
import about3 from '../../assets/images/about-3.png';

const About = () => {
    return (
        <div className="w-full">

            {/* ===== Hero Section ===== */}
            <section className="bg-linear-to-r from-black via-[#F02640] to-black text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About EasyMart
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-white/90">
                        EasyMart is your trusted online marketplace where quality products,
                        affordable prices, and fast delivery come together for a seamless
                        shopping experience.
                    </p>
                </div>
            </section>

            {/* ===== About Content ===== */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                    EasyMart is an innovative e-commerce platform designed to make
                    online shopping simple, fast, and reliable. We focus on delivering
                    high-quality products while ensuring customer satisfaction at
                    every step.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                    Our goal is to empower customers with a smooth shopping journey,
                    secure payments, and dependable after-sales support.
                    </p>
                </div>

                {/* Image */}
                <div className="flex items-center gap-4">
                    
                    <div className="">
                        <img className="w-96 rounded-lg" src={about1} alt="about"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className="w-96 rounded-lg" src={about2} alt="about-image" />
                        <img className="w-96 rounded-lg" src={about3} alt="about" />
                    </div>
                </div>

                </div>
            </section>

            {/* ===== Features Section ===== */}
            <section className="bg-gray-100 py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        What We <span className="textColor1">Offer</span>
                    </h2>
                    <div className=" bg-white rounded-lg">
                        <Features/>
                    </div>
                </div>
            </section>

            {/* ===== Why Choose Us ===== */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Why Choose <span className="textColor1">EasyMart?</span> 
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    We believe shopping should be simple and enjoyable. EasyMart focuses
                    on quality, transparency, and customer trust — making us a reliable
                    choice for your everyday needs.
                </p>
                </div>
            </section>

        </div>
    );
};

export default About;
