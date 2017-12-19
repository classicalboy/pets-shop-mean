var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
    usrName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: 'abc@123'
    }
});