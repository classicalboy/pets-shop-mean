var mongoose = require('mongoose');

module.exports = mongoose.model('pets', {
    pet: {
        type: String,
        default: ''
    },
    cost: {
        type: String,
        default: 0
    }
});