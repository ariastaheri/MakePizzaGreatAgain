const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const toppingSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    price: {    type: Number, required: true    }, // e.g. 12.99
    category: { type: String, required: true    } // Cheese, Meat, Non-meat
})

const Topping = mongoose.model('Topping', toppingSchema);

module.exports = Topping;