import { getBookings, getBooking } from "../services/userService"

async function userBookingsLoader({ params }) {
  return await getBookings(params.userId);
}

async function userBookingDetailLoader({ params }) {
  const { userId, id } = params
  return await getBooking(userId, id);
}

export {
  userBookingsLoader,
  userBookingDetailLoader
}