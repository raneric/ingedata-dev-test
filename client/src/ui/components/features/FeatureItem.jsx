import styles from "./features.module.css";

function FeatureItem({ imageSrc, title, description, className }) {
  const { cardImage, featureCard, itemTitle, descriptionStyle } = styles;

  return (
    <>
      <article className={`${className} ${featureCard}`}>
        <span className={itemTitle}>{`${title}`}</span>
        <img className={`${cardImage}`} src={imageSrc} />
        <span className={descriptionStyle}>{description}</span>
      </article>
    </>
  );
}

export default FeatureItem;
