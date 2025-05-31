import styles from './core.module.css';

function Button(props) {
  return (
    <>
      <button className={`${styles.simpleButton} ${props.className}`}>
        {props.children}
      </button>
    </>
  )
}

function IconButton(props) {
  return (
    <>
      <button className={styles.iconButton}>
        {props.children}
      </button>
    </>
  )
}

export {
  Button,
  IconButton
}
