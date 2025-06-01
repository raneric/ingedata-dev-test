import roomCardsStyles from './roomCards.module.css';

const { priceSection, price } = roomCardsStyles;

function PriceSection({ pricePerNight }) {
  return (
    <>
      <span className={priceSection}>
        <span className={price}> {pricePerNight} $</span> / night
      </span>
    </>
  )
}

export default PriceSection;