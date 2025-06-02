import { getBookings } from "../services/bookingService"

async function bookingsLoader() {
  return await getBookings();
}


export {
  bookingsLoader
}