//import styles from './bookingDetails.module.css';
import RoomCard from "../../room/roomCards/RoomCard"
import { useLoaderData } from "react-router";
import styles from "./bookingDetails.module.css";
import Icon from "../../../core/Icon";
import calendar from '../../../../assets/calendar.png';
import cart from '../../../../assets/cart.png';
import { format } from 'date-fns';
import { DEFAULT_DATE_FORMAT } from "../../../../utils/appConstant";

const { booking, bookingInfo, infoItem, price } = styles

function BookingDetail() {
  const userBooking = useLoaderData();
  console.log(userBooking);
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
      </div>
    </div>
  )
}

export default BookingDetail
