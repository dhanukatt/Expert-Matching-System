const Payment = require("../models/Payment.model");
const User = require("../models/User.model");
const AppointmentRequest = require("../models/AppointmentRequest.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Add Appointment Controller
const addAppointment = async (req, res) => {
  const { note, expertId } = req.body;

  const id = req.user.id;

  // Validation: Ensure all required fields are present
  if (!note || !expertId) {
    return res.status(400).json({
      error: "All fields are required ( note, expertId).",
    });
  }

  const requestedDate = new Date();

  try {
    // Validate that the expert and user exist in the User model
    const expert = await User.findById(expertId);
    const user = await User.findById(id);

    if (!expert || !user) {
      return res.status(404).json({ error: "Expert or User not found." });
    }

    // Create a new appointment
    const newAppointment = new AppointmentRequest({
      requestedDate,
      note,
      expertId,
      userId: id,
    });

    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();

    // Respond with success message
    res.status(201).json({
      message: "Request sent successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error sending appointment request",
      error: error.message,
    });
  }
};

//Get All Appointments
const getAllAppointments = async (req, res) => {
  try {
    const expertId = req.user.id;

    const validUsers = await User.find().select("_id").lean();
    const validUserIds = validUsers.map((user) => user._id.toString());

    const appointments = await AppointmentRequest.find({
      expertId: expertId,
    }).lean();

    const filteredAppointments = appointments.filter((appointment) =>
      validUserIds.includes(appointment.userId.toString())
    );

    const appointmentsWithUserData = await AppointmentRequest.find({
      _id: { $in: filteredAppointments.map((a) => a._id) },
    })
      .populate("userId", "profilePicture firstName lastName email")
      .lean();

    res.status(200).json(appointmentsWithUserData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Error fetching requests",
    });
  }
};

module.exports = {
  addAppointment,
  getAllAppointments,
};
