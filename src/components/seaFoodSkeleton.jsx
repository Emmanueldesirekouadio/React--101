function SeafoodSkeleton() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 animate-pulse"
          >
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    );
  }

export default SeafoodSkeleton;