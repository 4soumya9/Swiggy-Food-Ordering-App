const Shimmer = () => {
    return (
      <div className="shimmer-container w-full max-w-screen-lg mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Shimmer Cards */}
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
        <div className="shimmer-card bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
      </div>
    );
  };
  
  export default Shimmer;
  