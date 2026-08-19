import React from 'react';
import { Link } from 'react-router-dom';

function Appointments() {

   const appointments = [
      {
         id: 1,
         patient: 'Rahul Kumar',
         doctor: 'Dr. Priya Mehta',
         date: '19 Aug 2026',
         time: '10:00 AM',
         status: 'Confirmed'
      },
      {
         id: 2,
         patient: 'Ananya Sharma',
         doctor: 'Dr. Amit Verma',
         date: '19 Aug 2026',
         time: '11:30 AM',
         status: 'Pending'
      },
      {
         id: 3,
         patient: 'Vikas Singh',
         doctor: 'Dr. Rahul Sharma',
         date: '20 Aug 2026',
         time: '09:30 AM',
         status: 'Confirmed'
      }
   ];

   return (

      <div>

         <div className="page-header">

            <div>
               <h1>Appointments</h1>
               <p>Manage patient appointments</p>
            </div>

            <Link
               to="/appointments/book"
               className="primary-button"
            >
               + Book Appointment
            </Link>

         </div>

         <div className="data-card">

            <div className="appointment-list">

               {appointments.map(appointment => (

                  <div
                     className="appointment-card"
                     key={appointment.id}
                  >

                     <div>

                        <h3>
                           {appointment.patient}
                        </h3>

                        <p>
                           {appointment.doctor}
                        </p>

                     </div>

                     <div>
                        <strong>
                           {appointment.date}
                        </strong>

                        <p>
                           {appointment.time}
                        </p>
                     </div>

                     <span
                        className={`status ${appointment.status.toLowerCase()}`}
                     >
                        {appointment.status}
                     </span>

                  </div>

               ))}

            </div>

         </div>

      </div>

   );
}

export default Appointments;