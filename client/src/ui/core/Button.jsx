import styles from './core.module.css';

function Button(props) {
  return (
    <>
      <button className={styles.bookButton}>
        {props.children}
      </button>
    </>
  )
}

export default Button
