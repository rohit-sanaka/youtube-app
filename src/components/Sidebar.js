import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className=" w-60 child:w-48 sidebar h-screen sticky top-16 pl-1 pr-3 pb-20 overflow-hidden hover:overflow-scroll font-medium">
      <ul className=" list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="my-3 border-1 border-gray-500" />
      <ul className="list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Library</li>
        <li>History</li>
        <li>Watch later</li>
        <li>Your videos</li>
        <li>Downloads</li>
        <li>Your Clips</li>
      </ul>
      <hr className=" my-3 border-1 border-gray-500" />
      <h2 className="text-lg font-bold">Subscriptions</h2>
      <ul className="list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Akshay Saini</li>
        <li>Muse Asia</li>
        <li>Codevolution</li>
        <li>FreeCodeCamp.org</li>
      </ul>
      <hr className=" my-3 border-1 border-gray-500" />
      <h2 className="text-lg font-bold">Explore</h2>
      <ul className="list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <hr className=" my-3 border-1 border-gray-500" />
      <h2 className="text-lg font-bold">Explore</h2>
      <ul className="list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
      <hr className=" my-3 border-1 border-gray-500" />
      <h2 className="text-lg font-bold">Explore</h2>
      <ul className="list-none child:py-1 child:my-2 child:flex child:gap-7 child:items-center child:text-lg">
        <li>Sports</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
