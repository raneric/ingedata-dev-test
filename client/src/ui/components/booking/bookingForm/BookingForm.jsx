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

  const handleSubmit = async () => {
    const res = await createBooking(DUMMY_USER.id, room.id, bookedDates, totalPrice);
    if (res.status === 200) {
      setShowDialog(true);
    }
  }

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
