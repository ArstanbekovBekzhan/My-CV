import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../Aside/Aside';

const Layout = () => {

  return (
    <>
      <Aside/>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };