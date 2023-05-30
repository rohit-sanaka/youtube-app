import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { filterVideoInfo } from '../utils/helperFuntions'
import { filterChannelInfo } from '../utils/helperFuntions'
import Linkify from 'react-linkify'
import { linkDecorator } from '../utils/helperFuntions'

const VideoPlayer = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')

  const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCLIeN6oscxgiWk5wh9wiVYA1s78DdMGIg`
  const info = useFetch(VIDEO_INFO_API_URL)
  const { channelTitle, channelId, description, title, elapsedTime, views, likes, comments } =
    filterVideoInfo(info[0]) || {}

  const CHANNEL_DATA_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=AIzaSyCLIeN6oscxgiWk5wh9wiVYA1s78DdMGIg`
  const channelData = useFetch(CHANNEL_DATA_API_URL)
  const { url: channelUrl, subscribers } = (channelData && filterChannelInfo(channelData[0])) || {}

  return (
    <div className="w-full pt-6 pr-2 pl-7 mx-auto">
      <iframe
        className="w-full aspect-video"
        src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1'}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="child:my-2">

        {/* title */}
        <h1 className="mt-2 w-11/12 line-clamp-2 break-words text-lg font-semibold">{title}</h1>

        {/* channel and subscribe, likes */}
        <div className="flex items-start gap-3">
          <img className="w-12 rounded-full " src={channelUrl} alt="thumbnail" />
          <div>
            <h3 className="text-lg ">{channelTitle}</h3>
            <p className="text-sm leading-loose  text-gray-500">{subscribers + ' subscribers'}</p>
          </div>
          <div>{likes}</div>
        </div>

        {/* Descrription */}
        <div
          className={`${
            isCollapsed ? 'cursor-pointer bg-gray-100  hover:bg-zinc-300 overflow-hidden' : 'bg-zinc-200 '
          }  rounded-lg px-3 py-5 relative`}
          onClick={() => {
            isCollapsed && setIsCollapsed(false)
          }}
        >
          <div className="flex gap-3 items-center child:font-bold">
            <h3>{views + ' views'}</h3>
            <h3>{elapsedTime}</h3>
          </div>
          <p className={`whitespace-pre-line ${isCollapsed ? 'h-12' : ''} mb-2 overflow-hidden`}>
            <Linkify componentDecorator={linkDecorator}>{description}</Linkify>
          </p>
          <button
            className="absolute bottom-0 left-3 font-bold"
            onClick={() => {
              setIsCollapsed((prevState) => !prevState)
            }}
          >
            {isCollapsed ? 'Show more' : 'Show Less'}
          </button>
        </div>
        
        <div>{comments + ' comments'}</div>
      </div>
    </div>
  )
}
export default VideoPlayer
