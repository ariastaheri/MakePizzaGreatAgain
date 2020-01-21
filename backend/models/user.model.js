const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {type: String, required: true, unique: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true},
        postalCode: {type: String, required: true}
    },
    favorites: [{type: Schema.Types.ObjectId, ref: 'Favorite'}],
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]
}, {
    timestamps: true
})

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;