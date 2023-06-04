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
    <div className="flex py-5 px-2 items-center sticky top-16 z-10 bg-white">
      {showLeftButton && (
        <button
          className="w-8 p-2 mr-5 rounded-full hover:bg-gray-300 shadow-lg shadow-white absolute left-0"
          onClick={() => scroll(-500)}
        >
          <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="arrow" />
        </button>
      )}

      <div className="flex flex-nowrap gap-4 mx-10 overflow-hidden hover:overflow-x-auto scroll-smooth" ref={scrollRef}>
        {buttonsArray.map((name) => {
          return <Button key={name} name={name} />
        })}
      </div>

      {showRightButton && (
        <button
          className=" w-8 p-2 ml-5 z-10 rounded-full hover:bg-gray-200 absolute right-0"
          onClick={() => scroll(500)}
        >
          <img src=" https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="arrow" />
        </button>
      )}
    </div>
  )
}

export default memo(ButtonsList)
