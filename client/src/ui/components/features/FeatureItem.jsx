import styles from "./features.module.css";
import layoutStyles from "../../appLayout.module.css";
function FeatureItem({ imageSrc, title, description, className, index }) {
  const { grid, grid2Cols, gridRowGapLarge } = layoutStyles;
  const { cardImage, leftImage, rightImage, featureCard } = styles;
  return (
    <>
      <article
        className={`${className} ${featureCard} ${grid} ${grid2Cols} ${gridRowGapLarge}`}
      >
        <img
          className={`${cardImage}  ${index < 2 ? leftImage : rightImage}`}
          src={imageSrc}
        />
        <span>{`${title}`}</span>
        <span>{description}</span>
      </article>
    </>
  );
}

export default FeatureItem;
