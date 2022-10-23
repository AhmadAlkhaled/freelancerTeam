const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const LogoSchema = new Schema({
    img: Buffer,
}, { timestamps: true });

const Logo = mongoose.model('Logo', LogoSchema, 'Logo');

module.exports = Logo;