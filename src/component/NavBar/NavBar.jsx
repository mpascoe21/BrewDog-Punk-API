import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";

import SearchBar from "../SearchBar";
import FiltersList from "../FiltersList";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSearchInput, filterHighABVBeers, highABVBeers, filterClassicBeers, classicBeers} = props;


  const bars = (
    <i className={styles.bars} onClick={() => setIsOpen(!isOpen)}>
      <FontAwesomeIcon icon={faBars} />
    </i>
  );

  const menu = isOpen ? (
    <section className={styles.menu}>
      <SearchBar placeholder="Seach..." handleSearchInput={handleSearchInput} />
      <FiltersList filterHighABVBeers={filterHighABVBeers} highABVBeers={highABVBeers} filterClassicBeers={filterClassicBeers} classicBeers={classicBeers} />
    </section>
  ) : null;

  const largeScreenMenu = (
    //<section className={styles.largeScreenMenu}>
      <section className={styles.menu}>
        <SearchBar
          placeholder="Seach..."
          handleSearchInput={handleSearchInput}
        />
        <FiltersList filterHighABVBeers={filterHighABVBeers} highABVBeers={highABVBeers} filterClassicBeers={filterClassicBeers} classicBeers={classicBeers} />
      </section>
    //</section>
  );

  // const navigation = () => {
  //   if (window.screen.width < 992) {
  //     {bars}
  //     {menu}
  //   }
  // }

  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="BrewDog Logo" />
      {/* {navigation} */}
      {bars}
      {menu}
      {largeScreenMenu}
    </nav>
  );
};

export default NavBar;
