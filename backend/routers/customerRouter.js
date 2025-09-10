const express = require("express");
const customerController = require("../controllers/customerController");

const router = express.Router();

// Post
router.post("/create/customer", customerController.createCustomer)
router.post("/login/customer", customerController.loginCustomer)

module.exports = router