import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';

const Main = () => {
  return (
    <div className='container  mx-auto'>
      <Header />
      <Landing />
      <Outlet />
    </div>
  );
};

export default Main;