import styles from './core.module.css';

function Divider({className}) {
  return (
    <>
      <hr className={`${styles.divider} ${className}`} />
    </>
  )
}

export default Divider;
