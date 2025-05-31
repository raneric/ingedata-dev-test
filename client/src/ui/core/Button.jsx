import styles from './core.module.css';

const {
  simpleButton,
  iconButton } = styles

function Button({ className, children, onClick }) {

  return (
    <>
      <button onClick={(e) => {
        e.stopPropagation();
        onClick();
      }
      } className={`${simpleButton} ${className}`}>
        {children}
      </button>
    </>
  )
}

function IconButton({ children }) {
  return (
    <>
      <button className={iconButton}>
        {children}
      </button>
    </>
  )
}

export {
  Button,
  IconButton
}
