import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/pages/dashboard.css";

function BookAppointment() {
   const navigate = useNavigate();

   // 1. Lists to hold the data for our dropdown menus
   const [patientsList, setPatientsList] = useState([]);
   const [doctorsList, setDoctorsList] = useState([]);

   // 2. State matching your strict Schema exactly
   const [appointment, setAppointment] = useState({
      patient: '', // Will hold the ObjectId
      doctor: '',  // Will hold the ObjectId
      appointmentDate: '',
      reasonForVisit: ''
   });

   // 3. Fetch patients and doctors when the page loads so we can select them
   useEffect(() => {
      fetch('http://localhost:5000/api/patients')
         .then(res => res.json())
         .then(data => setPatientsList(data));

      fetch('http://localhost:5000/api/doctors')
         .then(res => res.json())
         .then(data => setDoctorsList(data));
   }, []);

   const handleChange = (e) => {
      setAppointment({
         ...appointment,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch('http://localhost:5000/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointment)
         });

         if (response.ok) {
            alert('Appointment successfully booked! 🎉');
            navigate('/appointments');
         } else {
            alert('Backend rejected it. Check terminal.');
         }
      } catch (error) {
         console.error('Error saving appointment:', error);
      }
   };

   return (
      <div className="dashboard-page">
         <div className="page-header">
            <div>
               <h1>Book Appointment</h1>
               <p>Schedule a new patient visit</p>
            </div>
         </div>

         <div className="data-card">
            <form className="patient-form" onSubmit={handleSubmit}>

               <div className="form-group">
                  <label>Select Patient</label>
                  <select name="patient" value={appointment.patient} onChange={handleChange} required>
                     <option value="">-- Choose a Patient --</option>
                     {patientsList.map(p => (
                        // We display the name, but save the _id as the value!
                        <option key={p._id} value={p._id}>{p.firstName} {p.lastName}</option>
                     ))}
                  </select>
               </div><br />

               <div className="form-group">
                  <label>Select Doctor</label>
                  <select name="doctor" value={appointment.doctor} onChange={handleChange} required>
                     <option value="">-- Choose a Doctor --</option>
                     {doctorsList.map(d => (
                        <option key={d._id} value={d._id}>{d.name} ({d.specialization})</option>
                     ))}
                  </select>
               </div><br />

               <div className="form-group">
                  <label>Appointment Date & Time</label>
                  {/* datetime-local lets you pick both date and time in one box */}
                  <input
                     type="datetime-local"
                     name="appointmentDate"
                     value={appointment.appointmentDate}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               <div className="form-group">
                  <label>Reason for Visit</label>
                  <input
                     type="text"
                     name="reasonForVisit"
                     placeholder="e.g. Fever and cough"
                     value={appointment.reasonForVisit}
                     onChange={handleChange}
                     required
                  />
               </div><br />

               <div className="form-actions">
                  <button type="button" className="secondary-button" onClick={() => navigate('/appointments')}>
                     Cancel
                  </button>&nbsp;&nbsp;&nbsp;

                  <button type="submit" className="primary-button">
                     Book Appointment
                  </button>
               </div>

            </form>
         </div>
      </div>
   );
}

export default BookAppointment;