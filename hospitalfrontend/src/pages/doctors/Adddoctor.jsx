import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/dashboard.css";

function AddDoctor() {

   const navigate = useNavigate();

   const [doctor, setDoctor] = useState({
      name: '',
      specialty: '',
      phone: '',
      experience: ''
   });

   const handleChange = (e) => {

      setDoctor({
         ...doctor,
         [e.target.name]: e.target.value
      });

   };

   const handleSubmit = (e) => {

      e.preventDefault();

      console.log('Doctor:', doctor);

      alert('Doctor added successfully!');

      navigate('/doctors');

   };

   return (

      <div>

         <div className="page-header">

            <div>
               <h1>Add Doctor</h1>
               <p>Register a new doctor</p>
            </div>

         </div>

         <div className="data-card">

            <form
               className="patient-form"
               onSubmit={handleSubmit}
            >

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

               <div className="form-group">

                  <label>Specialization</label>

                  <input
                     type="text"
                     name="specialty"
                     placeholder=" e.g. Cardiologist "
                     value={doctor.specialty}
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

                  <label>Experience</label>

                  <input
                     type="number"
                     name="experience"
                     placeholder=" Years of experience "
                     value={doctor.experience}
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