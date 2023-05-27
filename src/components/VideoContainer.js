import { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    fetchVideoData()
  }, [])

  const fetchVideoData = async () => {
    const responce = await fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=AIzaSyCLIeN6oscxgiWk5wh9wiVYA1s78DdMGIg'
    )
    const data = await responce.json()

    setVideoData(data.items)
  }

  return (
    <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-5 gap-y-10 pt-10 px-28 `}>
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
