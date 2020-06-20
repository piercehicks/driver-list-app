const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let driverSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    driverNum: {
        type: Number
    }
}, {
    collection: 'drivers'
})

module.exports = mongoose.model('Driver', driverSchema);