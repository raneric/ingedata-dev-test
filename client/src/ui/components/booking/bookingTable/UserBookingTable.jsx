import { useLoaderData } from 'react-router';
import styles from './bookingTable.module.css';
import { format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../../utils/appConstant';
import Icon from '../../../core/Icon';
import link from '../../../../assets/link.png';

const { tableWrapper, table } = styles;
function UserBookingTable() {

  const bookings = useLoaderData();

  return (
    <div className={tableWrapper}>
      <table className={table}>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Room category</th>
            <th>Amenities</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Price ($)</th>
            <th>Link to details</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.roomId}</td>
              <td>{booking.Room.category}</td>
              <td>{booking.Room.amenities.join(' / ')}</td >
              <td>{format(booking.checkInDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{format(booking.checkOutDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{booking.price} $</td>
              <td><a href={`/user/1/booking/${booking.id}` /* TODO: authentication and use real user id*/}>
                <Icon iconFile={link} />
              </a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserBookingTable
