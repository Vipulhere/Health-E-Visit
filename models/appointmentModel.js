// Import the mongoose module
const mongoose = require("mongoose");

// Define the appointment schema using mongoose.Schema
const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    doctorInfo: {
      type: Object,
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create a model based on the appointment schema
const appointmentModel = mongoose.model("appointments", appointmentSchema);

// Export the appointment model
module.exports = appointmentModel;
