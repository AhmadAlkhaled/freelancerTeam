const { Schema , model } = require('mongoose');

const contactMassage = new Schema({
Name: String,
Email: String,
Subject: String,
Massage : String,

}, { timestamps: true})

const ContactMassage = new model( 'contactMassage' , contactMassage , 'ContactMassage' );

module.exports =  ContactMassage ;