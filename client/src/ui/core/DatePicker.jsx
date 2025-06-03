import styles from './core.module.css';

const {
  filterElement
} = styles

/**
 * A reusable date picker component.
 *
 * @param {{ id: string, label: string, onChange: (e: React.FormEvent<HTMLInputElement>) => void, value: string }} props
 * @returns {JSX.Element} The date picker component.
 */
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
