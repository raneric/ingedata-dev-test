import { ValidatorError } from "../utils/ApplicationError.js";

/**
 * Checks if the `checkInDate` and `checkOutDate` query parameters are valid dates.
 * If no query was date query was sent, skip to next middleware and show all bookings
 * 
 * If either date is invalid, it throws a `ValidatorError`.
 *
 * @param {Object} req - The request object containing query parameters.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 * @throws {ValidatorError} If either `checkInDate` or `checkOutDate` is invalid.
 */
function bookingDateValidator(req, res, next) {
  const { checkInDate, checkOutDate } = req.query;
  if (!checkInDate && !checkOutDate) {
    return next();
  }

  const checkInDateObject = new Date(checkInDate);
  const checkOutDateObject = new Date(checkOutDate);

  if (checkInDateObject.toString() === "Invalid Date") {
    throw new ValidatorError(`Invalid check-in date date format from query ${checkInDate}`);
  }

  if (checkOutDateObject.toString() === "Invalid Date") {
    throw new ValidatorError(`Invalid checkout date format from query ${checkOutDate}`);
  }
  next();
}

export default bookingDateValidator;