import React from 'react';
import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
const Body = () => {
  return (
    <div className="flex items-start px-6">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
