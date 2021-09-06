const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Defining path for env variables
dotenv.config({path: "./config/config.env"});

// Importing routers
const transactions = require("./routes/transactions");

// Defining app
const app = express();

// Body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Using routers
app.use("/api/v1/transactions", transactions);


// Connecting to database
connectDB();


// Listening to server
app.listen(process.env.PORT, ()=> {
    console.log(`Server started on port ${process.env.PORT}`);
})