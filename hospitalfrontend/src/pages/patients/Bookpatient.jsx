import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/dashboard.css";

function Bookpatient() {
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: 'Male',
      contactNumber: '',
      bloodGroup: 'O+'
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch(
            'http://localhost:5000/api/patients',
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(formData)
            }
         );

         if (response.ok) {
            alert('Patient registered successfully!');

            setFormData({
               firstName: '',
               lastName: '',
               dateOfBirth: '',
               gender: 'Male',
               contactNumber: '',
               bloodGroup: 'O+'
            });

            navigate('/patients');
         } else {
            alert('Failed to register patient');
         }

      } catch (error) {
         console.error('Error:', error);
         alert('Unable to connect to server');
      }
   };

   return (
      <div>

         <div className="page-header">

            <div>
               <h1>Book Patient</h1>
               <p>Register a new patient in the hospital</p>
            </div>

         </div>

         <div className="data-card">

            <form
               className="patient-form"
               onSubmit={handleSubmit}
            >

               {/* First Name */}
               <div className="form-group">
                  <label>First Name</label>

                  <input
                     type="text"
                     name="firstName"
                     placeholder="Enter first name"
                     value={formData.firstName}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* Last Name */}
               <div className="form-group">
                  <label>Last Name</label>

                  <input
                     type="text"
                     name="lastName"
                     placeholder="Enter last name"
                     value={formData.lastName}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* Date of Birth */}
               <div className="form-group">
                  <label>Date of Birth</label>

                  <input
                     type="date"
                     name="dateOfBirth"
                     value={formData.dateOfBirth}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* Gender */}
               <div className="form-group">
                  <label>Gender</label>

                  <select
                     name="gender"
                     value={formData.gender}
                     onChange={handleChange}
                  >
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Other">Other</option>
                  </select>
               </div><br />

               {/* Contact */}
               <div className="form-group">
                  <label>Contact Number</label>

                  <input
                     type="tel"
                     name="contactNumber"
                     placeholder="Enter contact number"
                     value={formData.contactNumber}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               {/* Blood Group */}
               <div className="form-group">
                  <label>Blood Group</label>

                  <select
                     name="bloodGroup"
                     value={formData.bloodGroup}
                     onChange={handleChange}
                  >
                     <option value="A+">A+</option>
                     <option value="A-">A-</option>
                     <option value="B+">B+</option>
                     <option value="B-">B-</option>
                     <option value="O+">O+</option>
                     <option value="O-">O-</option>
                     <option value="AB+">AB+</option>
                     <option value="AB-">AB-</option>
                  </select>
               </div><br /><br /><br />

               {/* Buttons */}
               <div className="form-actions">

                  <button
                     type="button"
                     className="secondary-button"
                     onClick={() => navigate('/patients')}
                  >
                     Cancel
                  </button>&nbsp;&nbsp;&nbsp;

                  <button
                     type="submit"
                     className="primary-button"
                  >
                     Register Patient
                  </button>

               </div>

            </form>

         </div>

      </div>
   );
}

export default Bookpatient;