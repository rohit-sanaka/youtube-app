import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import VideoPlayer from './VideoPlayer'
import VideoSuggestions from './VideoSuggestions'

const WatchPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    dispatch(closeMenu())
  }, [dispatch])

  return (
    <div className="watchpage ">
      <VideoPlayer />
      <VideoSuggestions />
    </div>
  )
}

export default WatchPage
