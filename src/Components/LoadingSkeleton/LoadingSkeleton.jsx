const LoadingSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar – Category Filter Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Right Side – Product Grid Skeleton */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-4 space-y-4"
              >
                {/* Image */}
                <div className="h-40 bg-gray-200 rounded-lg animate-pulse"></div>

                {/* Title */}
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>

                {/* Price */}
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>

                {/* Button */}
                <div className="h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingSkeleton;
