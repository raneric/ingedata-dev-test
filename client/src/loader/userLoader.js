import { getRoomWithBookings } from "../services/roomService";
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


/**
 * Loader which fetches room details along with its bookings for a new booking process.
 *
 * @param {Request} request - The current request object.
 * @returns {Promise<object>} A promise that resolves to the room with its bookings.
 */

async function userNewBookingLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const roomId = searchParams.get('roomId');
  return getRoomWithBookings(roomId);
}

export {
  userBookingsLoader,
  userBookingDetailLoader,
  userNewBookingLoader
}