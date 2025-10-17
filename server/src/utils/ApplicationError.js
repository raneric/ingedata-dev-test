class ApplicationError extends Error {
  constructor(message = "Internal server error", statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ResourceNotFoundError extends ApplicationError {
  constructor(message) {
    super(message, 404);
  }
}

class ValidatorError extends ApplicationError {
  constructor(message) {
    super(message, 400);
  }
}

class AuthenticationError extends ApplicationError {
  constructor(message) {
    super(message, 401);
  }
}

class AuthorizationError extends ApplicationError {
  constructor(message) {
    super(message, 403);
  }
}

class ResourceConflictError extends ApplicationError {
  constructor(message) {
    super(message, 409);
  }
}

export {
  ResourceNotFoundError,
  ApplicationError,
  ValidatorError,
  AuthenticationError,
  AuthorizationError,
  ResourceConflictError,
};
