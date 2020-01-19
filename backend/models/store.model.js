const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {     type: String, required: true, unique: true    },
    address: {    type: Object, required: true    }, 
})

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;