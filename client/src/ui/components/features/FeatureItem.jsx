import styles from "./features.module.css";
import layoutStyles from "../../appLayout.module.css";
function FeatureItem({ imageSrc, title, description, className, index }) {
  const { grid, grid2Cols } = layoutStyles;

  const {
    cardImage,
    leftImage,
    rightImage,
    featureCard,
    itemTitle,
    descriptionStyle,
  } = styles;

  return (
    <>
      <article className={`${className} ${featureCard} ${grid} ${grid2Cols}`}>
        <span className={itemTitle}>{`${title}`}</span>
        <img
          className={`${cardImage}  ${index < 2 ? leftImage : rightImage}`}
          src={imageSrc}
        />
        <span className={descriptionStyle}>{description}</span>
      </article>
    </>
  );
}

export default FeatureItem;
