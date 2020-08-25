const {
    findUser,
    createUser,
    compareUserPassword,
    generateAuthToken
} = require('./Service');
const { InternalError, BadRequestError } = require('../../Handlers/ErrorHandler/errorsBearer')

// Authenicate User and return Access token.
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const query = { email: email }

    const user = await findUser(query);
    if (!user)
        throw new BadRequestError('Invalid credentials');

    const passwordMatch = await compareUserPassword(password, user.password);
    if (!passwordMatch)
        throw new BadRequestError('Invalid credentials');

    /**
     * If passwords are matching
     * Generate and Store user acces token.
     */
    const token = generateAuthToken(user);

    req.session.jwt = token
    res.send(user);

}

// Register new User
// Return Access token on register Success.
exports.registerUser = async (req, res) => {

    const { email } = req.body;

    // find user by email
    const query = { email: email }
    const existingUser = await findUser(query);

    if (existingUser)
        throw new BadRequestError('Email in use.');

    try {

        const user = await createUser(req.body);

        /**
         * Generate and Store user acces token.
         */
        const token = generateAuthToken(user);

        req.session.jwt = token
        res.status(201).send(user);

    } catch (err) {
        console.log('error: ', err.message)
        throw new InternalError();
    }

}

// Change user password
exports.resetPassword = async (req, res) => {

}
// Ask for user`s password reset and send email with further information.
exports.forgotPassword = async (req, res) => {

}