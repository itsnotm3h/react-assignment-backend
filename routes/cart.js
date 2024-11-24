const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService');
const authenticateUser = require('../middlewares/UserAuth');

//usually use to put in middleware, can replace with httpcookies. 
router.use(authenticateUser);

router.get("/", async(req,res)=>{
// return cartService.getCart();
try{
    const cartContent = await cartService.getCart(req.user.userId);
    res.json(cartContent);

}
catch(error)
{
    res.status(500).json({message:error.message});
}
});

router.put("/",async (req,res)=>{
try{
const cartItems = req.body.cartItems;
await cartService.updateCart(req.user.userId,cartItems);
res.json({message:"cart updated successfully"});
}
catch(error)
{
    res.status(400).json({message:"Router Layer:"+ error.message});
}
})

module.exports = router;