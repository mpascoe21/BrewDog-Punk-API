import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const SearchBar = (props) => {
  const { placeholder, handleSearchInput } = props;
  // const [searchInput, setSearchInput] = useState('Search');

  // const handleChange = (e) => {
  //   e.preventDefault ();
  //   setSearchInput(e.target.vale);
  // }

  // if (searchInput.length > 0) {
  //   beers.filter((beer) => {
  //     beer.name.match(searchInput);
  //   })
  // }

  const input = <input className={styles.searchInput} type="text" placeholder={placeholder} onInput={handleSearchInput} />;

  return (
    <div className={styles.searchContainer}>
      {/* <input type="text" onInput={handleChange} value={searchInput} /> */}
      {input}
      {/* <FontAwesomeIcon icon={ faMagnifyingGlass } /> */}
      <i className={styles.magnifyingGlass}><FontAwesomeIcon icon={ faMagnifyingGlass } /></i>
      
      
    </div>
  )
}

export default SearchBar;
