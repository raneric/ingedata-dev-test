import roomCardsStyles from './roomCards.module.css';
import appLayoutStyles from '../../../appLayout.module.css';

/**
 * Description component renders a section displaying the room description.
 *
 * @param {string} description - The description of the room.
 *
 * @returns {JSX.Element} A JSX element containing the description section.
 */
function Description({ description: descriptionText }) {
  return (
    <>
      <div className={`${roomCardsStyles.description} ${appLayoutStyles.gridItemFullRow}`}>
        <h4>Room description:</h4>
        <p >{descriptionText}</p>
      </div>
    </>
  )
}

export default Description;