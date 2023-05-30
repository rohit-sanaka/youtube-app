import { filterVideoInfo } from '../utils/helperFuntions.js'
import useFetch from '../utils/useFetch.js'

const VideoCard = ({ info }) => {
  const { channelTitle, title, channelId, elapsedTime, url, videoDuration, views } = filterVideoInfo(info)

  const CHANNEL_DATA_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=AIzaSyCLIeN6oscxgiWk5wh9wiVYA1s78DdMGIg`

  const channelData = useFetch(CHANNEL_DATA_API_URL)
  const { url: channelUrl } = channelData[0]?.snippet?.thumbnails?.medium || {}

  return (
    <div>
      <div className="relative">
        <img className="min-w-full rounded-xl" src={url} alt="thumbnail" />
        <p className="absolute right-1 bottom-1 px-1 font-semibold text-sm text-white bg-black rounded-md">
          {videoDuration}
        </p>
      </div>
      <div className="flex items-start gap-3 my-2">
        <img className="w-10 rounded-full" src={channelUrl} alt="thumbnail" />
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
