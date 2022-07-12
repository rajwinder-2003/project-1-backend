const express = require("express");
const router = express.Router();
const {isAuthenticated, isSignedIn, isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");

const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateOrderStatus} = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//actual routes

//create
router.post("/order/create/:userId", isAuthenticated, isSignedIn, pushOrderInPurchaseList, updateStock, createOrder );

//read
router.get("/order/all/:userId", isAuthenticated, isSignedIn, isAdmin, getAllOrders );

//status of order

router.get("/order/status/:userId", isAuthenticated, isSignedIn, isAdmin, getOrderStatus );
router.put("/order/:orderId/status/:userId", isAuthenticated, isSignedIn, isAdmin, updateOrderStatus );

module.exports = router;