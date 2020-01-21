const mongoose = require('mongoose');
const toppingSchema = require('./topping.model')

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    size: {type: String, required: true},
    toppings: [{type: toppingSchema.name, required: true}], 
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;