const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
})

drinkSchema.plugin(mongooseUniqueValidator);

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;