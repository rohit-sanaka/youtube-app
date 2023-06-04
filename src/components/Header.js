import { useDispatch } from 'react-redux'
import { toggleMenu, openMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { memo, useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { SEARCH_SUGGESTIONS_API_URL } from '../utils/constants'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const getSearchSuggestions = async () => {
      const responce = await fetch(SEARCH_SUGGESTIONS_API_URL + searchQuery)
      const data = await responce.json()
      console.log(data[1])
    }
    getSearchSuggestions()
  }, [searchQuery])

  return (
    <div className="flex sticky top-0 h-16 justify-between z-10 py-2 px-6 bg-white">
      <div className="flex items-center w-48">
        <img
          className="h-8 mr-5 cursor-pointer hover:bg-gray-200 rounded-full"
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

      <form className="w-7/12 text-center flex items-center pl-24">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-9/12 border border-solid border-gray-500 h-11 rounded-l-full px-6 shadow-neutral-300 shadow-inner focus:border-blue-500 focus:ring-0 focus:outline-none"
        />
        <button
          className="w-16 border h-11 text-center border-gray-500 bg-gray-100 text-xl rounded-r-full"
          onClick={(event) => {
            event.preventDefault()
          }}
        >
          <MdSearch className="m-auto text-gray-500" size="25px" />
        </button>
      </form>
      <div className="w-48 flex justify-end items-center">
        <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
      </div>
    </div>
  )
}

export default memo(Header)
