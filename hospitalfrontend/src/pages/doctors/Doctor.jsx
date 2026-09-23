import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "/src/pages/dashboard.css";

function Doctors() {
   // 1. Create an empty state to hold the real doctors from the database
   const [doctors, setDoctors] = useState([]);

   // 2. Fetch the doctors from your backend when the page loads
   useEffect(() => {
      fetch('http://localhost:5000/api/doctors')
         .then(res => res.json())
         .then(data => setDoctors(data))
         .catch(error => console.error("Error fetching doctors:", error));
   }, []);

   return (
      <div className="dashboard-page">
         <div className="page-header">
            <div>
               <h1>Doctors</h1>
               <p>Manage hospital doctors</p>
            </div>

            <Link to="/doctors/add" className="primary-button">
               + Add Doctor
            </Link>
         </div>

         <div className="doctor-grid">
            {doctors.length > 0 ? (
               doctors.map(doctor => (
                  // Using doctor._id (MongoDB standard) or doctor.id as the key
                  <div className="doctor-card" key={doctor._id || doctor.id}>

                     <div className="doctor-avatar">
                        {/* Safely grab the first initial assuming the name starts with "Dr. " */}
                        {doctor.name ? doctor.name.charAt(4) : "D"}
                     </div>

                     <h3>{doctor.name}</h3>

                     {/* UPDATED: Changed from specialty to specialization */}
                     <p className="specialty">{doctor.specialization}</p>

                     <p>Experience: {doctor.experience} years</p>

                     {/* NEW: Added Consultation Fee display */}
                     <p>Fee: ₹{doctor.consultationFee}</p>

                     <button className="view-button">View Profile</button>
                  </div>
               ))
            ) : (
               <p>No doctors found. Please add a doctor.</p>
            )}
         </div>
      </div>
   );
}

export default Doctors;