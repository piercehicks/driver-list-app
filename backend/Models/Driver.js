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

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;