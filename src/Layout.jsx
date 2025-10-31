import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div className='inner'>
          <h1>YTS.<small>MX</small></h1>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Layout;