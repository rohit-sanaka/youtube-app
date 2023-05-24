import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if (!isMenuOpen) { return null }

  return (
    <div className="col-span-2 px-2" >
      <ul className='list-none child:py-1'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className='w-[80%]' />
      <h2 className='text-lg'>Explore</h2>
      <ul className='list-none child:py-1'>
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Subscriptions</li>
      </ul>
    </div >
  )
}

export default Sidebar