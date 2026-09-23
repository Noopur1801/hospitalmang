import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "/src/pages/dashboard.css";

function Appointments() {
   // 1. Create state to hold the real appointments from the database
   const [appointments, setAppointments] = useState([]);

   // 2. Fetch the appointments from your backend when the page loads
   useEffect(() => {
      fetch('http://localhost:5000/api/appointments')
         .then(res => res.json())
         .then(data => setAppointments(data))
         .catch(error => console.error("Error fetching appointments:", error));
   }, []);

   return (
      <div className="dashboard-page">
         <div className="page-header">
            <div>
               <h1>Appointments</h1>
               <p>Manage patient appointments</p>
            </div>
            <Link to="/appointments/book" className="primary-button">
               + Book Appointment
            </Link>
         </div>

         <div className="data-card">
            <div className="appointment-list">
               {appointments.length > 0 ? (
                  appointments.map(appointment => (
                     <div className="appointment-card" key={appointment._id}>
                        <div>
                           {/* Reach inside the populated object to get the names */}
                           <h3>
                              {appointment.patient
                                 ? `${appointment.patient.firstName} ${appointment.patient.lastName}`
                                 : 'Unknown Patient'}
                           </h3>

                           <p>
                              {appointment.doctor
                                 ? appointment.doctor.name
                                 : 'Unknown Doctor'}
                           </p>
                        </div>

                        <div>
                           <strong>
                              {/* Format the date nicely if needed */}
                              {new Date(appointment.appointmentDate).toLocaleDateString()}
                           </strong>
                           <p>
                              {new Date(appointment.appointmentDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                           </p>
                        </div>

                        <span className={`status ${appointment.status?.toLowerCase()}`}>
                           {appointment.status}
                        </span>
                     </div>
                  ))
               ) : (
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                     <p>No appointments found. Book one to get started!</p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}

export default Appointments;