require('dotenv').config();

//require pacakege
const express = require('express');
const connectToMongo = require("./db");
connectToMongo();
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');


//require routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const stripeRoutes = require("./routes/stripepayment");
const paymentBRoutes = require("./routes/paymentBRoutes");

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Route
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", stripeRoutes);
app.use("/api", paymentBRoutes);

//PORT
const port = process.env.PORT || 2000;

//Start a server
app.listen(port, () => {
    console.log(`Your backend is running on http://localhost:${port}`);
});