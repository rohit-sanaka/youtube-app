import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { VIDEO_LIST_API_URL } from '../utils/constants'
import { memo } from 'react'
import Shimmer from './Shimmer'

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const { data: videoData, isLoading, error } = useFetch(VIDEO_LIST_API_URL)

  if (error) {
    return <h1 className="text-center">{error}</h1>
  }

  return (
    <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-x-5 gap-y-7 px-20 pt-1 transition-all`}>
      {isLoading ? (
        <Shimmer />
      ) : (
        Array.isArray(videoData) &&
        videoData.length > 0 &&
        videoData.map((info) => (
          <Link key={info.id} to={`/watch?v=${info.id}`}>
            <VideoCard info={info} />
          </Link>
        ))
      )}
    </div>
  )
}

export default memo(VideoContainer)
