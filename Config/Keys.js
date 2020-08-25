module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.NODE_ENV !== 'production' ? 'mongodb://localhost/eCommerce' : process.env.MONGO_URI,
    JWT: process.env.NODE_ENV !== 'production' ? 'JWTForDevelopment' : process.env.JWT_KEY
}