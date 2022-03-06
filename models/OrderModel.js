const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
})

const orderModel = mongoose.model('Order', orderSchema)

module.exports = orderModel