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
      <div className="relative h-56 aspect-auto">
        {isImageLoading && <div className="absolute w-full h-full top-0 left-0  rounded-xl bg-gray-200"></div>}
        <img
          className="min-w-full rounded-xl"
          onLoad={() => {
            setIsImageLoading(false)
          }}
          src={url}
          alt="thumbnail"
        />
        <p className="absolute right-2 bottom-2 px-1 font-semibold text-sm text-white bg-black rounded-md">
          {videoDuration}
        </p>
      </div>

      <div className="flex items-start gap-3 my-2">
        <div className="h-10 aspect-square relative">
          {isChannelImageLoading && <div className="absolute h-10 aspect-square rounded-full bg-gray-200"></div>}
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
          <h1 className="w-11/12 line-clamp-2 break-words text-lg font-semibold">{title}</h1>
          <h3 className="text-lg  text-gray-500">{channelTitle}</h3>
          <div className="flex gap-3 items-center  text-gray-500">
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
