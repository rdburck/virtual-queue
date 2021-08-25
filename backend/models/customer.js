const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
   fistName: String,
   lastName: String,
   partySize: Number,
   phoneNumber: Number,
   email: String,
   preferences: String,

});

const CustomerModel = mongoose.model('customer', CustomerSchema);

module.exports = CustomerModel