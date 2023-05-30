import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import { VIDEO_LIST_API_URL } from '../utils/constants'
const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const videoData = useFetch(VIDEO_LIST_API_URL)
  console.log(videoData)

  return (
    <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-5 gap-y-10 pt-6 px-28 `}>
      {videoData &&
        videoData.map((info) => (
          <Link key={info.id} to={`/watch?v=${info.id}`}>
            {' '}
            <VideoCard info={info} />
          </Link>
        ))}
    </div>
  )
}

export default VideoContainer
