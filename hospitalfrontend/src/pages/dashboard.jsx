import React from 'react';
import { Link } from 'react-router-dom';

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

         </div>

         {/* Recent Appointments */}
         <div className="dashboard-section">

            <div className="section-header">
               <h2>Recent Appointments</h2>

               <Link to="/appointments">
                  View All
               </Link>
            </div>

            <div className="appointment-table">

               <div className="table-header">
                  <span>Patient</span>
                  <span>Doctor</span>
                  <span>Date</span>
                  <span>Status</span>
               </div>

               <div className="table-row">
                  <span>Rahul Kumar</span>
                  <span>Dr. Rahul Sharma</span>
                  <span>19 Aug 2026</span>
                  <span className="status confirmed">
                     Confirmed
                  </span>
               </div>

               <div className="table-row">
                  <span>Ananya Sharma</span>
                  <span>Dr. Priya Mehta</span>
                  <span>20 Aug 2026</span>
                  <span className="status pending">
                     Pending
                  </span>
               </div>

               <div className="table-row">
                  <span>Vikas Singh</span>
                  <span>Dr. Amit Verma</span>
                  <span>21 Aug 2026</span>
                  <span className="status confirmed">
                     Confirmed
                  </span>
               </div>

            </div>

         </div>

      </div>
   );
}

export default Dashboard;