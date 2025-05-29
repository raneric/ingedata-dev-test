import premium from "../../../assets/premium.png";
import royal from '../../../assets/diamond.png';
import simple from '../../../assets/simple.png';
import Button from "../../core/Button";

import styles from './room.module.css';

/**
 * RoomCard component renders a card displaying room details.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.room - The room object containing details.
 * @param {string} props.room.id - The unique identifier for the room.
 * @param {string} props.room.category - The category of the room (e.g., 'Simple', 'Premium', 'Royal').
 * @param {string} props.room.description - A description of the room.
 * @param {number} props.room.pricePerNight - The price per night for the room.
 * @param {Array} props.room.amenities - A list of amenities available in the room.
 * 
 * The component displays an image based on the room category and includes details such as 
 * category, price, description, and amenities. It also includes a button to book the room.
 */

function RoomCard(props) {
  const { room } = props

  let cardImg = null;

  switch (room.category) {
    case 'Simple':
      cardImg = simple
      break;
    case 'Premium':
      cardImg = premium;
      break;
    default:
      cardImg = royal;
  }

  return (
    <div className={styles.roomCard}>
      <img className={styles.cardImg} src={cardImg} />
      <div className={styles.roomDetails}>
        <span className={styles.category}>{room.category} room {room.id}</span>
        <PriceSection pricePerNight={room.pricePerNight} />
        <Description description={room.description} />
        <Amenities amenities={room.amenities} />
        <Button>
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
