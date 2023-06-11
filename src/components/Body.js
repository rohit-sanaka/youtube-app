import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import useOnline from '../utils/useOnline'
const Body = () => {
  const isOnline = useOnline()
  return (
    <div>
      <Sidebar />
      <Outlet />
      {!isOnline && (
        <div className=" fixed bottom-0 z-50 w-full bg-gray-400 text-center">No internet Connection - Offline </div>
      )}
    </div>
  )
}

export default Body
