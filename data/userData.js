const pool = require('../database');

async function getUserByEmail(email) {
    if (!email || typeof email !== 'string') {
        throw new Error("Invalid Email");
    }
    const [rows] = await pool.query("SELECT * FROM users WHERE email =?", [email])
    return rows[0];
}



async function createUser({ name, email, password, dob, marketingPreferences }) {
    if(!email || !password || typeof email !=='string')
    {
        throw new Error('Invalid user data!');
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        const [userResult] = await connection.query(
            `INSERT INTO users (name, email, password,dob) VALUES (?,?,?,?)`,[name,email,password,dob]
        );
        //this function is a default to get the id (primary key from the table).
        const userID = userResult.insertId;

        //to check if marketing is an array. 
        if(Array.isArray(marketingPreferences))
        {
            for(const choice of marketingPreferences)
            {
                const [preferenceResult] = await connection.query(`SELECT id from marketing_presence WHERE preference =?`, [choice]);

                if (preferenceResult.result.length === 0)
                {
                    throw new Error(`Invalid marketing preference:`)
                }

                const preferenceID = preferenceResult[0].id;
                await connection.query(`INSERT INTO user_marketing_preference (user_id,preference_id) VALUES (?,?)`,[userID,preferenceID]);
            }

        }

        await connection.commit();
        return userID;
    }
    catch(error)
    {
        await connection.rollback();
        throw (error);
    }
    finally{
        connection.release();
    }

}

module.exports = {
    getUserByEmail,
    createUser
}