const Shimmer = () => {
  // create an array with empty elements of 16 size
  return Array(10)
    .fill('')
    .map((_, index) => {
      return (
        <div key={index}>
          <div className="h-52 w-full rounded-xl bg-gray-300"></div>
          <div className="mt-3 flex w-full child:px-5">
            <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            <div className="w-full ">
              <div className="m-1 h-5 w-3/4 bg-gray-300"></div>
              <div className="m-1 h-5 w-1/2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      )
    })
}

export default Shimmer
