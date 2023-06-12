import { useSelector } from 'react-redux'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'


const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className={`${isMenuOpen ? 'ml-60' : ''} pr-6 transition-all`}>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
