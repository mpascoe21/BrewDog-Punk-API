import React, { useState } from "react";
import { Link } from '@reach/router';
import styles from "./NavBar.module.scss";

import logo from "../../assets/images/logo.png";

import SearchBar from "../SearchBar";
import FiltersList from "../FiltersList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as lightFaHeart } from "@fortawesome/free-regular-svg-icons";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    toggleFav,
    handleSearchInput,
    filterHighABVBeers,
    highABVBeers,
    filterClassicBeers,
    classicBeers,
  } = props;

  let windowWidth = window.outerWidth;
  //console.log(windowWidth);

  const favourites =
    windowWidth >= 992 ? (
      <Link to='favouritebeers' className={styles.favourites} >
        <label className={styles.heartLabel} htmlFor="">Favourites</label>
        <i className={styles.heart}>
          <FontAwesomeIcon icon={solidFaHeart} />
        </i>
      </Link>
    ) : (      
      <Link to='favouritebeers' >
        <FontAwesomeIcon icon={solidFaHeart} />
      </Link>
    );

  const bars = (
    <i className={styles.bars} onClick={() => setIsOpen(!isOpen)}>
      <FontAwesomeIcon icon={faBars} />
    </i>
  );

  const menu = isOpen ? (
    <section className={styles.menu}>
      <SearchBar placeholder="Seach..." handleSearchInput={handleSearchInput} />
      <FiltersList
        filterHighABVBeers={filterHighABVBeers}
        highABVBeers={highABVBeers}
        filterClassicBeers={filterClassicBeers}
        classicBeers={classicBeers}
      />
    </section>
  ) : null;

  const largeScreenMenu =
    windowWidth >= 992 ? (
      //<section className={styles.largeScreenMenu}>
      <section className={styles.menu}>
        <SearchBar
          placeholder="Seach..."
          handleSearchInput={handleSearchInput}
        />
        <FiltersList
          filterHighABVBeers={filterHighABVBeers}
          highABVBeers={highABVBeers}
          filterClassicBeers={filterClassicBeers}
          classicBeers={classicBeers}
        />
      </section>
    ) : //</section>
    null;

  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="BrewDog Logo" />
      {favourites}
      {bars}
      {menu}
      {largeScreenMenu}
    </nav>
  );
};

export default NavBar;
