const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authModel = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Auth', authModel);
