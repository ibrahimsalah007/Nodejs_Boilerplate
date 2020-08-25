const DomainError = require('./domainError')
class ResourceNotFoundError extends DomainError {
    statusCode = 404
    constructor(message = 'Resource not found', statusCode) {
        super(message);
    }
    serializeErrors() {
        return [{ name: this.name, message: this.message, statusCode: this.statusCode }];
    }
}

module.exports = { ResourceNotFoundError };