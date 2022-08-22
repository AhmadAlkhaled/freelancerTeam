const { Schema , model } = require('mongoose');

const contactMassage = new Schema({
Name: String,
Email: String,
Subject: String,
Massage : String,

}, { timestamps: true})

const ContactMassage = new model( 'contactMassage' , contactMassage , 'ContactMassage' );

module.exports =  ContactMassage ;


const appointment = new Schema({
Name: String,
Email: String,
Subject: String,
Massage : String,
Date:String

}, { timestamps: true})

const Appointment = new model( 'appointment' , appointment , 'Appointment' );

module.exports =  Appointment ;