const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: Image Section */}
        <div className="space-y-4">
          <div className="h-96 bg-gray-200 rounded-xl"></div>

          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-20 w-20 bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-5">
          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

          {/* Rating */}
          <div className="h-4 w-32 bg-gray-200 rounded"></div>

          {/* Price */}
          <div className="h-6 w-40 bg-gray-200 rounded"></div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          </div>

          {/* Quantity */}
          <div className="h-10 w-32 bg-gray-200 rounded"></div>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
