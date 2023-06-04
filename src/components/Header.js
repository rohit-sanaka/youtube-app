import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu, openMenu } from '../utils/appSlice'
import { SEARCH_SUGGESTIONS_API_URL } from '../utils/constants'
import { MdSearch } from 'react-icons/md'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [isfocused, setIsFocused] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const getSearchSuggestions = async () => {
      const responce = await fetch(SEARCH_SUGGESTIONS_API_URL + searchQuery)
      const data = await responce.json()
      setSearchSuggestions(data[1])
    }
    const timer = setTimeout(() => {
      getSearchSuggestions()
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  return (
    <>
      <div className="sticky top-0 z-10 flex h-16 justify-between bg-white px-6 py-2">
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
        <form className="flex h-full  w-5/12 items-center text-center text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="h-full w-full rounded-l-full border border-solid border-gray-500 px-6 text-lg shadow-inner shadow-neutral-300 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-0"
          />
          <button
            className="h-full w-16 rounded-r-full border border-gray-500 bg-gray-100 text-center text-xl"
            onClick={(event) => {
              event.preventDefault()
            }}
          >
            <MdSearch className="m-auto text-gray-500" size="25px" />
          </button>
        </form>

        <div className="flex w-48 items-center justify-end">
          <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
        </div>
      </div>
      {searchSuggestions.length > 0 && isfocused && (
        <ul className="fixed left-[30%] top-16  z-50 w-[37%] rounded-2xl bg-white py-3 shadow-2xl child:my-2 ">
          {searchSuggestions.map((suggestion) => {
            return (
              <li className="flex-start flex cursor-pointer px-5 py-1 text-lg hover:bg-gray-400" key={suggestion}>
                <MdSearch className="mr-3 text-gray-500" size="25px" /> {suggestion}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default memo(Header)
