import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">

        {/* ===== Header ===== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Contact <span className="textColor1">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need support? Get in touch with EasyMart.
            We are always ready to help you.
          </p>
        </div>

        {/* ===== Main Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-t border-zinc-200 mt-16 pt-10">

          {/* ===== Contact Info ===== */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <div className="customBg text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+880 1234 567 890</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <div className="customBg text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@easymart.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <div className="customBg text-white p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  Sandwip, Chattogram, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* ===== Contact Form ===== */}
          <div className=" p-4 border-2 border-white rounded-xl shadow-xl">
            <form className="space-y-5 bg-white p-4 rounded-xl shadow-lg">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 border customBorder rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border customBorder rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-2 border customBorder rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full customBg text-white py-3 rounded-md font-medium hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
