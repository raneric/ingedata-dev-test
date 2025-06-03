import { Button } from '../../../core/Button';
import styles from './form.module.css';

import Calendar from '../../calendar/Calendar';
import RoomLargeCard from '../../room/roomCards/RoomLargeCard';

import { differenceInDays } from 'date-fns';
import { useState } from 'react';
import Divider from '../../../core/Divider';
import { useLoaderData, useNavigate } from 'react-router';
import { createBooking } from '../../../../services/userService';
import { AppPath, DUMMY_USER } from '../../../../utils/appConstant';
import NotificationDialog from '../../dialog/NotificationDialog';



const {
  bookButton,
  form,
  cart,
  price } = styles;

/**
 * Booking UI which let user to book a specific for a specific range of date
 *
 * It includes the room details, a calendar for selecting the booking dates,
 * the total price and a button to book the room.
 *
 * It handles the date selection and the booking submission.
 *
 */
function BookingForm() {
  const room = useLoaderData()[0];
  const navigate = useNavigate();
  const [bookedDaysNumber, setBookedDaysNumber] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  const [bookedDates, setBookedDates] = useState({});


  /**
   * Handler function which get selected dates range and count the number of days with the 
   * differenceInDays function start and the end date included that's why + 1 is added.
   * Calculate the price based on price per day and the number of days
   *
   * @param {Date} selectedStartDate - The start date of the booking
   * @param {Date} clickedDate - The date that has been clicked
   * @param {Date} selectedEndDate - The end date of the booking
   */
  const handleDateSelect = (selectedStartDate, clickedDate, selectedEndDate) => {
    if (!selectedStartDate && !selectedEndDate) return;

    let nbOfBookedDays = differenceInDays(clickedDate, selectedStartDate) + 1;

    setBookedDaysNumber(nbOfBookedDays);
    setTotalPrice(nbOfBookedDays * room.pricePerNight);

    setBookedDates({
      checkInDate: selectedStartDate,
      checkOutDate: selectedEndDate
    })
  }


  /**
   * Submits the booking by making a POST request to the API.
   * Shows the confirmation dialog if the response status is 200.
   */
  const handleSubmit = async () => {
    const res = await createBooking(DUMMY_USER.id, room.id, bookedDates, totalPrice);
    if (res.status === 200) {
      setShowDialog(true);
    }
  }

  /**
   * Handles the click event to close the dialog and navigate to the room listing page
   * when the request response is ok.
   */
  const handleClick = () => {
    setShowDialog(false);
    navigate(AppPath.room.all);
  }

  return (
    <>
      {showDialog &&
        <NotificationDialog
          message="Booked! ;)"
          onClick={handleClick}
        />}

      <div className={form} >
        <RoomLargeCard showBookButton={false} room={room} />
        <div className={cart}>
          <Calendar
            onRangeChange={handleDateSelect}
            bookings={room.Bookings}
            isRangeSelectable={true} />
          <Divider />
          <span>Total Booked days : {bookedDaysNumber}</span>
          <Divider />
          <span>Price : <span className={price}>{totalPrice} $</span> </span>
          <Divider />
          <Button
            onClick={handleSubmit}
            className={bookButton}
            isDisabled={totalPrice === 0}
          >
            <span>Book now</span>
          </Button>
        </div>
      </div >
    </>
  )
}

export default BookingForm;
