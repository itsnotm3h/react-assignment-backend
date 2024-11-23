const express = require("express");
const router = express.Router();

router.post('/register',(req,res)=>{
    res.json({message:"Registered a new user"});
})

router.post("/login",(req,res=>{
    res.json({message:"trying to login"});

}))

module.exports = router;