import { filterVideoInfo } from '../utils/helperFuntions.js'
import { useState } from 'react'

const SuggestedVideoCard = ({ info }) => {
  const [isImageLoading, setIsImageLoading] = useState(true)

  const { channelTitle, title, elapsedTime, url, videoDuration, views } = filterVideoInfo(info)

  return (
    <div className="flex w-full cursor-pointer justify-start gap-3">
      <div className="relative w-5/12">
        {isImageLoading && <div className="left-0 top-0 block aspect-video w-full rounded-xl bg-gray-200"></div>}
        <img
          className={`${isImageLoading ? 'hidden' : ''} h-full rounded-xl `}
          onLoad={() => {
            setIsImageLoading(false)
          }}
          src={url}
          alt="thumbnail"
        />
        {!isImageLoading && videoDuration && (
          <p className="absolute bottom-2 right-2 rounded-md bg-black px-1 text-sm font-semibold text-white">
            {videoDuration}
          </p>
        )}
      </div>

      <div className="w-7/12 text-base">
        <h1 className="line-clamp-2  break-words font-semibold">{title}</h1>
        <h3 className="line-clamp-1 text-gray-500">{'Channel : ' + channelTitle}</h3>
        <div className="flex items-center gap-3  text-gray-500">
          {views && (
            <>
              <h3>{views + ' views'}</h3>
              <p className="font-bold">|</p>
            </>
          )}
          <h3>{elapsedTime}</h3>
        </div>
      </div>
    </div>
  )
}

export default SuggestedVideoCard
