import { FaShippingFast, FaHeadset, FaUndoAlt, FaLock } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      subtitle: "Free shipping on all orders over $99",
      icon: <FaShippingFast />,
    },
    {
      id: 2,
      title: "14/7 Support",
      subtitle: "Online support available 14 hours a day",
      icon: <FaHeadset />,
    },
    {
      id: 3,
      title: "30 Days Return",
      subtitle: "Simply return within 30 days",
      icon: <FaUndoAlt />,
    },
    {
      id: 4,
      title: "Payment Secure",
      subtitle: "100% secure payment system",
      icon: <FaLock />,
    },
  ];

  return (
    <section className="pb-16 pt-10 lg:pt-16">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-zinc-200 p-4 rounded-md">
          {features.map((item) => (
            <div
              key={item.id}
              className="text-center gap-2 p-6 rounded-xl border border-zinc-200 hover:shadow-lg transition"
            >
              <p className=" textColor1 text-3xl mb-4 flex justify-center">
                {item.icon}
                </p>
                <h4 className="text-lg font-semibold text-zinc-900">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-500 mt-1">
                  {item.subtitle}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
