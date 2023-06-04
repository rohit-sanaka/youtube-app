import { useSelector } from 'react-redux'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import useOnline from '../utils/useOnline'

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const isOnline = useOnline()

  if (!isOnline) {
    return <div className={`${isMenuOpen ? 'ml-60' : ''} pr-6 text-center`}>No internet</div>
  }
  return (
    <div className={`${isMenuOpen ? 'ml-60' : ''} pr-6`}>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
