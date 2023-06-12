import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { memo } from 'react'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // if (!isMenuOpen) {
  //   return null
  // }
  return (
    <div
      className={`${
        isMenuOpen ? 'left-0' : '-left-60'
      } sidebar fixed top-14 z-10 h-[calc(100vh-4rem)] w-60 overflow-hidden bg-white py-5 pl-6 pr-3 font-medium hover:overflow-scroll child:w-48 transition-all `}
    >
      <ul className=" list-none child:flex child:items-center child:gap-7 child:rounded-md child:p-2 ">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Home</li>
        </NavLink>
        <NavLink to="shorts" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Shorts</li>
        </NavLink>
        <NavLink to="subscriptions" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Subscriptions</li>
        </NavLink>
      </ul>
      <hr className="border-1 my-3 border-gray-300" />
      <ul className=" list-none child:flex child:items-center child:gap-7 child:rounded-md child:p-2 child:px-2 ">
        <NavLink to="library" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Library</li>
        </NavLink>
        <NavLink to="history" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>History</li>
        </NavLink>
        <NavLink to="watchlater" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Watch later</li>
        </NavLink>
        <NavLink to="yourvideos" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Your videos</li>
        </NavLink>
        <NavLink to="downloads" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Downloads</li>
        </NavLink>
        <NavLink to="yourclips" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Your Clips</li>
        </NavLink>
      </ul>
      <hr className=" border-1 my-3 border-gray-300" />
      <h2 className=" font-bold">Subscriptions</h2>
      <ul className=" list-none child:flex child:items-center child:gap-7 child:rounded-md child:p-2 child:px-2 ">
        <NavLink to="channel" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Akshay Saini</li>
        </NavLink>
        <NavLink to="channel" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Muse Asia</li>
        </NavLink>
        <NavLink to="channel" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Codevolution</li>
        </NavLink>
        <NavLink to="channel" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>FreeCodeCamp.org</li>
        </NavLink>
      </ul>
      <hr className=" border-1 my-3 border-gray-300" />
      <h2 className="font-bold">Explore</h2>
      <ul className=" list-none child:flex child:items-center child:gap-7 child:rounded-md child:p-2 child:px-2 ">
        <NavLink to="trending" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Trending</li>
        </NavLink>
        <NavLink to="sports" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Sports</li>
        </NavLink>
        <NavLink to="movies" className={({ isActive }) => (isActive ? 'bg-gray-200 ' : 'hover:bg-gray-200')}>
          <li>Movies</li>
        </NavLink>
        <NavLink to="music" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Music</li>
        </NavLink>
        <NavLink to="gaming" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Gaming</li>
        </NavLink>
        <NavLink to="live" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>Live</li>
        </NavLink>
        <NavLink to="news" className={({ isActive }) => (isActive ? 'bg-gray-200  ' : 'hover:bg-gray-200')}>
          <li>News</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default memo(Sidebar)
