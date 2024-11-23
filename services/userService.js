const userData = require('../data/userData');
const bcrypt = require('bcrypt');

async function registerUser({
    name, email, password,dob,marketingPreferences
})
{
    if(password.length < 8)
    {
        throw new Error ("Service Layer: password must be at least 8 character")
    }

    const userExist = await userData.getUserByEmail(email);
    if(userExist)
    {
        throw new Error("Service Layer: Email already registered");
    }

    const hashPassword = await bcrypt.hash(password,10);
    return await userData.createUser({
        name,email,password:hashPassword,dob,marketingPreferences
    })

}

async function loginUser(email,password)
{
    const user = await userData.getUserByEmail(email);
    if(!user)
        {
            throw new Error ("Service Layer: Invalid email or password");
    }

    //user.password is getting password from the user that is return on line 28.
    const passwordCheck = await bcrypt.compare(password,user.password);
    if(!passwordCheck)
    {
        throw new Error("Service Layer: Invaild password or email");
    }

    return user;

}

module.exports={
    registerUser,
    loginUser
}