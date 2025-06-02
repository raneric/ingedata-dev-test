import { Button } from '../../../core/Button';
import Divider from '../../../core/Divider';

import roomCardsStyles from './roomCards.module.css';
import appLayoutStyles from '../../../appLayout.module.css';
import { useNavigate } from 'react-router';
import { AppPath } from '../../../../utils/appConstant';
import PriceSection from './PriceSection';
import Description from './Description';
import Amenities from './Amenities';

import getRoomPicture from '../../../../utils/getRoomPicture.js';
/**
 * A card component for displaying a single room's details.
 *
 * The component displays an image of the room, the room's category, id, price per night,
 * description, amenities, and a "Book now" button.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.room - The room object.
 * @param {string} props.room.id - The id of the room.
 * @param {string} props.room.category - The category of the room.
 * @param {string} props.room.description - The description of the room.
 * @param {Array<string>} props.room.amenities - The amenities available in the room.
 * @param {number} props.room.pricePerNight - The price per night of the room.
 */

const {
  cardImg,
  roomInfo,
  roomCard,
  category,
  bookButton } = roomCardsStyles;

const {
  gridItemFullRow,
  grid,
  grid2Cols,
  gridItemCenter,
  gridRowGapSmall } = appLayoutStyles;

/**
 * A card component for displaying a single room's details.
 *
 *
 * @param {Object} props.room - The room object.
 */
function RoomCard({ room }) {

  const navigate = useNavigate()

  const cardImageFile = getRoomPicture(room.category);

  /**
   * Handler for booking button click.
   *
   * Navigates to the booking page for the specified room. /booking/new?roomId=***
   *
   * @param {string} roomId - The id of the room to be booked.
   */
  const onBookClickHandler = (roomId) => {
    navigate(`${AppPath.booking.new}?roomId=${roomId}`);
  }

  /**
   * Handler for when a room is clicked.
   *
   * Navigates to the room's details page. /room/:id
   *
   * @param {string} roomId - The id of the room.
   */
  function onRoomClickedHandler(e, roomId) {
    navigate(`${AppPath.room.details}/${roomId}`);
  }

  return (
    <article
      className={`${roomCard}  ${gridItemCenter}`}
      onClick={(e) => onRoomClickedHandler(e, room.id)} >

      <img className={cardImg} src={cardImageFile} />

      <div className={`${roomInfo} ${grid} ${grid2Cols} ${gridRowGapSmall}`}>

        <span className={category}>{room.category} room {room.id}</span>

        <PriceSection pricePerNight={room.pricePerNight} />

        <Divider className={gridItemFullRow} />

        <Description description={room.description} />

        <Divider className={gridItemFullRow} />

        <Amenities amenities={room.amenities} />

        <Button onClick={() => onBookClickHandler(room.id)}
          className={bookButton}
        >
          <span>Book now</span>
        </Button>
      </div>
    </article>
  )
}

export default RoomCard;
