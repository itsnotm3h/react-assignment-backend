const pool = require('../database');

async function getCartData(userId){
    // we need to join the table. 
    // using as it will return an array. 
    const [rows] = await pool.query(`SELECT cart.id, cart.product_id, product.imageURL, product.name AS productName, CAST(price AS DOUBLE) AS price, cart.quantity FROM cart_items cart JOIN ceramics product ON cart.product_id = product.id WHERE cart.user_id = ?`,[userId]);

    return rows;
}

async function updateCartData(userId,cartItems){
    //1. we need to first delete items that are already in the database. 
    //2. We want to load in all the item into the database.  
    //3. Check make sure to have a try catch to revert the changes if there is any error. 

    const connection = await pool.getConnection();

    try{
        await connection.beginTransaction();
        await connection.query(`DELETE FROM cart_items WHERE user_id=?`,[userId]);
        for (const item of cartItems)
        {
            await connection.query(`INSERT INTO cart_items (user_id,product_id,quantity) VALUES (?,?,?)`, [userId,item.product_id,item.quantity])
        }
        await connection.commit();
    }
    catch(error)
    {
        await connection.rollback();
        throw error;
    }
    finally{
        connection.release();
    }

}

module.exports= {
    getCartData,
    updateCartData
}