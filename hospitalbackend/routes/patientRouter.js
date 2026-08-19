// import express from express;
// import router from express.Router;
import { Router } from "express";
import Patient from '../models/patient.js'; 

const router = Router()

router.post('/', async (req, res) => {
  try {
    // req.body contains the data sent from your React form (or Postman)
    const newPatient = new Patient(req.body);
    
    // Save it to MongoDB
    const savedPatient = await newPatient.save();
    
    // Send back a success status (201 Created) and the saved data
    res.status(201).json(savedPatient);
  } catch (error) {
    // If something goes wrong (e.g., missing required fields), send an error
    res.status(400).json({ message: 'Error creating patient', error: error.message });
  }
});

// @route   GET /api/patients
// @desc    Get all patients
router.get('/', async (req, res) => {
  try {
    // .find() with an empty object {} gets everything in the Patient collection
    const patients = await Patient.find({});
    
    // Send back a success status (200 OK) and the list of patients
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching patients', error: error.message });
  }
});

export default router;