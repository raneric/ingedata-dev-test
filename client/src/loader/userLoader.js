import { getBookings, getBooking } from "../services/userService"

async function userBookingsLoader({ params }) {
  return await getBookings(params.userId);
}

/**
 * Loader which fetches a user's booking detail.
 *
 * @param {LoaderArgs} args - The loader arguments.
 * @param {string} args.params.userId - The id of the user.
 * @param {string} args.params.id - The id of the booking.
 * @returns {Promise<object>} A promise that resolves to the booking object.
 */
async function userBookingDetailLoader({ params }) {
  const { userId, id } = params
  return await getBooking(userId, id);
}

export {
  userBookingsLoader,
  userBookingDetailLoader
}