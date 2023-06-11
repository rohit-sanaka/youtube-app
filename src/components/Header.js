import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu, openMenu } from '../utils/appSlice'

import SearchBar from './SearchBar'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="sticky top-0 z-50 flex h-14 justify-between bg-white px-6 py-2">
        <div className="flex w-48 items-center">
          <img
            className="mr-5 h-8 cursor-pointer rounded-full hover:bg-gray-200"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            alt="Hamburger-icon"
            onClick={() => {
              dispatch(toggleMenu())
            }}
          />
          <Link to="/">
            <img
              className="h-6 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
              alt="logo-img"
              onClick={() => {
                dispatch(openMenu())
              }}
            />
          </Link>
        </div>

        <SearchBar />

        <div className="flex w-48 items-center justify-end">
          <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
        </div>
      </div>
    </>
  )
}

export default Header
