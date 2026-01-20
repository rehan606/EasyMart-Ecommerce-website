import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from "react-icons/fa";
import Features from "../../Components/HomeComponents/Features";
import about1 from '../../assets/images/About-2.jpg';
import about2 from '../../assets/images/About-1.jpg';
import about3 from '../../assets/images/About-3.jpg';
import PageHeader from "../../Components/PageHeader/PageHeader";

const About = () => {
    return (
        <section className="pt-10">
            {/* ===== Hero Section ===== */}
            <PageHeader title="About EasyMart" description='EasyMart is your trusted online marketplace where quality products, affordable prices, and fast delivery come together for a seamless shopping experience.' />
        
            <div className="container mx-auto px-4 md:px-10">
                {/* ===== About Content ===== */}
                <section className="py-16 px-4">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">

                    

                        {/* Image */}
                        <div className="flex items-center gap-4">
                            
                            <div className="">
                                <img className="w-96 rounded-lg hover:scale-110 transition-all duration-300" src={about1} alt="about"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <img className="w-96 rounded-lg hover:scale-110 transition-all duration-300" src={about2} alt="about-image" />
                                <img className="w-96 rounded-lg hover:scale-110 transition-all duration-300" src={about3} alt="about" />
                            </div>
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Who <span className="textColor1">We Are</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                            EasyMart is an innovative e-commerce platform designed to make
                            online shopping simple, fast, and reliable. We focus on delivering
                            high-quality products while ensuring customer satisfaction at
                            every step.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                            Our goal is to empower customers with a smooth shopping journey,
                            secure payments, and dependable after-sales support.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                            EasyMart is an innovative e-commerce platform designed to make
                            online shopping simple, fast, and reliable. We focus on delivering
                            high-quality products while ensuring customer satisfaction at
                            every step.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                            Our goal is to empower customers with a smooth shopping journey,
                            secure payments, and dependable after-sales support.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

                {/* ===== Features Section ===== */}
                <section className="bg-gray-100 py-10 lg:py-16 px-4 md:px-10">
                    <div className="md:max-w-6xl mx-auto">
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
                    <p className="text-gray-600 leading-relaxed lg:px-20">
                        We believe shopping should be simple and enjoyable. EasyMart focuses
                        on quality, transparency, and customer trust — making us a reliable
                        choice for your everyday needs.
                    </p>
                    </div>
                </section>
        </section>
    );
};

export default About;
