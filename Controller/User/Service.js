const Bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


const KEYS = require('../../Config/Keys');
const User = require('../../Models/User');

exports.findUser = async (query) => {
    const user = await User.findOne(query);
    return user;
}

exports.createUser = async (data) => {
    const { firstName, lastName, email, password, } = data;

    const user = new User({
        firstName,
        lastName,
        email,
        password
    });

    await user.save()
    return user;
}

/**
 * @method compareUserPassword Description.
 * Compare user`s password with a given password.
 * @param candidatePassword a given password.
 * @param userPassword stored password.
 */
exports.compareUserPassword = async (candidatePassword, userPassword) => {

    const isMatch = await Bcrypt.compare(candidatePassword, userPassword);
    return isMatch;
};

/**
 * @method generateAuthToken Description.
 * Generate Access token
 * @param user existing user object.
 */
exports.generateAuthToken = async (user) => {

    const token = JWT.sign({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }, KEYS.JWT, { expiresIn: '30d' });

    return token;
};