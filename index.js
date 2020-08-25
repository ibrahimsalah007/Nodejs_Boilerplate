require('express-async-errors')

const { ResourceNotFoundError } = require('./Handlers/ErrorHandler/errorsBearer')
const { error } = require('./middlewares/error');

const userRoutes = require('./Routes/User');


const app = require('./Config/Server');



app.use('/api/v1/user', userRoutes)
// for invalid and non existing routes
app.all('*', (req, res) => {
    throw new ResourceNotFoundError()
});
// Error middleware handler
app.use(error)