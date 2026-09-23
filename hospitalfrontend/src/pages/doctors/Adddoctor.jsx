import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/dashboard.css";

function AddDoctor() {
   const navigate = useNavigate();

   // 1. UPDATED STATE: Matches backend Schema exactly!
   const [doctor, setDoctor] = useState({
      name: '',
      specialization: '',
      phone: '',
      experience: '',
      consultationFee: ''
   });

   const handleChange = (e) => {
      setDoctor({
         ...doctor,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch('http://localhost:5000/api/doctors', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(doctor)
         });

         if (response.ok) {
            alert('Doctor added successfully!');
            navigate('/doctors');
         } else {
            alert('Failed to add doctor. Check your backend.');
         }
      } catch (error) {
         console.error('Error saving doctor:', error);
         alert('Server error. Is your backend running?');
      }
   };

   return (
      <div className="dashboard-page">
         <div className="page-header">
            <div>
               <h1>Add Doctor</h1>
               <p>Register a new doctor</p>
            </div>
         </div>

         <div className="data-card">
            <form className="patient-form" onSubmit={handleSubmit}>

               <div className="form-group">
                  <label>Doctor Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Enter doctor name"
                     value={doctor.name}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* 2. UPDATED INPUT: Changed name to "specialization" */}
               <div className="form-group">
                  <label>Specialization</label>
                  <input
                     type="text"
                     name="specialization"
                     placeholder=" e.g. Cardiologist "
                     value={doctor.specialization}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               <div className="form-group">
                  <label>Phone</label>
                  <input
                     type="text"
                     name="phone"
                     placeholder=" Phone number "
                     value={doctor.phone}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               <div className="form-group">
                  <label>Experience (Years)</label>
                  <input
                     type="number"
                     name="experience"
                     placeholder=" Years of experience "
                     value={doctor.experience}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* 3. NEW INPUT: Consultation Fee */}
               <div className="form-group">
                  <label>Consultation Fee (₹)</label>
                  <input
                     type="number"
                     name="consultationFee"
                     placeholder=" e.g. 500 "
                     value={doctor.consultationFee}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               <div className="form-actions">
                  <button
                     type="button"
                     className="secondary-button"
                     onClick={() => navigate('/doctors')}
                  >
                     Cancel
                  </button>&nbsp;&nbsp;&nbsp;

                  <button
                     type="submit"
                     className="primary-button"
                  >
                     Save Doctor
                  </button>
               </div>

            </form>
         </div>
      </div>
   );
}

export default AddDoctor;