const ProductModel = require("../models/ProductModel");

// Post
const CreateProduct = async (req, res) => {
    try {

        const newData = ProductModel({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc,
            quantity: req.body.quantity,
            prImage: req.file.filename
        })
        await newData.save()
        res.send(newData)

    } catch (error) {
        res.status(400).json({ messeage: "Server Error" })
    }
}

// Read More
const ReadProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Read Single Product
const ReadSingleProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product Not Found" });
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Update Product 
const UpdateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product Not Found" });

        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.desc = req.body.desc || product.desc;
        product.quantity = req.body.quantity || product.quantity;

        if (req.file) {
            product.prImage = req.file.filename;
        }

        await product.save();
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Delete Product
const DeleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product Not Found" });
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { CreateProduct, ReadProducts, ReadSingleProduct, UpdateProduct,DeleteProduct}