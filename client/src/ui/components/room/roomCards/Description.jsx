import roomCardsStyles from './roomCards.module.css';
import appLayoutStyles from '../../../appLayout.module.css';

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