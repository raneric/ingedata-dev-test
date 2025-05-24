class ApplicationError extends Error {
  constructor(message = 'Internal server error', statusCode = 500, details = null) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFoundError extends ApplicationError {
  constructor(message) {
    super(message, 404);
  }
}

export { ResourceNotFoundError, ApplicationError }