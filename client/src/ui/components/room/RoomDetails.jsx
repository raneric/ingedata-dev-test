import { getRoom } from '../../../services/roomService';
import { useLoaderData } from 'react-router-dom';

import roomStyles from './room.module.css';

import Calendar from '../calendar/Calendar';
import Divider from '../../core/Divider';
import RoomLargeCard from './roomCards/RoomLargeCard';

const { roomDetails, roomAvailability, availabilityLabel } = roomStyles

function RoomDetails() {
  const room = useLoaderData();
  return (
    <div className={roomDetails}>
      <RoomLargeCard room={room} />
      <div className={roomAvailability}>
        <h3 className={availabilityLabel}>Availability</h3>
        <Divider />
        <Calendar />
      </div>
    </div>
  )
}

export function loader({ params }) {
  return getRoom(params.id);
}

export default RoomDetails;
