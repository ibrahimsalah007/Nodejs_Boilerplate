const DomainError = require('./domainError');

class InternalError extends DomainError {
    statusCode = 500
    constructor(message = 'Internal Server Error', statusCode) {
        super(message);
    }
    serializeErrors() {
        return [{ name: this.name, message: this.message, statusCode: this.statusCode }];
    }
}

module.exports = {InternalError};