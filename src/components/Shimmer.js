const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list flex flex-wrap m-2 p-2 bg-purple-200">
        {
          Array(9).fill("").map((ele, index) => {
            return (
              <div key={index} className="card w-56 shadow-lg m-2 p-2 animate-pulse bg-gray-100 rounded-md overflow-hidden">
                <div className="shimmer-img m-1 p-1 bg-gray-300 h-48"></div>
                <div className="shimmer-details m-1 p-1 bg-gray-300 h-20 w-40"></div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Shimmer;