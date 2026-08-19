import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Patients() {

   const [patients, setPatients] = useState([]);

   useEffect(() => {

      fetch('http://localhost:5000/api/patients')
         .then(res => res.json())
         .then(data => setPatients(data))
         .catch(error => console.error(error));

   }, []);

   return (
      <div>

         <div className="page-header">

            <div>
               <h1>Patients</h1>
               <p>Manage registered patients</p>
            </div>

            <Link
               to="/patients/add"
               className="primary-button"
            >
               + Add Patient
            </Link>

         </div>

         <div className="data-card">

            {patients.length === 0 ? (

               <div className="empty-state">
                  <h3>No Patients Found</h3>
                  <p>Add your first patient to get started.</p>

                  <Link
                     to="/patients/add"
                     className="primary-button"
                  >
                     Add Patient
                  </Link>
               </div>

            ) : (

               <div className="patient-table">

                  <div className="table-header">
                     <span>Name</span>
                     <span>Gender</span>
                     <span>Blood Group</span>
                     <span>Contact</span>
                  </div>

                  {patients.map(patient => (

                     <div
                        className="table-row"
                        key={patient._id}
                     >

                        <strong>
                           {patient.firstName} {patient.lastName}
                        </strong>

                        <span>
                           {patient.gender}
                        </span>

                        <span>
                           {patient.bloodGroup}
                        </span>

                        <span>
                           {patient.contactNumber}
                        </span>

                     </div>

                  ))}

               </div>

            )}

         </div>

      </div>
   );
}

export default Patients;