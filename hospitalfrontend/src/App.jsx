import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './component/Layout';

import Dashboard from './pages/Dashboard';

import Patients from './pages/patients/Patient';
import Bookpatient from './pages/patients/Bookpatient';

import Doctors from './pages/doctors/Doctor';
import AddDoctor from './pages/doctors/Adddoctor';

import Appointments from './pages/appointments/Appointment';
import Bookappointment from './pages/appointments/Bookappointment';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Dashboard />} />

        {/* Patients */}
        <Route
          path="patients"
          element={<Patients />}
        />

        <Route
          path="patients/book"
          element={<Bookpatient />}
        />

        {/* Doctors */}
        <Route
          path="doctors"
          element={<Doctors />}
        />

        <Route
          path="doctors/add"
          element={<AddDoctor />}
        />

        {/* Appointments */}
        <Route
          path="appointments"
          element={<Appointments />}
        />

        <Route
          path="appointments/book"
          element={<Bookappointment />}
        />

      </Route>

    </Routes>
  );
}

export default App;