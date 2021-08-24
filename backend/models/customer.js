const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema;

const CustomerSchema = new Schema({
   fistName: String,
   lastName: String,
   partySize: Number,
   phoneNumber: Number,
   email: String,
   preferences: String,

});

const CustomerModel = mongoose.model('customer', CustomerModel);

module.exports = CustomerModel