import { getRoomWithBookings, getRooms } from "../services/roomService";

function roomsLoader({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const query = {
    checkInDate: searchParams.get('checkInDate'),
    checkOutDate: searchParams.get('checkOutDate')
  };
  return getRooms(query);
}

function roomLoader({ params }) {
  console.log(params);
  return getRoomWithBookings(params.id);
}

export {
  roomsLoader,
  roomLoader
}