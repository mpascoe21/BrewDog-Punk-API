import React, { useState } from 'react';
import styles from './FilterItem.module.scss';

const FilterItem = (props) => {
  const { name, filterBeers, isChecked } = props;

  // const [isChecked, setIsChecked] = useState(false);

  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  // }
  return (
    <li className={styles.filterItem}>
      {/* {name} */}
      <label className={styles.label} htmlFor={name}>{name}</label>
      <input className={styles.input} type="checkbox" name={name} onChange={filterBeers} />      
    </li>
  )
}

export default FilterItem
