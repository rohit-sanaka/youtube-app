import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className='grid grid-cols-12 px-5'>
      <Sidebar  />
      <MainContainer  />
    </div>
  )
}

export default Body