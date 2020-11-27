const bcrypt = require( 'bcrypt' );
const Schedule = require("../models/schedule.js");
const Pet = require("../models/PetDetail.js");
const User = require("../models/userDetail.js");


// include mongoose models (it will include each file in the models directory)

// input: <object> { firstName, lastName, emailAddress, userPassword }
// output: userId
async function registerUser( userData ){
    // hint: look at https://mongoosejs.com/docs/api.html#model_Model.create
    console.log( '[registerUser] data passed by form (to write to DB): ', userData );

    // save hashed password
    const passwordHash = await bcrypt.hash(userData.userPassword.trim(), 10);
    userData.userPassword = passwordHash;
    userData.emailAddress = userData.emailAddress.toLowerCase();

    // const result = new User(userData);
    // const result2 = await 
    console.log( '[registerUser] complete save result: ', userData );
    return userData;
}

// input: email, password
// output: <object> { userId, firstName, lastName, emailAddress, createdAt} || false
async function loginUser( email, password ) {
    // load user-info (for email)
    if( !email || !password ){
        console.log( '[loginUser] invalid email/password' );
        return false;
    }
    const result = await User.findOne( { emailAddress: email.toLowerCase() } );
    console.log( '[loginUser] result from email search: ', result, !result );

    // check if users password is same as servers
    if( !result ){
        console.log( ' .. x sorry could not find a user with that email!');
        return false;
    } else {
        const isValidPassword = await bcrypt.compare( password.trim(), result.userPassword );
        console.log( ` [loginUser] checking password (password: ${password} ) hash(${result.userPassword})`, isValidPassword );
        if( !isValidPassword ) {
            console.log( '[loginUser] invalid password, hashes do not match!' );
            return false;
        }
    }

    console.log( ' .. yah! password is valid, let\'s login!');
    const userData = {
        userId:         result._id,
        firstName:      result.firstName,
        lastName:       result.lastName,
        emailAddress:   result.emailAddress,
        createdAt:      ''
    };
    console.log( '[loginUser] complete, returning with userData' );
    return userData;
}


module.exports = {
    registerUser,
    loginUser
};