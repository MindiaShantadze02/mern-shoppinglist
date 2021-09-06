// npm packages
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
// local imports
const router = require("./routes/item");
const connectDB = require("./config/db");

// setting up dotenv path
dotenv.config({path: "./config/config.env"});

// defining app
const app = express();

// parsing body
app.use(express.json());

// using router
app.use("/api",router);

// connecting to database
connectDB();


// listening to the server
app.listen(process.env.PORT, ()=> console.log(`Server is running on port: ${process.env.PORT}`));