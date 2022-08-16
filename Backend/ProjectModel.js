const { Schema , model } = require('mongoose');

const projectInfo = new Schema({
firstName: String,
lastName: String,
projectArt: String,
Email: String,
phone: String,
projectStatus: String,
contactArt: String,
Massage : String,

}, { timestamps: true})

const ProjectInformation = new model( 'projectdata' , projectInfo );

module.exports =  ProjectInformation ;