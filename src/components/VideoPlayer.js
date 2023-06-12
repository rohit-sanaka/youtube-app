import { useState } from 'react'
import useFetch from '../utils/useFetch'
import { filterVideoInfo } from '../utils/helperFuntions'
import { filterChannelInfo } from '../utils/helperFuntions'
import Linkify from 'react-linkify'
import { linkDecorator } from '../utils/helperFuntions'
import { CHANNEL_INFO_API_URL, VIDEO_INFO_API_URL } from '../utils/constants'
import Comments from './Comments'

const VideoPlayer = ({ videoId }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const { data: info, error } = useFetch(VIDEO_INFO_API_URL + videoId)
  const { channelTitle, channelId, description, title, elapsedTime, views, likes, comments } =
    filterVideoInfo(info?.[0]) || {}

  const { data: channelData, err } = useFetch(CHANNEL_INFO_API_URL + channelId)
  const { url: channelUrl, subscribers } = filterChannelInfo(channelData?.[0]) || {}

  if (err || error) {
    return <h1 className="text-center">{error || err}</h1>
  }
  return (
    <div className="mx-auto w-full pl-7 pr-2 pt-6">
      <iframe
        className="aspect-video w-full"
        src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="child:my-2">
        <h1 className="mt-2 line-clamp-2 w-11/12 break-words text-lg font-semibold">{title}</h1>

        {/* channel and subscribe, likes */}
        <div className="flex items-start gap-3">
          {channelUrl && <img className="w-12 rounded-full " src={channelUrl} alt="thumbnail" />}
          <div>
            <h3 className="text-lg ">{channelTitle}</h3>
            <p className="text-sm leading-loose  text-gray-500">{subscribers + ' subscribers'}</p>
          </div>
          <div>{likes}</div>
        </div>

        {/* Descrription */}
        <div
          className={`${
            isCollapsed ? 'cursor-pointer overflow-hidden  bg-gray-100 hover:bg-zinc-300' : 'bg-zinc-200 '
          }  relative rounded-lg px-3 py-5`}
          onClick={() => {
            isCollapsed && setIsCollapsed(false)
          }}
        >
          <div className="flex items-center gap-3 child:font-bold">
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
        <Comments videoId={videoId} />
      </div>
    </div>
  )
}
export default VideoPlayer
