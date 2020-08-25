const DomainError = require('./domainError');
const { InternalError } = require('./internalServerError');
const { ResourceNotFoundError } = require('./resourceNotFoundError');
const { BadRequestError } = require('./badRequest');

module.exports = {
    DomainError,
    InternalError,
    ResourceNotFoundError,
    BadRequestError
}
