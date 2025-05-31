import premium_room from '../../../assets/premium_room.jpg';
import royal_room from '../../../assets/royal_room.jpg';
import simple_room from '../../../assets/simple_room.jpg';
import { Button } from '../../core/Button';
import Divider from '../../core/Divider';

import roomStyles from './room.module.css';
import appLayoutStyles from '../../appLayout.module.css';
import { useNavigate } from 'react-router';
import { ApiPath } from '../../../utils/appConstant';

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
  roomDetails,
  roomCard,
  category,
  description,
  priceSection,
  price,
  bookButton } = roomStyles

const {
  gridItemFullRow,
  grid,
  grid2Cols } = appLayoutStyles

/**
 * A card component for displaying a single room's details.
 *
 *
 * @param {Object} props.room - The room object.
 */
function RoomCard({ room }) {

  const navigate = useNavigate()

  let cardImageFile = null;

  switch (room.category) {
    case 'Simple':
      cardImageFile = simple_room
      break;
    case 'Premium':
      cardImageFile = premium_room;
      break;
    default:
      cardImageFile = royal_room;
  }

  /**
   * Handler for booking button click.
   *
   * Navigates to the booking page for the specified room. /booking/new?roomId=***
   *
   * @param {string} roomId - The id of the room to be booked.
   */
  const onBookClickHandler = (roomId) => {
    navigate(`${ApiPath.booking.new}?roomId=${roomId}`);
  }

  /**
   * Handler for when a room is clicked.
   *
   * Navigates to the room's details page. /room/:id
   *
   * @param {string} roomId - The id of the room.
   */
  function onRoomClickedHandler(e, roomId) {
    navigate(`${ApiPath.room.details}/${roomId}`);
  }

  return (
    <div
      className={roomCard}
      onClick={(e) => onRoomClickedHandler(e, room.id)} >

      <img className={cardImg} src={cardImageFile} />

      <div className={`${roomDetails} ${grid} ${grid2Cols}`}>

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
    </div>
  )
}


function PriceSection({ pricePerNight }) {
  return (
    <>
      <span className={priceSection}>
        <span className={price}> {pricePerNight} $</span> / one night
      </span>
    </>
  )
}

function Description({ description: descriptionText }) {

  return (
    <>
      <div className={`${description} ${gridItemFullRow}`}>
        <h4>Room description:</h4>
        <p >{descriptionText}</p>
      </div>
    </>
  )
}

/**
 * Amenities component renders a list of amenities available in the room.
 * 
 * @param {Object} props - The properties object.
 * @param {Array} props.amenities - A list of amenities available in the room.
 * 
 * The component renders a list as an unordered list.
 */
function Amenities({ amenities }) {
  return (
    <>
      <div className={amenities}>
        <span>Amenities :</span>
        <ul >
          {amenities.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </>
  )
}

export default RoomCard;
