const pool = require('../database');

async function getAllProductsData(){
    const [rows]= await pool.query(`SELECT id, name, CAST(price AS DOUBLE) AS price, imageURL, description FROM ceramics`);
    return rows;
}

async function getProductDataById(id)
{
    const [rows]= await pool.query(`SELECT * FROM ceramics WHERE id=?`,[id]);
    return rows[0];
}

async function getProductSeriesData(x)
{
    const [rows]= await pool.query(`SELECT * FROM ceramics WHERE series=?`,[x]);
    return rows;
}

module.exports = {
    getAllProductsData,
    getProductDataById,
    getProductSeriesData
}; 