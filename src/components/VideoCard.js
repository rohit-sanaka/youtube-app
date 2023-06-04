import { filterVideoInfo } from '../utils/helperFuntions.js'
import useFetch from '../utils/useFetch.js'
import { useState } from 'react'
import { API_KEY } from '../utils/constants.js'

const VideoCard = ({ info }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [isChannelImageLoading, setIsChannelImageLoading] = useState(true)

  const { channelTitle, title, channelId, elapsedTime, url, videoDuration, views } = filterVideoInfo(info)

  const CHANNEL_DATA_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${API_KEY}`

  const [channelData] = useFetch(CHANNEL_DATA_API_URL)
  const { url: channelUrl } = channelData[0]?.snippet?.thumbnails?.medium || {}

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

export default VideoCard
