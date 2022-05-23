import React from 'react';
import styles from './FiltersList.module.scss';
import FilterItem from '../FilterItem';

const FiltersList = (props) => {
  // const { filterHighABVBeers, highABVBeers, filterClassicBeers, classicBeers, filterAcidicBeers, acidicBeers } = props;

  const { name, filterHighABVBeers, highABVBeers, filterClassicBeers, classicBeers } = props;

  return (
    <ul className={styles.filterList}>
      < FilterItem name='High ABV ( > 6.0%)' filterBeers={filterHighABVBeers} isChecked={highABVBeers} />
      < FilterItem name='Classic Range' filterBeers={filterClassicBeers} isChecked={classicBeers} />
      < FilterItem name='Acidic (ph < 4)' />
      {/* < FilterItem name='Acidic (ph < 4)' acidicBeers={filterAcidicBeers} isChecked={acidicBeers} /> */}
    </ul>
  )
}

export default FiltersList
