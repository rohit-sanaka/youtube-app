import { filterVideoInfo } from '../utils/helperFuntions.js'
import { useState } from 'react'

const SearchVideoCard = ({ info }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const { channelTitle, title, elapsedTime, url } = filterVideoInfo(info)

  window.scrollTo({ top: 0, behavior: 'smooth' })
  return (
    <div>
      <div className="relative aspect-video w-auto">
        {isImageLoading && <div className="absolute left-0 top-0 aspect-video w-full rounded-xl bg-gray-200"></div>}
        <img
          className="min-w-full rounded-xl hover:rounded-none"
          onLoad={() => {
            setIsImageLoading(false)
          }}
          src={url}
          alt="thumbnail"
        />
      </div>

      <div>
        <h1 className="line-clamp-2 w-11/12 break-words  font-semibold ">{title}</h1>
        <h3 className="line-clamp-1   text-gray-500">{'Channel : ' + channelTitle}</h3>
        <h3 className="text-gray-500">{elapsedTime}</h3>
      </div>
    </div>
  )
}

export default SearchVideoCard
