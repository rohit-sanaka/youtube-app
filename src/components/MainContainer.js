import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {

  return (
    // <div className={`${isMenuOpen ? `col-span-10` : `col-span-12`} overflow-y-scroll `}>
    <div className={`w-full h-full overflow-scroll `}>
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer