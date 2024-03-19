const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {constants}=require('../utils')
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        enum:Object.values(constants.CATEGORIES)
    },
    size: {
        type: String,
        enum: Object.values(constants.PRODUCT_SIZE),
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
