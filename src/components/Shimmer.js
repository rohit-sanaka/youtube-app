const Shimmer = () => {
  // create an array with empty elements of 16 size
  return Array(10)
    .fill('')
    .map((_, index) => {
      return (
        <div key={index}>
          <div className="h-52 w-full bg-gray-300 rounded-xl"></div>
          <div className="flex w-full mt-3 child:px-5">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="w-full ">
              <div className="h-5 m-1 w-3/4 bg-gray-300"></div>
              <div className="h-5 m-1 w-1/2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      )
    })
}

export default Shimmer
