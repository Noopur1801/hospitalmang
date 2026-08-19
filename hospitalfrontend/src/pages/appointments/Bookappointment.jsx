import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Bookappointment() {
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      patient: '',
      doctor: '',
      date: '',
      time: '',
      reason: '',
      status: 'Pending'
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Appointment:', formData);

      alert('Appointment booked successfully!');

      navigate('/appointments');
   };

   return (
      <div>

         {/* Page Header */}
         <div className="page-header">
            <div>
               <h1>Book Appointment</h1>
               <p>Schedule an appointment for a patient</p>
            </div>
         </div>

         {/* Appointment Form */}
         <div className="data-card">

            <form
               className="patient-form"
               onSubmit={handleSubmit}
            >

               {/* Patient */}
               <div className="form-group">
                  <label>Patient</label>

                  <select
                     name="patient"
                     value={formData.patient}
                     onChange={handleChange}
                     required
                  >
                     <option value="">
                        Select Patient
                     </option>

                     <option value="Rahul Kumar">
                        Rahul Kumar
                     </option>

                     <option value="Ananya Sharma">
                        Ananya Sharma
                     </option>

                     <option value="Vikas Singh">
                        Vikas Singh
                     </option>
                  </select>
               </div>

               {/* Doctor */}
               <div className="form-group">
                  <label>Doctor</label>

                  <select
                     name="doctor"
                     value={formData.doctor}
                     onChange={handleChange}
                     required
                  >
                     <option value="">
                        Select Doctor
                     </option>

                     <option value="Dr. Rahul Sharma">
                        Dr. Rahul Sharma - Cardiologist
                     </option>

                     <option value="Dr. Priya Mehta">
                        Dr. Priya Mehta - Dermatologist
                     </option>

                     <option value="Dr. Amit Verma">
                        Dr. Amit Verma - Orthopedic
                     </option>
                  </select>
               </div>

               {/* Date */}
               <div className="form-group">
                  <label>Appointment Date</label>

                  <input
                     type="date"
                     name="date"
                     value={formData.date}
                     onChange={handleChange}
                     required
                  />
               </div>

               {/* Time */}
               <div className="form-group">
                  <label>Appointment Time</label>

                  <input
                     type="time"
                     name="time"
                     value={formData.time}
                     onChange={handleChange}
                     required
                  />
               </div>

               {/* Reason */}
               <div className="form-group full-width">
                  <label>Reason for Visit</label>

                  <textarea
                     name="reason"
                     value={formData.reason}
                     onChange={handleChange}
                     placeholder="Enter reason for appointment..."
                     rows="5"
                  />
               </div>

               {/* Status */}
               <div className="form-group">
                  <label>Status</label>

                  <select
                     name="status"
                     value={formData.status}
                     onChange={handleChange}
                  >
                     <option value="Pending">
                        Pending
                     </option>

                     <option value="Confirmed">
                        Confirmed
                     </option>
                  </select>
               </div>

               {/* Buttons */}
               <div className="form-actions">

                  <button
                     type="button"
                     className="secondary-button"
                     onClick={() => navigate('/appointments')}
                  >
                     Cancel
                  </button>

                  <button
                     type="submit"
                     className="primary-button"
                  >
                     Book Appointment
                  </button>

               </div>

            </form>

         </div>

      </div>
   );
}

export default Bookappointment;