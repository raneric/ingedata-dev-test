import roomCardsStyles from './roomCards.module.css';
import appLayoutStyles from '../../../appLayout.module.css';

/**
 * Amenities component renders a list of amenities available in the room.
 * 
 * @param {Object} props - The properties object.
 * @param {Array} props.amenities - A list of amenities available in the room.
 * 
 * The component renders a list as an unordered list.
 */
function Amenities({ amenities: amenitiesItems }) {
  return (
    <>
      <div className={`${roomCardsStyles.amenities} ${appLayoutStyles.gridItemFullRow}`}>
        <span>Amenities :</span>
        <ul >
          {amenitiesItems.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </div>
    </>
  )
}

export default Amenities;