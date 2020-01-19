const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sideSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
})

const Side = mongoose.model('Side', drinkSchema);

module.exports = Side;