const express = require("express");
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product");
const {isAuthenticated, isSignedIn, isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//all params
router.param("userId", getUserById);
router.param("productId", getProductById);

//actual routes
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo );

//delete route
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);

//update route
router.put("/product/:productId/:userId", isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listning route
router.get("/products", getAllProducts);
router.get("/products/categories", getAllUniqueCategories)

module.exports = router;