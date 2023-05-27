import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className="flex items-start px-6">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
