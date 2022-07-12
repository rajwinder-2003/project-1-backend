const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const {signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post("/signup", [
    body("name", "name should be at least 3 char").isLength({ min: 3 }),
    body("email", "email is required").isEmail(),
    body("password", "password should be at least 6 char").isLength({ min: 6 }),
], signup );

router.post("/signin", [
    body("email", "email is required").isEmail(),
    body("password", "password field is required").isLength({ min: 1 }),
], signin );

router.get("/signout", signout);


module.exports = router;