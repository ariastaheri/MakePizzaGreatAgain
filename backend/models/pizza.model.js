const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    size: {type: String, required: true},
    price: {type: Number, required: true},
    toppings: [{type: Schema.Types.ObjectId, ref: 'Topping'}]
})


const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;