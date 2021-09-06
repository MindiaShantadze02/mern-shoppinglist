// npm packages
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const PORT = process.env.PORT || 5000;
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

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'));
})

// connecting to database
connectDB();


// listening to the server
app.listen(process.env.PORT, ()=> console.log(`Server is running on port: ${PORT}`));