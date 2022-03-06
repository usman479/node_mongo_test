const express = require('express')
const productRouter = express.Router()
const { fetchAll, createProduct, deleteOne } = require('../controllers/ProductController')


productRouter.get('/', fetchAll)
productRouter.post('/', createProduct)
productRouter.delete('/:id', deleteOne)



module.exports = productRouter