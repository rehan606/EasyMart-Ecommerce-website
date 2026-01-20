import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";

const blogs = [
  {
    id: 1,
    title: "Top 10 Online Shopping Tips in 2026",
    description:
      "Learn smart online shopping tips to save money and avoid scams while shopping from e-commerce platforms.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "E-commerce",
    date: "Jan 10, 2026",
  },
  {
    id: 2,
    title: "Why EasyMart is the Future of Online Shopping",
    description:
      "Discover how EasyMart ensures quality products, fast delivery, and secure payment for customers.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    category: "Business",
    date: "Jan 14, 2026",
  },
  {
    id: 3,
    title: "Best Budget Gadgets You Should Buy This Year",
    description:
      "Explore the best affordable gadgets available on EasyMart that give great value for money.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Gadgets",
    date: "Jan 17, 2026",
  },
  {
    id: 4,
    title: "Best Budget Gadgets You Should Buy This Year",
    description:
      "Explore the best affordable gadgets available on EasyMart that give great value for money.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Gadgets",
    date: "Jan 17, 2026",
  },
  {
    id: 5,
    title: "Top 10 Online Shopping Tips in 2026",
    description:
      "Learn smart online shopping tips to save money and avoid scams while shopping from e-commerce platforms.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "E-commerce",
    date: "Jan 10, 2026",
  },
  {
    id: 6,
    title: "Why EasyMart is the Future of Online Shopping",
    description:
      "Discover how EasyMart ensures quality products, fast delivery, and secure payment for customers.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    category: "Business",
    date: "Jan 14, 2026",
  },
];

const BlogPage = () => {
  return (
    <section className="pb-16 bg-gray-50">
      {/* ===== Header ===== */} 
      <PageHeader title="EasyMart Blogs" description='EasyMart is your trusted online marketplace where quality products, affordable prices, and fast delivery come together for a seamless shopping experience.' />

      <div className="container mx-auto px-4 md:px-10 mt-10 md:mt-16 lg:mt-10">

        {/* ===== Blog Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border border-zinc-200 rounded-lg p-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>

                <h2 className="text-lg font-semibold">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {blog.description}
                </p>

                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-block mt-3 text-black font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
