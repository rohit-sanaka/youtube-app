import Button from './Button'
import useHorizontalScroll from '../utils/useHorizontalScroll'
import { memo } from 'react'

const buttonsArray = [
  'All',
  'Gaming',
  'Sports',
  'news',
  'Movies',
  'Enterprise',
  'Events',
  'Entertainment',
  'Jokes',
  'Comnedy',
  'Fun',
  'Fiction',
  'Fantasy',
  'Anime',
  'Action',
  'Science',
  'React',
  'FrontEnd',
]

const ButtonsList = () => {
  const [scrollRef, scroll, showLeftButton, showRightButton] = useHorizontalScroll()

  return (
    <div className="sticky top-14 z-10 flex items-center bg-white py-5">
      {showLeftButton && (
        <button
          className="absolute left-0 mr-5 w-8 rounded-full p-2 shadow-lg shadow-white hover:bg-gray-300"
          onClick={() => scroll(-500)}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="arrow" />
        </button>
      )}

      <div className="mx-10 flex flex-nowrap gap-4 overflow-hidden scroll-smooth hover:overflow-x-auto" ref={scrollRef}>
        {buttonsArray.map((name) => {
          return <Button key={name} name={name} />
        })}
      </div>

      {showRightButton && (
        <button
          className="absolute right-0 z-10 p-2 rounded-full "
          onClick={() => scroll(500)}
        >
          <img className="ml-auto w-5 blur-0" src=" https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="arrow" />
        </button>
      )}
    </div>
  )
}

export default memo(ButtonsList)
