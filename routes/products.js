const express = require('express');
const router = express.Router();
const pool = require('../database');

//Get all products. 
router.get("/", (req,res)=>{
    res.json({message:"GET all products"});
})

router.get('/:id',(req,res)=>{
res.json({message:`Get product with the id ${req.params.id}`})
})


module.exports = router;