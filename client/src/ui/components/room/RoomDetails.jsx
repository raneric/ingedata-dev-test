import RoomCard from './RoomCard';
import { getRoom } from '../../../services/roomService';
import { useLoaderData } from 'react-router-dom';

function RoomDetails() {
  const room = useLoaderData();
  return (
    <>
      <RoomCard room={room} />
    </>
  )
}

export function loader({ params }) {
  return getRoom(params.id);
}

export default RoomDetails;
