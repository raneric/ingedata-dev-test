import { getBookings } from "../services/bookingService"

/**
 * Loader which fetches all bookings.
 *
 * @returns {Promise<object[]>} A promise that resolves to the bookings.
 */
async function bookingsLoader() {
  return await getBookings();
}

export {
  bookingsLoader
}