const { Schema , model } = require('mongoose');

const pass = new Schema({
    password: String
}, { timestamps: true})

const Pass = new model( 'pass' , pass , 'Pass' );

module.exports =  Pass ;