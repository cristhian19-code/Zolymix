const mongoose = require('../database');

const Email = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    type_product: {
        type: String
    },
    message: {
        type: String
    },
    phone: {
        type: Number
    }
})

module.exports = mongoose.model('Email', Email);