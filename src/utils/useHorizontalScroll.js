import { useRef, useEffect, useState } from 'react'

const useHorizontalScroll = () => {
  const scrollRef = useRef(0)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + scrollOffset
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth

      setShowLeftButton(scrollPosition > 0)
      setShowRightButton(scrollPosition <= maxScrollLeft - 10)
    }
  }

  useEffect(() => {
    const scrollLeft = scrollRef.current
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollLeft) {
        scrollLeft.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return [scrollRef, scroll, showLeftButton, showRightButton]
}

export default useHorizontalScroll
