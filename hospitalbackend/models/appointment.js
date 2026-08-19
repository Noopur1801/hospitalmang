import mongoose, {Schema} from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Tells Mongoose this ID belongs to the Patient collection
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Tells Mongoose this ID belongs to the Doctor collection
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled' // Automatically sets to Scheduled when created
  },
  reasonForVisit: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);
