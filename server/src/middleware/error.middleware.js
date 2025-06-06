/**
 * Centralized error handler middleware.
 *
 * Returns a JSON response with a status code of 500 unless the error
 * object has a statusCode property.
 *
 * @param {Error} err The error object
 * @param {Object} req The Express request object
 * @param {Object} res The Express response object
 * @param {Function} next The Express next middleware function
 */
function errorHandler(err, req, res, _) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.name,
    message: err.message
  });
}

/**
 * Middleware to handle requests made to routes that do not exist.
 *
 * Sends a 404 Not Found response with a JSON error message indicating
 * that the requested route does not exist.
 *
 * @param {Object} req The Express request object
 * @param {Object} res The Express response object
 */

function defaultResourceNotFoundError(req, res, _) {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} does not exist`,
  });
}

export {
  errorHandler,
  defaultResourceNotFoundError
}