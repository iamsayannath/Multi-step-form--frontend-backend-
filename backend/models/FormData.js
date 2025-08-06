import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,

  },
  interests: {
    type: [String],
    default: [],
  },
  country: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: 500,
  },
  dob: {
    type: Date,
  },
  preferredTime: {
    type: String, // or Date if you're storing time only
  },
  range: {
    type: Number,
    default: 50,
  },
  website: {
    type: String,
  }
}, { timestamps: true });

const FormData = mongoose.model('FormData', formDataSchema);
export default FormData;
