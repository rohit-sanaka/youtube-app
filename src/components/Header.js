import { useDispatch } from 'react-redux'
import { toggleMenu, openMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const handleMenuToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="flex sticky top-0 h-16 justify-between z-10 py-2 px-6 bg-white">
      <div className="flex items-center w-48">
        <img
          className="h-8 mr-5 cursor-pointer hover:bg-gray-200 rounded-full"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="Hamburger-icon"
          onClick={() => {
            handleMenuToggle()
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

      <form className="w-7/12 text-center flex items-center pl-24">
        <input
          type="text"
          className="w-9/12 full border border-gray-500 h-11 rounded-l-full px-6 shadow-neutral-300 shadow-inner"
        />
        <button
          className="w-16 border h-11 border-gray-500 bg-gray-100 text-xl rounded-r-full"
          onClick={(event) => {
            event.preventDefault()
          }}
        >
          🔍
        </button>
      </form>
      <div className="w-48 flex justify-end items-center">
        <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
      </div>
    </div>
  )
}

export default Header
