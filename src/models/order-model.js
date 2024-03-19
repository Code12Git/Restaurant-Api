const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { constants } = require('../utils');

const orderSchema = new Schema(
    {
        cartId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Cart'
        }, 
        amount: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: Object.values(constants.STATUS)
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
