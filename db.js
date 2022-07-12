const mongoose = require("mongoose");
const mongoURL = process.env.DATABASE;

const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("connect To Mongo Successfuly...........");
    });
};


module.exports = connectToMongo;