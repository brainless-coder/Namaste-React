const Shimmer = () => {
  return (
    <>
      <div className="restaurant-list">
        {
          Array(15).fill("").map((ele, index) => {
            return (
              <div key={index} className="card">
                <div className="shimmer-img"></div>
                <div className="shimmer-details"></div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Shimmer;