import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./dashboard.css";

function Dashboard() {
   // State to store our live numbers
   const [stats, setStats] = useState({
      patients: 0,
      doctors: 0,
      appointments: 0,
      pending: 0
   });

   // State to store the latest appointments for the table
   const [recentAppointments, setRecentAppointments] = useState([]);

   // Fetch data when the dashboard loads
   useEffect(() => {
      Promise.all([
         fetch('http://localhost:5000/api/patients').then(res => res.json()),
         fetch('http://localhost:5000/api/doctors').then(res => res.json()),
         fetch('http://localhost:5000/api/appointments').then(res => res.json())
      ])
         .then(([patientsData, doctorsData, appointmentsData]) => {
            // Calculate pending appointments
            const pendingCount = appointmentsData.filter(app => app.status === 'Pending').length;

            // Update statistics
            setStats({
               patients: patientsData.length,
               doctors: doctorsData.length,
               appointments: appointmentsData.length,
               pending: pendingCount
            });

            // Grab the 3 most recent appointments for the table
            setRecentAppointments(appointmentsData.slice(0, 3));
         })
         .catch(err => console.error("Error fetching dashboard data:", err));
   }, []);

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
               <div className="stat-icon patient-icon">👥</div>
               <div>
                  <p>Total Patients</p>
                  <h2>{stats.patients}</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon doctor-icon">👨‍⚕️</div>
               <div>
                  <p>Total Doctors</p>
                  <h2>{stats.doctors}</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon appointment-icon">📅</div>
               <div>
                  <p>Appointments</p>
                  <h2>{stats.appointments}</h2>
               </div>
            </div>

            <div className="stat-card">
               <div className="stat-icon pending-icon">⏳</div>
               <div>
                  <p>Pending</p>
                  <h2>{stats.pending}</h2>
               </div>
            </div>

         </div>

         {/* Quick Actions */}
         <div className="dashboard-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions">

               <Link to="/patients/book" className="action-card">
                  <span>👤</span>
                  <div>
                     <strong>Register Patient</strong>
                     <p>Add a new patient</p>
                  </div>
               </Link>

               <Link to="/appointments/book" className="action-card">
                  <span>📅</span>
                  <div>
                     <strong>Book Appointment</strong>
                     <p>Schedule an appointment</p>
                  </div>
               </Link>

               <Link to="/doctors/add" className="action-card">
                  <span>👨‍⚕️</span>
                  <div>
                     <strong>Add Doctor</strong>
                     <p>Register a new doctor</p>
                  </div>
               </Link>

            </div>
         </div>

         <br /><hr /><br /><br />

         {/* Recent Appointments */}
         <div className="dashboard-section">

            <div className="section-header">
               <h2>Recent Appointments : </h2>
               <Link to="/appointments">View All</Link>
            </div>

            <br /><br /><hr /><br />

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
                     {recentAppointments.length > 0 ? (
                        recentAppointments.map((app, index) => (
                           <tr key={app._id || index}>
                              <td>{app.patient}</td>
                              <td>{app.doctor}</td>
                              <td>{app.date}</td>
                              <td>
                                 <span className={`status ${app.status?.toLowerCase()}`}>
                                    {app.status}
                                 </span>
                              </td>
                           </tr>
                        ))
                     ) : (
                        <tr>
                           <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                              No recent appointments found.
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

         </div>

      </div>
   );
}

export default Dashboard;