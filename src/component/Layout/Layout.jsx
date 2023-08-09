import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Navbar from '../Navbar/Navbar';

const Layout = () => {

  return (
    <>
      <Aside/>
      <main className="container">
        <Outlet />
        <Navbar/>
      </main>
    </>
  );
};

export { Layout };