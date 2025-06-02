import { useNavigate, useSearchParams } from 'react-router-dom';
import { IconButton } from '../../core/Button.jsx';

import search from '../../../assets/search.png';
import Icon from '../../core/Icon.jsx';

import styles from './filter.module.css';
import { AppPath } from '../../../utils/appConstant.js';
import { useState } from 'react';

const {
  filter,
  filterElement
} = styles

/**
 * A SearchFilter component used to filter available rooms within a dates.
 *
 * @returns {React.ReactElement} A SearchFilter component.
 */
function SearchFilter() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [checkInDate, setCheckInDate] = useState(searchParams.get("checkInDate") || '');
  const [checkOutDate, setCheckOutDate] = useState(searchParams.get("checkOutDate") || '');

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'checkIn') {
      setCheckInDate(value);
    } else if (id === 'checkOut') {
      setCheckOutDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${AppPath.room.all}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
  }

  return (
    <form onSubmit={handleSubmit} method='get' className={filter}>
      <div className={filterElement}>
        <label htmlFor='checkIn'>Check In :</label>
        <input value={checkInDate}
          onInput={handleChange}
          id='checkIn'
          type='date' />
      </div>
      <div className={filterElement}>
        <label htmlFor='checkOut'>Check Out :</label>
        <input
          value={checkOutDate}
          onInput={handleChange}
          id='checkOut'
          type='date' />
      </div>
      <IconButton>
        <Icon iconFile={search} />
        <span >Search</span>
      </IconButton>
    </form >
  )
}

export default SearchFilter;
