const express = require("express");
const productController = require("../controllers/productController");
const uploadImage = require("../middlewares/UploadImage");
const router = express.Router();

// Post
router.post("/create/product", uploadImage.single("img"), productController.CreateProduct)
// ReadMore
router.get("/read/product", productController.ReadProducts)
// ReadSingle
router.get("/readSingle/product/:id", productController.ReadSingleProduct)
// Update
router.put("/update/product/:id", uploadImage.single("img"), productController.UpdateProduct);
// Delete
router.delete("/delete/product/:id", productController.DeleteProduct);


module.exports = router