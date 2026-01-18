import { FaHeart, FaShoppingCart, FaEye, FaSyncAlt, FaStar, } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const {
    image,
    title,
    category,
    price,
    salePrice,
    rating,
    badge,
    colors,

    // description,
    // brand,
    // status,
    // sizes,
    // stock,
    // quantity,
    // createdAt,
  } = product;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Badge */}
    

      {/* {badge && (
        <span className={`${badge === 'NEW' ? 'bg-green-500' : badge === 'SALE' ? 'bg-red-600' : badge === 'HOT' ? 'bg-orange-500' : 'bg-blue-500'} absolute top-3 left-3 z-10 text-white text-xs font-semibold px-3 py-1 rounded-full`}>
          {badge}
        </span>
      )} */}

      {/* Image Section */}
      <div className="relative overflow-hidden bg-zinc-200/40">
        <img
          src={image}
          alt={title}
          className="w-full h-60  group-hover:scale-110 transition-transform duration-500"
        />

        {/* Hover Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <IconBtn icon={<FaHeart />} />
          <IconBtn icon={<FaEye />} />
          <IconBtn icon={<FaSyncAlt />} />
          <IconBtn icon={<FaShoppingCart />} />
        </div>

        {/* Color Variants */}
        {/* <div className="absolute bottom-3 left-3 flex gap-2">
          {colors?.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className="w-4 h-4 rounded-full border border-white shadow cursor-pointer hover:scale-110 transition"
            />
          ))}
        </div> */}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-zinc-500">{category}</p>

        <h3 className="text-base font-semibold text-zinc-800 line-clamp-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={16}
              fill={i < Math.round(rating) ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
          <span className="text-sm text-zinc-500 ml-1">({rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg  textColor1">
            ৳{salePrice}
          </span>
          <span className="text-sm text-zinc-400 line-through">
            ৳{price}
          </span>
        </div>
      </div>
    </div>
  );
};

const IconBtn = ({ icon }) => {
  return (
    <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-zinc-600 hover:bg-orange-500 hover:text-white transition">
      {icon}
    </button>
  );
};

export default ProductCard;
