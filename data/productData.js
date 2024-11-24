const pool = require('../database');

async function getAllProductsData(){
    const [rows]= await pool.query(`SELECT id, name, CAST(price AS DOUBLE) AS price, image FROM products`);
    return rows;
}

async function getProductDataById(id)
{
    const [rows]= await pool.query(`SELECT * FROM products WHERE id=?`,[id]);
    return rows[0];
}

module.exports = {
    getAllProductsData,
    getProductDataById
};