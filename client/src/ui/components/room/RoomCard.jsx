import premium_room from '../../../assets/premium_room.jpg';
import royal_room from '../../../assets/royal_room.jpg';
import simple_room from '../../../assets/simple_room.jpg';
import { Button } from '../../core/Button';
import Divider from '../../core/Divider';

import styles from './room.module.css';


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
function RoomCard(props) {
  const { room } = props

  let cardImg = null;

  switch (room.category) {
    case 'Simple':
      cardImg = simple_room
      break;
    case 'Premium':
      cardImg = premium_room;
      break;
    default:
      cardImg = royal_room;
  }

  return (
    <div className={styles.roomCard}>
      <img className={styles.cardImg} src={cardImg} />
      <div className={styles.roomDetails}>
        <span className={styles.category}>{room.category} room {room.id}</span>
        <PriceSection pricePerNight={room.pricePerNight} />
        <Divider className={styles.dv} />
        <Description description={room.description} />
        <Divider className={styles.dv}/>
        <Amenities amenities={room.amenities} />
        <Button className={styles.bookButton}>
          <span>Book now</span>
        </Button>
      </div>
    </div>
  )
}


function PriceSection(props) {
  return (
    <>
      <span className={styles.priceSection}>
        <span className={styles.price}> {props.pricePerNight} $</span> / one night
      </span>
    </>
  )
}

function Description(props) {
  return (
    <>
      <div className={styles.description}>
        <h4>Room description:</h4>
        <p >{props.description}</p>
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
function Amenities(props) {
  return (
    <>
      <div className={styles.amenities}>
        <span>Amenities :</span>
        <ul >
          {props.amenities.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </>
  )
}

export default RoomCard;
