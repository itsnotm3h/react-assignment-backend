const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require("./database")

//Middleware
//so that express will return json data;
app.use(express.json);
app.use(cors());

//Routes
app.get("/",(req,res)=>{
    res.json({message:"It works"});
})

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`serve is running on port ${PORT}`);
})