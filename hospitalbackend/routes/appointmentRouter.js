import express from 'express';
import Appointment from '../models/Appointment.js';

const router = express.Router();

// GET all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  }
});

// POST a new appointment
router.post('/', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (err) { 
    res.status(500).json({ error: err.message }); 
  }
});

export default router;