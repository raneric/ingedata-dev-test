import { useLoaderData } from 'react-router-dom';

import roomStyles from './room.module.css';

import Calendar from '../calendar/Calendar';
import Divider from '../../core/Divider';
import RoomLargeCard from './roomCards/RoomLargeCard';

const { roomDetails, roomAvailability, availabilityLabel } = roomStyles

/**
 * RoomDetails component renders the details of a room with all booked dates displayed in a calendar.
 *
 * The room details are obtained from the router dom loader.
 *
 * @returns {JSX.Element} A JSX element containing the room details and its availability.
 */
function RoomDetails() {
  const room = useLoaderData();
  return (
    <div className={roomDetails}>
      <RoomLargeCard showBookButton={true} room={room[0]} />
      <div className={roomAvailability}>
        <h3 className={availabilityLabel}>Availability</h3>
        <Divider />
        <Calendar bookings={room[0].Bookings} />
      </div>
    </div>
  )
}

export default RoomDetails;
