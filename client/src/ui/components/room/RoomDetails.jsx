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
        <Calendar bookings={room.bookings} />
      </div>
    </div>
  )
}

export default RoomDetails;
