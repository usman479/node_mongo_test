const UserModel = require('../models/UserModel');
const path = require("path");

// fetchAl Users 
exports.fetchAll = async(req, res) => {
    res.sendFile(path.join(__dirname, "../" , "views", "userform.html"))
}

//create User
exports.createUser = async(req, res) => {
    //new user
    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const user = await newUser.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

//editing
exports.editUser = async(req, res) => {
    if (!req.params.id) {
        res.status(400).send({ message: "Cannot proceed without id" })
    }

    const updatedUser = new UserModel({
        name: req.body.name,
        amount: req.body.amount,
        address: req.body.address,
        _id: req.body.id
    })

    try {
        const newUser = await UserModel.findByIdAndUpdate(req.params.id, updatedUser)
        await newUser.save()
        res.status(200).send(newUser)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}