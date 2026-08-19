import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST a new doctor
router.post('/', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;