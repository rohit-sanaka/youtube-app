const Shimmer = () => {
  // create an array with empty elements of 16 size
  return Array(10)
    .fill('')
    .map((_, index) => {
      return (
        <div key={index}>
          <div className="aspect-video w-full rounded-xl bg-gray-200"></div>
          <div className="w-full child:px-5">
            <div className="m-1 h-5 w-3/4 bg-gray-200"></div>
            <div className="m-1 h-5 w-1/2 bg-gray-200"></div>
          </div>
        </div>
      )
    })
}

export default Shimmer
