import { filterVideoInfo } from '../utils/helperFuntions.js'
import { useState } from 'react'

const VideoCard = ({ info }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const { channelTitle, title, elapsedTime, url, videoDuration, views } = filterVideoInfo(info)

  return (
    <div>
      <div className="relative aspect-auto w-auto">
        {isImageLoading && <div className="absolute left-0 top-0 aspect-video w-full rounded-xl bg-gray-200"></div>}
        <img
          className=" min-w-full rounded-xl transition-all hover:rounded-none "
          onLoad={() => {
            setIsImageLoading(false)
          }}
          src={url}
          alt="thumbnail"
        />
        {!isImageLoading && (
          <p className="absolute bottom-2 right-2 rounded-md bg-black px-1 text-sm font-semibold text-white">
            {videoDuration}
          </p>
        )}
      </div>

      <div>
        <h1 className="line-clamp-2 w-11/12 break-words font-semibold">{title}</h1>
        <h3 className="line-clamp-1  text-gray-500">{'Channel : ' + channelTitle}</h3>
        <div className="flex items-center gap-3  text-gray-500">
          <h3>{views + ' views'}</h3>
          <p className="font-bold">|</p>
          <h3>{elapsedTime}</h3>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
