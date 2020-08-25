const { DomainError } = require('../Handlers/ErrorHandler/errorsBearer');

exports.error = (err, req, res, next) => {
    if (err instanceof DomainError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).json({
        errors: [{
            name: 'UnknwonError', message: 'Something went wrong', statusCode: 400
        }]
    });
};
