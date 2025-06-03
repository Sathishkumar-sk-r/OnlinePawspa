// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   ownerName: { type: String, required: true },
//   petName: { type: String, required: true },
//   service: { type: String, required: true },
//   price: { type: String, required: true },
//   appointmentDate: { type: String, required: true },
//   timeSlot: { type: String, required: true },
//   email: { type: String, required: true },
//   contactInfo: { type: String, required: true },
//   address: { type: String, required: true },
//   petImage: { type: String, required: true },
//   status: { type: String, default: 'Pending' },
// });

// module.exports = mongoose.model('Appointment', appointmentSchema);

// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   ownerName: String,
//   petName: String,
//   service: String,
//   price: Number,
//   appointmentDate: Date,
//   timeSlot: String,
//   petImage: String,
//   email: String,
//   contactInfo: String,
//   address: String,
//   status: { type: String, default: 'Pending' },
// });

// module.exports = mongoose.model('Appointment', appointmentSchema);
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  ownerName: { type: String, required: true },
  petName: { type: String, required: true },
  service: { type: String, required: true },
  price: { type: Number, required: true },
  appointmentDate: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  petImage: { type: String, required: true },
  email: { type: String, required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
