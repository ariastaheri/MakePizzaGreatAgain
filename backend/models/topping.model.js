const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const toppingSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
    category: { type: String, required: true    } // Cheese, Meat, Non-meat
})

toppingSchema.plugin(mongooseUniqueValidator);

const Topping = mongoose.model('Topping', toppingSchema);

module.exports = Topping;