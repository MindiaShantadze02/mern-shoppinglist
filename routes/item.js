const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Getting content
router.get("/",async (req,res)=> {
    try {
        const item = await Item.find();
        res.status(200).json({data: item});
    } catch (err) {
        console.log(err);
    }
});

// Deleting single content
router.delete("/:id",async (req,res)=> {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.status(201).json({data: item});
    } catch (err) {
        console.log(err);
    }
});

// Creating a content
router.post("/",async (req,res)=> {
    try {
        const item = await Item.create(req.body);
        res.status(201).json({data: item});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;