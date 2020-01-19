const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    address: {
        type: Object,
        required: true,

    },
    favorites: {
        type: Arrays,
        required: false,
        default: null
    },
    orders: {
        type: Arrays,
        required: false,
        default: null
    }
}, {
    timestamps: true
})