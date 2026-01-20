import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does EasyMart work?",
    answer:
      " EasyMart allows you to browse shop online, add products to your cart, and get them delivered to your doorstep quickly and safely.",
  },
  {
    question: "Do you provide Authentic products?",
    answer:
      "Yes! We carefully select Authentic, Cloths, Consmatics, and daily essentials to ensure the best quality for our customers.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash on delivery, mobile banking, and secure online payment methods.",
  },
  {
    question: "How fast is the delivery?",
    answer:
      "Delivery usually takes between 2–6 hours depending on your location and order size.",
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "No worries! You can request an easy return or replacement through our support team.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-zinc-50 text-zinc-800">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-orange-900 to-zinc-800 text-white py-12 lg:py-20 mt-10">
        <div className="max-w-1400 mx-auto px-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="textColor1 ">Questions</span>
          </h1>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Find answers to the most common questions about Grocify.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container lg:max-w-4xl mx-auto px-4 md:px-10 ">
          <div className="space-y-4 border border-zinc-200 p-4 rounded-lg ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-xl shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-zinc-800">
                    {faq.question}
                  </span>
                  <span className="textColor1 text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="px-5 pb-5 text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-14 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-zinc-300 mb-6">
          Our support team is always ready to help you.
        </p>
        <Link to={'/contact'} className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition">
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default Faq;