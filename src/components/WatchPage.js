import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import VideoPlayer from './VideoPlayer'
import VideoSuggestions from './VideoSuggestions'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')

  window.scrollTo({ top: 0, behavior: 'smooth' })
  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className="watchpage ">
      <VideoPlayer videoId={videoId} />
      <VideoSuggestions videoId={videoId} />
    </div>
  )
}

export default WatchPage
