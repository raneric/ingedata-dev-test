import styles from './core.module.css';

const {
  filterElement
} = styles

function DatePicker({ id, label, onChange, value }) {
  return (
    <>
      <div className={filterElement}>
        <label htmlFor={id}>{label}</label>
        <input
          onInput={onChange}
          id={id}
          value={value}
          type='date' />
      </div>
    </>
  )
}

export default DatePicker;
