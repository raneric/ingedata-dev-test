import styles from "./features.module.css";
import layoutStyles from "../../appLayout.module.css";
import FeatureItem from "./FeatureItem";
import { FAKE_FEATURES_DATA } from "../../../utils/appConstant";

function Features() {
  const { grid, grid3Cols, gridRowGapXLarge } = layoutStyles;
  const { featuresContainer, sectionTitle } = styles;
  return (
    <>
      <section
        className={`${featuresContainer} ${grid} ${grid3Cols} ${gridRowGapXLarge}`}
      >
        <h1 className={sectionTitle}>
          A Complete Hotel Experience, Comfort, Cuisine, relaxation & Luxury All
          in One Place
        </h1>
        {FAKE_FEATURES_DATA.map((item, index) => (
          <FeatureItem
            imageSrc={item.image}
            title={item.title}
            index={index}
            description={item.description}
          />
        ))}
      </section>
    </>
  );
}

export default Features;
