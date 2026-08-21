import React from 'react';
import { Link } from 'react-router-dom';
import "./dashboard.css";

function Dashboard() {
   return (
      <div className="dashboard">

         {/* Header */}
         <div className="page-header">
            <div>
               <h1>Dashboard</h1>
               <p>Welcome back to the Hospital Management System</p>
            </div>
         </div>

         {/* Statistics */}
         <div className="stats-grid">

            <div className="stat-card">
               <div className="stat-icon patient-icon">
                  👥
               </div>

               <div>
                  <p>Total Patients</p>
                  <h2>248</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon doctor-icon">
                  👨‍⚕️
               </div>

               <div>
                  <p>Total Doctors</p>
                  <h2>32</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon appointment-icon">
                  📅
               </div>

               <div>
                  <p>Appointments</p>
                  <h2>86</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon pending-icon">
                  ⏳
               </div>

               <div>
                  <p>Pending</p>
                  <h2>14</h2>
               </div>
            </div>

         </div>

         {/* Quick Actions */}
         <div className="dashboard-section">

            <h2>Quick Actions</h2>

            <div className="quick-actions">

               <Link
                  to="/patients/book"
                  className="action-card"
               >
                  <span>👤</span>
                  <div>
                     <strong>Register Patient</strong>
                     <p>Add a new patient</p>
                  </div>
               </Link>

               <Link
                  to="/appointments/book"
                  className="action-card"
               >
                  <span>📅</span>
                  <div>
                     <strong>Book Appointment</strong>
                     <p>Schedule an appointment</p>
                  </div>
               </Link>

               <Link
                  to="/doctors/add"
                  className="action-card"
               >
                  <span>👨‍⚕️</span>
                  <div>
                     <strong>Add Doctor</strong>
                     <p>Register a new doctor</p>
                  </div>
               </Link>

            </div>

         </div><br /><hr /><br /><br />

         {/* Recent Appointments */}
         <div className="dashboard-section">

            <div className="section-header">
               <h2>Recent Appointments : </h2>

               <Link to="/appointments">
                  View All
               </Link>
            </div><br /><br /><hr /><br />

            <div className="appointment-table">
               <h2>Appointment Table</h2>

               <table>
                  <thead>
                     <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Status</th>
                     </tr>
                  </thead>

                  <tbody>
                     <tr>
                        <td>Rahul Kumar</td>
                        <td>Dr. Rahul Sharma</td>
                        <td>19 Aug 2026</td>
                        <td>
                           <span className="status confirmed">Confirmed</span>
                        </td>
                     </tr>

                     <tr>
                        <td>Ananya Sharma</td>
                        <td>Dr. Priya Mehta</td>
                        <td>20 Aug 2026</td>
                        <td>
                           <span className="status pending">Pending</span>
                        </td>
                     </tr>

                     <tr>
                        <td>Vikas Singh</td>
                        <td>Dr. Amit Verma</td>
                        <td>21 Aug 2026</td>
                        <td>
                           <span className="status confirmed">Confirmed</span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>

         </div>

      </div>
   );
}

export default Dashboard;