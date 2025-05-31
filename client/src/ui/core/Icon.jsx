import styles from './core.module.css';

function Icon({ iconFile }) {
  return (
    <>
      <img className={styles.icon} src={iconFile} alt="Icon" />
    </>
  )
}

export default Icon;
