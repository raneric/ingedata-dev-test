//import styles from './bookingDetails.module.css';
import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";

import { format } from 'date-fns';

import styles from "./bookingDetails.module.css";

import RoomCard from "../../room/roomCards/RoomCard"
import { Button } from "../../../core/Button";
import ConfirmationDialog from "../../dialog/ConfirmationDialog";
import Icon from "../../../core/Icon";
import calendar from '../../../../assets/calendar.png';
import cart from '../../../../assets/cart.png';

import AppError from "../../../../utils/AppError";
import { cancelBooking } from "../../../../services/userService";
import { DEFAULT_DATE_FORMAT, DUMMY_USER } from "../../../../utils/appConstant";


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

  const [showDialog, setShowDialog] = useState(false);

  const userBooking = useLoaderData();

  const handleCancel = async () => {
    setShowDialog(true);
  }

  const handleDialogOk = () => {
    setShowDialog(false);
    handleDialogCancel();
  }

  const handleDialogCancel = () => {
    setShowDialog(false);
    setShowDialog(true);
    try {
      cancelBooking(userBooking.userId, userBooking.bookings[0].id);
    } catch (error) {
      throw new AppError(error);
    } 
    navigate(`/user/${DUMMY_USER.id}/bookings`); 
  }

  return (
    <>
      {showDialog && <ConfirmationDialog handleDialogYes={handleDialogOk} handleDialogNo={handleDialogCancel} />}
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
    </>
  )
}

export default BookingDetail;
