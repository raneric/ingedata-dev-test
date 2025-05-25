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
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
}

export default errorHandler