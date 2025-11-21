import styles from './core.module.css';

const { simpleButton, iconButton } = styles;

function Button({ className, children, onClick, isDisabled }) {
  return (
    <>
      <button
        disabled={isDisabled}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) {
            onClick();
          }
        }}
        className={`${simpleButton} ${className}`}
      >
        {children}
      </button>
    </>
  );
}

function IconButton({ children, className, onClick }) {
  return (
    <>
      <button onClick={onClick} className={`${iconButton} ${className}`}>
        {children}
      </button>
    </>
  );
}

export { Button, IconButton };
