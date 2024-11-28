const express = require("express");
const router = express.Router();
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const { route } = require("./products");
const authenticateUser = require('../middlewares/UserAuth');



router.post('/register', async(req,res)=>{
    try{
        const {name, email, password,dob,marketingPreferences} = req.body;

        const userId = await userService.registerUser({
            name,email,password,dob,marketingPreferences
        })

        // in the service layer, it was coded to return userID upon adding data into database. 
        res.status(201).json({message:"User registered successfully",userId})
    }
    catch(error)
    {
        res.status(400).json({message:error.message});

    }
})

router.post("/login", async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await userService.loginUser(email,password);
        const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
        // const name = user.name;

    
        res.json({ message: "Login successful", token});

        // console.log("This is from route layer:" + user.name)

    }
    catch(error){
        res.status(401).json({message:error.message});
    }


})

router.post("/logout",authenticateUser, async (req,res)=>{
    try{
        res.json("logout" + req.user.userId);
    }
    catch(error)
    {
        res.status(401).json({message:error.message});
    }
})

module.exports = router;