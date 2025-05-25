import { ValidatorError } from "../utils/errors.js";

/**
 * Middleware to validate booking dates from query parameters.
 *
 * This function checks if the `checkInDate` and `checkOutDate` query parameters
 * are valid dates. If either date is invalid, it throws a `ValidatorError`.
 *
 * @param {Object} req - The request object containing query parameters.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 * @throws {ValidatorError} If either `checkInDate` or `checkOutDate` is invalid.
 */

function bookingDateValidator(req, res, next) {
  const { checkInDate, checkOutDate } = req.query

  const checkInDateObject = new Date(checkInDate);
  const checkOutDateObject = new Date(checkOutDate);

  if (checkInDateObject.toString() === "Invalid Date" || checkOutDateObject.toString() === "Invalid Date") {
    throw new ValidatorError(`Invalid date from query`);
  }
  next();
}

export default bookingDateValidator;