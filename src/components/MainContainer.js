import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    // <div className={`${isMenuOpen ? `col-span-10` : `col-span-12`} overflow-y-scroll `}>
    <div className="min-w-0 w-full">
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
