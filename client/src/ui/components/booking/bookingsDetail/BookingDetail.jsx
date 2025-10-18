//import styles from './bookingDetails.module.css';
import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";

import { format } from "date-fns";

import styles from "./bookingDetails.module.css";

import RoomCard from "../../room/roomCards/RoomCard";
import { Button } from "../../../core/Button";
import ConfirmationDialog from "../../dialog/ConfirmationDialog";
import Icon from "../../../core/Icon";
import calendar from "../../../../assets/icons/calendar.png";
import cart from "../../../../assets/icons/cart.png";

import AppError from "../../../../utils/AppError";
import { cancelBooking } from "../../../../services/userService";
import { DEFAULT_DATE_FORMAT, DUMMY_USER } from "../../../../utils/appConstant";

const { booking, bookingInfo, infoItem, price, cancelButton } = styles;

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

  /**
   * Booking cancel button handler which open Sets the confirmation showDialog and
   */
  const openDialogConfirmation = async () => {
    setShowDialog(true);
  };

  /**
   * Closes the confirmation dialog and launches the booking cancellation process by making a DELETE request to the API
   * It calls handleDialogCancel which performs the actual cancellation and navigates back to the user's bookings page.
   */
  const handleDialogOk = () => {
    setShowDialog(false);
    launchCancelationRequest();
  };

  /**
   * Cancels the booking and navigates back to the user's bookings page.
   *
   * It calls the cancelBooking function which makes a DELETE request to the API.
   * If the request fails, it throws an AppError.
   *
   * If the request succeeds, it navigates back to the user's bookings page.
   *
   * Note: This function is called when the user clicks 'No' in the confirmation dialog.
   */
  const launchCancelationRequest = () => {
    setShowDialog(false);
    setShowDialog(true);
    try {
      cancelBooking(userBooking.userId, userBooking.bookings[0].id);
    } catch (error) {
      throw new AppError(error);
    }
    navigate(`/user/${DUMMY_USER.id}/bookings`);
  };

  /**
   * Closes the confirmation dialog.
   *
   * This function is called when the user clicks 'No' in the confirmation dialog.
   */
  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && (
        <ConfirmationDialog
          handleDialogYes={handleDialogOk}
          handleDialogNo={closeDialog}
        />
      )}
      <div className={booking}>
        <RoomCard room={userBooking.bookings[0].Room} />
        <div className={bookingInfo}>
          <div className={infoItem}>
            <Icon iconFile={calendar} />
            <span>
              {" "}
              Check-in :{" "}
              {format(userBooking.bookings[0].checkInDate, DEFAULT_DATE_FORMAT)}
            </span>
          </div>
          <div className={infoItem}>
            <Icon iconFile={calendar} />
            <span>
              {" "}
              Checkout :{" "}
              {format(
                userBooking.bookings[0].checkOutDate,
                DEFAULT_DATE_FORMAT
              )}
            </span>
          </div>
          <div className={infoItem}>
            <Icon iconFile={cart} />
            <span>
              {" "}
              Price :{" "}
              <span className={price}> {userBooking.bookings[0].price} $</span>
            </span>
          </div>
          <Button onClick={openDialogConfirmation} className={cancelButton}>
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default BookingDetail;
