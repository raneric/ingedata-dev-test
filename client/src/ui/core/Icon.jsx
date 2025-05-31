import styles from './core.module.css';

function Icon(props) {
  return (
    <>
      <img className={styles.icon} src={props.iconFile} alt="Icon"/>
    </>
  )
}

export default Icon;
