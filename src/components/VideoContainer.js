import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { VIDEO_LIST_API_URL } from '../utils/constants'
import { memo } from 'react'
import Shimmer from './Shimmer'

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const [videoData, isLoading, error] = useFetch(VIDEO_LIST_API_URL)
  console.log(isLoading)
  console.log(error)
  if (error) {
    return <h1 className="text-center">{error}</h1>
  }
  return (
    <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-5 gap-y-10 pt-6 px-28 `}>
      {isLoading ? (
        <Shimmer />
      ) : (
        videoData &&
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
