import { Button } from "../../core/Button";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.heroesContent}>
          <h1 className={styles.slogan}>"Find Comfort, Wherever You Go."</h1>
          <span className={styles.description}>
            Easily compare, book, and manage hotel stays with just a few clicks.
            Comfort and convenience, wherever your journey takes you. From cozy
            hideaways to luxury escapes, find the stay that fits your story
            anytime, anywhere.
          </span>
          <Button className={styles.ctaButton} onClick={() => {}}>
            Book now
          </Button>
        </div>
      </section>
    </>
  );
}
export default Hero;
