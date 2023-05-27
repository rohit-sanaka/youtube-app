import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])

  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  return (
    <div className="w-screen h-[calc(100vh-4rem)] pt-12">
      <iframe
        className="w-4/6 h-5/6 "
        // width="560"
        // height="315"
        src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1'}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default WatchPage
