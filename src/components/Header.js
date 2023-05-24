import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {

  const disatch = useDispatch()
  const handleMenuToggle = () => { disatch(toggleMenu()) }
  
  return (
    <div className='grid grid-cols-12 px-5 py-3 shadow-lg'>
      <div className='flex items-center col-span-2'>
        <img className="h-8 mr-5 cursor-pointer hover:bg-gray-200 rounded-full" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="Hamburger-icon"
          onClick={() => { handleMenuToggle() }}
        />
        <img className="h-6 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo-img" />
      </div>

      <form className='col-span-8 text-center flex items-center pl-40'>
        <input type="text" className='w-2/3 border border-gray-500 h-10 rounded-l-full px-6' />
        <button className='w-10 border border-gray-500 bg-gray-300 h-10 rounded-r-full' onClick={(event) => { event.preventDefault() }}>🔍</button>
      </form>
      <div className='col-span-2 flex justify-end'>
        <img className="h-10" src="https://freesvg.org/img/abstract-user-flat-4.png" alt="profile-img" />
      </div>

    </div>
  )
}

export default Header