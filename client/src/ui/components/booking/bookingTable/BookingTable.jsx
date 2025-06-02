import { useLoaderData } from 'react-router';
import styles from './bookingTable.module.css';
import { format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from '../../../../utils/appConstant';

const { tableWrapper, table } = styles;
function BookingTable() {

  const bookings = useLoaderData();

  return (
    <div className={tableWrapper}>
      <table className={table}>
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.roomId}</td>
              <td>{booking.user.name}</td>
              <td>{booking.user.email}</td>
              <td>{booking.user.phone}</td>
              <td>{format(booking.checkInDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{format(booking.checkOutDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{booking.price} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable
