import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    // <div className='grid grid-flow-col overflow-hidden px-6'>
    <div className='h-[92.8vh] overflow-hidden grid grid-flow-col px-6'>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body