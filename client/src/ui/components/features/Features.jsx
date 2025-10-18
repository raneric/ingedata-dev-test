import styles from "./features.module.css";
import layoutStyles from "../../appLayout.module.css";
import FeatureItem from "./FeatureItem";
import { FAKE_IMAGE_DATA } from "../../../utils/appConstant";

function Features() {
  const test = [1, 2, 3, 4];
  const { grid, grid3Cols, gridRowGapXLarge } = layoutStyles;
  const { featuresContainer, sectionTitle } = styles;
  return (
    <>
      <section
        className={`${featuresContainer} ${grid} ${grid3Cols} ${gridRowGapXLarge}`}
      >
        <h1 className={sectionTitle}>
          Features Section - to be implemented with dynamic data from backend
        </h1>
        {test.map((item, index) => (
          <FeatureItem
            imageSrc={FAKE_IMAGE_DATA[index]}
            title={item}
            index={index}
            description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
          />
        ))}
      </section>
    </>
  );
}

export default Features;
