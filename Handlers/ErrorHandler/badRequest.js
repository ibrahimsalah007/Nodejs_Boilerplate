const DomainError = require('./domainError');

class BadRequestError extends DomainError {
    statusCode = 400
    constructor(message, statusCode) {
        super(message);
    }
    serializeErrors() {
        return [{ name: this.name, message: this.message, statusCode: this.statusCode }];
    }
}

module.exports = { BadRequestError };