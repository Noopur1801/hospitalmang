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

app.use(express.json()); 
app.use(cors());


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});