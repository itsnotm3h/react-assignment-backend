const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productsRouter = require('./routes/products');
const userRouter = require('./routes/users');
const cartRouter = require('./routes/cart');

const app = express();
//Middleware
//so that express will return json data;
app.use(express.json());
app.use(cors());
app.use('/api/products', productsRouter);
app.use('/api/users', userRouter);
app.use('/api/cart', cartRouter);


//Routes
app.get("/",(req,res)=>{
    res.json({message:"It works"});
})

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`serve is running on port ${PORT}`);
})