const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    address: {    type: Object, required: true    }, 
})

storeSchema.plugin(mongooseUniqueValidator);

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;