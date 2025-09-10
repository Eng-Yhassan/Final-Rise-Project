const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
require("dotenv").config()

const ProductRouter = require("./routers/ProductRouter")
const customerRouter = require("./routers/customerRouter")

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.db_Url).then(() => {
    console.log("The Database Is working ");
})

app.use(ProductRouter)
app.use(customerRouter)
app.use("/allImages", express.static("images"));

app.listen(process.env.Port , () => {
    console.log(`The Server Is working For The Port of ${process.env.Port}`); 
})