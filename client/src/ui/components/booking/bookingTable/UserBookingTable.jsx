import { useLoaderData } from "react-router";
import { format } from "date-fns";
import { DEFAULT_DATE_FORMAT, DUMMY_USER } from "../../../../utils/appConstant";
import Icon from "../../../core/Icon";
import link from "../../../../assets/icons/link.png";
import Table from "../../table/Table";
import TableHead from "../../table/TableHead";
import TableBody from "../../table/TableBody";

/**
 * UserBookingTable component renders a table of a user's bookings.
 *
 * It receives booking data from a router loader which load all bookings with room information
 *
 * The table columns are: Room ID, Room category, Amenities, Check-in Date, Check-out Date, Price
 * and Link to details.
 */
function UserBookingTable() {
  const bookings = useLoaderData();

  return (
    <>
      <h2>Your Bookings</h2>
      <Table>
        <TableHead>
          <tr>
            <th>Room ID</th>
            <th>Room category</th>
            <th>Amenities</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th>Price ($)</th>
            <th>Link to details</th>
          </tr>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.roomId}</td>
              <td>{booking.Room.category}</td>
              <td>{booking.Room.amenities.join(" / ")}</td>
              <td>{format(booking.checkInDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{format(booking.checkOutDate, DEFAULT_DATE_FORMAT)}</td>
              <td>{booking.price} $</td>
              <td>
                <a
                  href={
                    `/user/${DUMMY_USER.id}/booking/${booking.id}` /* TODO: authentication and use real user id*/
                  }
                >
                  <Icon iconFile={link} />
                </a>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default UserBookingTable;
