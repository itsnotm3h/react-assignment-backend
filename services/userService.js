const userData = require('../data/userData');
const bcrypt = require('bcrypt');

async function registerUser({
    name, email, password,dob,marketingPreference
})
{
    if(password.length < 8)
    {
        throw new Error ("password must be at least 8 character")
    }

    const userExist = await userData.getUserByEmail(email);
    if(userExist)
    {
        throw new Error("Email already registered");
    }

    cons

}
