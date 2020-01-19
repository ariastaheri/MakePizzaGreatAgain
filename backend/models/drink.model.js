const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
})

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;