import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './components.css';

function Layout() {
   return (
      <div className="layout">
         <Sidebar />

         <main className="main-content">
            <Outlet />
         </main>
      </div>
   );
}

export default Layout;