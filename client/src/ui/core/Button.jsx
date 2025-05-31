import styles from './core.module.css';

function Button({ className, children, onClick }) {
  return (
    <>
      <button onClick={(e) => {
        e.stopPropagation();
        onClick();
      }
      } className={`${styles.simpleButton} ${className}`}>
        {children}
      </button>
    </>
  )
}

function IconButton({ children }) {
  return (
    <>
      <button className={styles.iconButton}>
        {children}
      </button>
    </>
  )
}

export {
  Button,
  IconButton
}
