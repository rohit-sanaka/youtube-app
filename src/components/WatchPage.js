import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import VideoPlayer from './VideoPlayer'
import VideoSuggestions from './VideoSuggestions'

const WatchPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className="watchpage ">
      <VideoPlayer />
      <VideoSuggestions />
    </div>
  )
}

export default WatchPage
