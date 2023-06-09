import { filterVideoInfo } from '../utils/helperFuntions.js'
import useFetch from '../utils/useFetch.js'
import { useState } from 'react'
import { VIDEO_INFO_API_URL, CHANNEL_INFO_API_URL } from '../utils/constants.js'

const SearchVideoCard = ({ videoId }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isChannelImageLoading, setIsChannelImageLoading] = useState(true)

  const { data: info, error: err } = useFetch(VIDEO_INFO_API_URL + videoId)

  const { channelTitle, title, channelId, elapsedTime, url, videoDuration, views } = filterVideoInfo(info?.[0]) || {}

  const { data: channelData, error } = useFetch(CHANNEL_INFO_API_URL + channelId)

  const { url: channelUrl } = channelData?.[0]?.snippet?.thumbnails?.medium || {}

  if (error || err) {
    return <h1 className="text-center">{error || err}</h1>
  }

  return (
    <div>
      <div className="relative aspect-auto h-56">
        {isImageLoading && <div className="absolute left-0 top-0 h-full w-full  rounded-xl bg-gray-200"></div>}
        <img
          className="min-w-full rounded-xl"
          onLoad={() => {
            setIsImageLoading(false)
          }}
          src={url}
          alt="thumbnail"
        />
        <p className="absolute bottom-2 right-2 rounded-md bg-black px-1 text-sm font-semibold text-white">
          {videoDuration}
        </p>
      </div>

      <div className="my-2 flex items-start gap-3">
        <div className="relative aspect-square h-10">
          {isChannelImageLoading && <div className="absolute aspect-square h-10 rounded-full bg-gray-200"></div>}
          <img
            className="h-10 rounded-full"
            onLoad={() => {
              setIsChannelImageLoading(false)
            }}
            src={channelUrl}
            alt="thumbnail"
          />
        </div>
        <div>
          <h1 className="line-clamp-2 w-11/12 break-words text-lg font-semibold">{title}</h1>
          <h3 className="text-lg  text-gray-500">{channelTitle}</h3>
          <div className="flex items-center gap-3  text-gray-500">
            <h3>{views + ' views'}</h3>
            <p className="font-bold">|</p>
            <h3>{elapsedTime}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchVideoCard
