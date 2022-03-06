const ProductModel = require('../models/ProductModel');
const path = require("path");

//get All
exports.fetchAll = async(req, res) => {
    // try {
    //     const products = await ProductModel.find()
    //     res.status(200).send(products);
    // } catch (err) {
    //     res.status(500).send({ message: err.message })
    // }

    res.sendFile(path.join(__dirname, "../", "views", "productform.html"))

}

//create one
exports.createProduct = async(req, res) => {
    //new product
    const product = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock
    })

    try {
        const newProduct = await product.save()
        res.status(200).send(newProduct)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

}

//delete one
exports.deleteOne = async(req, res) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'Please specify id to be deleted!' })
    }
    try {
        await ProductModel.findByIdAndDelete(req.params.id, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`deleted ${docs}`);
            }
        })
        res.status(200).send({ message: "product deleted successfully!" });
    } catch (err) {
        res.status(404).send({ message: err.message })
    }
}