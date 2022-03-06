const express = require('express')
const orderRouter = express.Router()
const { fetchAll, createOrder, editOrder } = require('../controllers/OrderController')


orderRouter.post('/', createOrder)
orderRouter.get('/', fetchAll)
orderRouter.put('/:id', editOrder)



module.exports = orderRouter