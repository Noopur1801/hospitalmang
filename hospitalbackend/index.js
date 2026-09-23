import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config({
    path: './.env'
})
import doctorRoutes from './routes/doctorRouter.js';
import appointmentRoutes from './routes/appointmentRouter.js';
import patientRoutes from './routes/patientRouter.js'
const app = express();

app.use(cors());
app.use(express.json()); 

try {
  // Notice the quotes are GONE here!
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');
} catch (err) {
  console.error('Failed to connect to MongoDB:', err);
}

app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

// 1. Send all patients
app.get('/api/patients', async (req, res) => {
   const patients = await PatientModel.find(); // Or however you get DB data
   res.json(patients);
});

// 2. Send all doctors
// This fetches the list of doctors for your frontend dashboard
app.get('/api/doctors', async (req, res) => {
   try {
      const doctors = await Doctor.find(); // Matches your Doctor model
      res.json(doctors);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

// 3. Send all appointments
app.get('/api/appointments', async (req, res) => {
   try {
      // .populate() replaces the raw ID with the actual document data!
      const appointments = await Appointment.find()
         .populate('patient', 'firstName lastName') // Get these fields from Patient
         .populate('doctor', 'name specialization'); // Get these fields from Doctor
         
      res.json(appointments);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});