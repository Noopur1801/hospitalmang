import React from 'react';
import { Link } from 'react-router-dom';
import "/src/pages/dashboard.css";
function Doctors() {

   const doctors = [
      {
         id: 1,
         name: 'Dr. Rahul Sharma',
         specialty: 'Cardiologist',
         experience: '12 years'
      },
      {
         id: 2,
         name: 'Dr. Priya Mehta',
         specialty: 'Dermatologist',
         experience: '8 years'
      },
      {
         id: 3,
         name: 'Dr. Amit Verma',
         specialty: 'Orthopedic',
         experience: '10 years'
      }
   ];

   return (

      <div>

         <div className="page-header">

            <div>
               <h1>Doctors</h1>
               <p>Manage hospital doctors</p>
            </div>

            <Link
               to="/doctors/add"
               className="primary-button"
            >
               + Add Doctor
            </Link>

         </div>

         <div className="doctor-grid">

            {doctors.map(doctor => (

               <div
                  className="doctor-card"
                  key={doctor.id}
               >

                  <div className="doctor-avatar">
                     {doctor.name.charAt(4)}
                  </div>

                  <h3>{doctor.name}</h3>

                  <p className="specialty">
                     {doctor.specialty}
                  </p>

                  <p>
                     Experience: {doctor.experience}
                  </p>

                  <button className="view-button">
                     View Profile
                  </button>

               </div>

            ))}

         </div>

      </div>

   );
}

export default Doctors;