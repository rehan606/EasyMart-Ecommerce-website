import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center"
      >
        {/* Logo / Brand */}
        <div className="flex justify-center mb-4">
          <FaShoppingBag className="text-primary text-5xl" />
        </div>

        <h2 className="text-xl font-bold  mb-2">
          EasyMart
        </h2>

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-7xl font-extrabold text-gray-800 mb-4"
        >
          404
        </motion.h1>

        <h3 className="text-2xl font-semibold text-gray-700 mb-3">
          Oops! Page Not Found
        </h3>

        <p className="text-gray-500 mb-8">
          The page you’re looking for might have been removed, renamed,
          or temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg customBg text-white font-medium hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>

          <Link
            to="/products"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Go to Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
