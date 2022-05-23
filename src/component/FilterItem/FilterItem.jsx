import React from 'react';
import styles from './FilterItem.module.scss';

const FilterItem = (props) => {
  const { name, filterBeers } = props;

  // const [isChecked, setIsChecked] = useState(false);

  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  // }
  return (
    <li className={styles.filterItem}>
      <label data-testid='label' className={styles.label} htmlFor={name}>{name}</label>
      <input  data-testid='checkbox' className={styles.input} type="checkbox" name={name} onChange={filterBeers} />      
    </li>
  )
}

export default FilterItem
