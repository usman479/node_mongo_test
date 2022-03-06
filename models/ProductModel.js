const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel