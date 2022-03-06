const express = require('express')
const userRouter = express.Router()
const { fetchAll, createUser, editUser } = require('../controllers/UserController')


userRouter.post('/', createUser)
userRouter.get('/', fetchAll)
userRouter.put('/:id', editUser)



module.exports = userRouter