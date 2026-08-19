import mongoose, {Schema} from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true, 
  },
  consultationFee: {
    type: Number,
    required: true
  },
  department: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('Doctor', doctorSchema);