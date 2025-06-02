import styles from './core.module.css';

const {
  select
} = styles

function Select({ data, selectedIndex, onChange }) {
  return (
    <>
      <select
        onChange={onChange}
        defaultValue={data[selectedIndex]}
        id="filter"
        className={select}>
        {data.map((element, index) =>
          <option
            key={index}
            value={element}>
            {element}
          </option>)}
      </select>
    </>
  )
}

export default Select;
