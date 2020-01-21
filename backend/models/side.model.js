const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const sideSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
})

sideSchema.plugin(mongooseUniqueValidator);

const Side = mongoose.model('Side', drinkSchema);

module.exports = Side;