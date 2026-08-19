import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
   return (
      <aside className="sidebar">

         <div className="logo">
            <span className="logo-icon">+</span>
            <span>MediCare</span>
         </div>

         <div className="menu-title">
            MAIN MENU
         </div>

         <nav className="sidebar-nav">

            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
            >
               <span>▦</span>
               Dashboard
            </NavLink>

            <NavLink
               to="/patients"
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
            >
               <span>♙</span>
               Patients
            </NavLink>

            <NavLink
               to="/doctors"
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
            >
               <span>♙</span>
               Doctors
            </NavLink>

            <NavLink
               to="/appointments"
               className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
               }
            >
               <span>▣</span>
               Appointments
            </NavLink>

         </nav>

         <div className="sidebar-bottom">

            <div className="admin-profile">

               <div className="admin-avatar">
                  A
               </div>

               <div>
                  <strong>Admin</strong>
                  <small>Administrator</small>
               </div>

            </div>

         </div>

      </aside>
   );
}

export default Sidebar;