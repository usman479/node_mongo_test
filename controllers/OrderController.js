const OrderModel = require('../models/OrderModel');
const path = require("path");

// fetchAl Orders 
exports.fetchAll = async(req, res) => {
    // try {
    //     const orders = await OrderModel.find()
    //     res.status(200).send(orders)
    // } catch (error) {
    //     res.status(500).send({ message: error.message })
    // }

    res.sendFile(path.join(__dirname, "../", "views", "orderform.html"))
}

//create Order
exports.createOrder = async(req, res) => {
    //new order
    const newOrder = new OrderModel({
        name: req.body.name,
        amount: req.body.amount,
        address: req.body.address
    })
    try {
        const order = await newOrder.save()
        res.status(200).send(order)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//editing
exports.editOrder = async(req, res) => {
    if (!req.params.id) {
        res.status(400).send({ message: "Cannot proceed without id" })
    }

    const updatedOrder = {
        name: req.body.name,
        amount: req.body.amount,
        address: req.body.address
    }

    try {
        const newOrder = await OrderModel.findByIdAndUpdate(req.params.id, updatedOrder, (err, docs) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Updated Order : ", docs);
            }
        })
        res.status(200).send(newOrder)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}