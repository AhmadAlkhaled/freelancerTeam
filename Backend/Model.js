const { Schema, model } = require("mongoose");

const appointment = new Schema(
  {
    Name: String,
    Email: String,
    Subject: String,
    Massage: String,
    contactArt: String,
    Telephone: { type: String, default: "not available" },
    Date: String,
  },
  { timestamps: true }
);

const Appointment = new model("appointment", appointment, "Appointment");

module.exports = Appointment;
