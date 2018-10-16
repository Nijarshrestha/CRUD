const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    Name : {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: Number,
        required: true,
    },
    Email: {
        type : String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    Date_Of_Birth: {
        type: Date,
        required: true
    },
    Education_Background: {
        type: String,
        required: true
    },
    Registered_date : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema)