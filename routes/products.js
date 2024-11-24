const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

//Get all products. 
router.get("/", async (req,res)=>{
    try{
        const products = await productService.getAllProducts();
        res.json(products);
    }
    catch(error)
    {
        
        res.status(500).json({message:error.message});

    }
});

router.get('/:id', async (req,res)=>{
    const id = req.params.id;
    try{
        const product =  await productService.getProduct(req.params.id);
        res.json(product);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }

});


module.exports = router;