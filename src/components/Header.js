import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu, openMenu } from '../utils/appSlice'
import { SEARCH_SUGGESTIONS_API_URL } from '../utils/constants'
import { MdSearch } from 'react-icons/md'
import { useRef } from 'react'
import MouseDownLink from '../utils/MouseDownLink'

const Header = () => {
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [isfocused, setIsFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [backToHome, setBackToHome] = useState()
  const searchQueryRef = useRef('')
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
                setBackToHome(true)
              }}
            />
          </Link>
        </div>

        <form
          className="flex h-full  w-5/12 items-center text-center"
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          <input
            type="text"
            value={backToHome ? '' : searchQueryRef.current}
            onChange={(e) => {
              setBackToHome(false)
              searchQueryRef.current = e.target.value
              setSearchQuery(e.target.value)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="h-full w-full rounded-l-full border border-solid border-gray-500 px-6 text-lg shadow-inner shadow-neutral-300 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-0"
          />
          <MouseDownLink
            to={searchQuery ? `/results?search_query=${searchQuery}` : ''}
            className="h-full w-16 rounded-r-full border border-gray-500 bg-gray-100 "
          >
            <button
              type="submit"
              className="h-full w-full text-center text-xl"
              onMouseDown={(event) => {
                event.preventDefault()
                setIsFocused(false)
                setBackToHome(false)
              }}
            >
              <MdSearch className="m-auto text-gray-500" size="25px" />
            </button>
          </MouseDownLink>
        </form>

        <div className="flex w-48 items-center justify-end">
          <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
        </div>
      </div>
      {searchSuggestions.length > 0 && isfocused && (
        <ul className="fixed left-[29.8%] top-16 z-50 w-[37%] rounded-2xl bg-white py-3 outline outline-1 outline-slate-200 child:my-2">
          {searchSuggestions.map((suggestion) => {
            return (
              <MouseDownLink
                key={suggestion}
                to={`/results?search_query=${suggestion}`}
                className="flex cursor-pointer items-center justify-start py-2 text-lg hover:bg-neutral-200"
              >
                <MdSearch className="mx-5  text-gray-500" size="25px" />
                <li
                  key={suggestion}
                  onMouseDown={(event) => {
                    searchQueryRef.current = event.target.innerHTML
                    setSearchQuery(event.target.innerHTML)
                    setIsFocused(false)
                    setBackToHome(false)
                  }}
                >
                  {suggestion}
                </li>
              </MouseDownLink>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default memo(Header)
