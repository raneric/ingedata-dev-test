import styles from "./features.module.css";
function Features() {
  return (
    <>
      <section className={styles.feature}>
        <h2 className={styles.title}>Amazing Feature</h2>
        <p className={styles.description}>
          This feature allows users to experience something truly remarkable.
        </p>
      </section>
    </>
  );
}

export default Features;
