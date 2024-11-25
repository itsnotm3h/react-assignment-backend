const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

//Get all products. 
// router.get("/", async (req,res)=>{
//     try{
//         const products = await productService.getAllProducts();
//         res.json(products);
//     }
//     catch(error)
//     {
        
//         res.status(500).json({message:error.message});

//     }
// });

router.get('/', async (req,res)=>{
// need to reback on what we have previously learned.
    const { id, series } = req.query;

    try{

        if(id)
        {
            const product =  await productService.getProduct(id);
            res.json(product);
        }
        else if(series)
        {

            const product =  await productService.getSeries(series);
            res.json(product);
        }
        else{
            const products = await productService.getAllProducts();
            res.json(products);
        }
       
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }

});

module.exports = router;