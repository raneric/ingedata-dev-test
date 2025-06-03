//import styles from './bookingDetails.module.css';
import RoomCard from "../../room/roomCards/RoomCard"
import { useLoaderData, useNavigate } from "react-router";
import styles from "./bookingDetails.module.css";
import Icon from "../../../core/Icon";
import calendar from '../../../../assets/calendar.png';
import cart from '../../../../assets/cart.png';
import { format } from 'date-fns';
import { AppPath, DEFAULT_DATE_FORMAT, DUMMY_USER } from "../../../../utils/appConstant";
import { Button } from "../../../core/Button";
import { cancelBooking } from "../../../../services/userService";
import AppError from "../../../../utils/AppError";

const { booking, bookingInfo, infoItem, price, cancelButton } = styles

/**
 * BookingDetail component renders the details of a user's booking.
 *
 * It includes the room details, check-in and check-out dates, and the price.
 * Allows the user to cancel the booking and navigates back to the user's bookings page.
 *
 */
function BookingDetail() {

  const navigate = useNavigate();

  const handleCancel = async (userId, bookingId) => {
    const confirmed = window.confirm('Are you sure you want to cancel this booking?'); //TODO: Add custom confirmation 
    if (!confirmed) return;
    try {
      cancelBooking(userId, bookingId);
    } catch (error) {
      throw new AppError(error);
    }
    navigate(`/user/${DUMMY_USER.id}/bookings`); // TODO: authentication and use real user id
  }


  const userBooking = useLoaderData();
  return (
    <div className={booking}>
      <RoomCard room={userBooking.bookings[0].Room} />
      <div className={bookingInfo}>
        <div className={infoItem}>
          <Icon iconFile={calendar} />
          <span> Check-in : {format(userBooking.bookings[0].checkInDate, DEFAULT_DATE_FORMAT)}</span>
        </div>
        <div className={infoItem}>
          <Icon iconFile={calendar} />
          <span> Checkout : {format(userBooking.bookings[0].checkOutDate, DEFAULT_DATE_FORMAT)}</span>
        </div>
        <div className={infoItem}>
          <Icon iconFile={cart} />
          <span> Price : <span className={price}> {userBooking.bookings[0].price} $</span></span>
        </div>
        <Button
          onClick={() => handleCancel(userBooking.id, userBooking.bookings[0].id)}
          className={cancelButton}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default BookingDetail;
