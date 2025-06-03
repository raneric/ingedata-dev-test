import { getRoomWithBookings, getRooms } from "../services/roomService";

/**
 * A loader which fetches the rooms based on checkInDate and checkOutDate.
 *
 * @param {Request} request - The current request object.
 * @returns {Promise<object[]>} A promise that resolves to the room objects.
 */
function roomsLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const query = {
    checkInDate: searchParams.get('checkInDate'),
    checkOutDate: searchParams.get('checkOutDate')
  };
  return getRooms(query);
}

/**
 * A loader which fetches all bookings for a specific room ID.
 *
 * @param {LoaderArgs} args - The loader arguments.
 * @param {string} args.params.id - The id of the room.
 * @returns {Promise<object>} A promise that resolves to the room object.
 */
function roomLoader({ params }) {
  return getRoomWithBookings(params.id);
}

export {
  roomsLoader,
  roomLoader
}