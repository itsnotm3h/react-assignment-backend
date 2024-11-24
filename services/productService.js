const productData = require('../data/productData');

//productData is the Mysql statement to get the data from thedatabase. 
// getAllProducts is to return all the data, with the function getAllProducts
async function getAllProducts()
{
    return await productData.getAllProductsData();
}

async function getProduct(id)
{
    const product = await productData.getProductDataById(id);

    if(!product)
    {
        throw new Error("No product found");
    }
    return product;
}

module.exports = {
    getAllProducts,
    getProduct
};