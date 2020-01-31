const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');


const Schema = mongoose.Schema;

const orderSchema = new Schema({
    totalPrice: Number,
    isDelivery: Boolean,
    user: {type: Schema.Types.ObjectId, ref:'User'},
    state: String,
    items: {
        pizzas: [{type: Schema.Types.ObjectId, ref: 'Pizza'}],
        sides: [{type: Schema.Types.ObjectId, ref: 'Side'}],
        drinks: [{type: Schema.Types.ObjectId, ref: 'Drink'}]
    }
})

orderSchema.plugin(mongooseUniqueValidator);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;