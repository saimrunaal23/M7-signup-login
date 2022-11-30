const mongoose = require('mongoose');
var user = require('./userModel')

const loansSchema = new mongoose.Schema(
  {
    
    customerName: {
        type: String,
        required: [true, 'A customer must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'Name can be maximum 40 characters']
    },
    phoneNumber:{
        type: Number,
        required: [true, 'Please enter a phoneNumber'],
        unique: true,
        maxlength: [10, 'PhoneNumber can be maximum 10 digits']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    address:{
        type: String,
        required: [true, 'Please enter address']
    },
    loanAmount:{
        type: Number,
        required: [true, 'Please enter loanAmount']
    },
    interest:{
        type: Number,
        required: [true, 'Please enter interest']
    },
    loanTermYears:{
        type: Number,
        required: [true, 'Please enter loanTermYears']
    },
    loanType:{
        type: String,
        required: [true, 'Please enter loantype']
    },
    description:{
        type: String,
        required: [true, 'Please enter description'],
        trim: true,
        maxlength: [100, 'Description can have maximum 100 characters'],
        minlength: [10, 'Description  must have more or equal then 10 characters']
    }   
});
const Loans = mongoose.model('Loans', loansSchema);

module.exports = Loans;
//** code  END