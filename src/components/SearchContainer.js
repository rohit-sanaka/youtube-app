import { useSelector } from 'react-redux'
import { SEARCH_VIDEO_LIST_API } from '../utils/constants'
import useFetch from '../utils/useFetch'
import { Link, useSearchParams } from 'react-router-dom'
import SearchVideoCard from './SearchVideoCard'
import Shimmer from './Shimmer'

const SearchContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  const [searchParms] = useSearchParams()
  const searchQuery = searchParms.get('search_query')
  const { data: searchSuggestions, isLoading, error } = useFetch(SEARCH_VIDEO_LIST_API + searchQuery) || {}
  if (error) {
    return <h1 className="text-center">{error}</h1>
  }
  return (
    <div className={`${isMenuOpen ? 'ml-60' : ''} pr-6`}>
      <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-5 gap-y-10 px-28 pt-6 `}>
        {isLoading ? (
          <Shimmer />
        ) : (
          Array.isArray(searchSuggestions) &&
          searchSuggestions.length > 0 &&
          searchSuggestions.map((info) => (
            <Link key={info?.id?.videoId} to={`/watch?v=${info?.id?.videoId}`}>
              <SearchVideoCard info={info} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default SearchContainer
