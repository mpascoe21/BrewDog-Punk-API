import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./component/NavBar";
import Routes from "./containers/Routes";

const App = () => {
  const [beers, setBeers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [highABVBeers, setHighABVBeers] = useState(false); //checked values for checkbox
  const [classicBeers, setClassicBeers] = useState(false);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterHighABVBeers = () => {
    //toggles checkbox
    setHighABVBeers(!highABVBeers);
  };

  const filterClassicBeers = () => {
    setClassicBeers(!classicBeers);
  };

  const filterBeersByPh = beers.filter((beer) => beer.ph < 3);

  //setFilter(!highABVBeers)
  // let firstName = 'Jake';
  // let lastName = 'Wood';

  // const fullName = (first, last) => {
  //   return console.log(`${first} ${last}`)
  // }

  // fullName(firstName, lastName)

  const getBeersByName = searchTerm ? `?beer_name=${searchTerm}` : "";
  const getHighABVBeers = highABVBeers ? `?abv_gt=6` : "";
  const getClassicBeers = classicBeers ? `?brewed_before=01-2010` : "";
  //console.log(getHighABVBeers);

  // const getBeerData = (fetchBeersByName) => {
  //   Promise.all([
  //     fetch(`https://api.punkapi.com/v2/beers${fetchBeersByName}`),
  //     fetch(`https://api.punkapi.com/v2/beers${getHighABVBeers}$`),
  //     fetch(`https://api.punkapi.com/v2/beers${getClassicBeers}`),
  //   ])

  //     .then((responses) => {
  //       return Promise.all(
  //         responses.map(function (response) {
  //           return response.json();
  //         })
  //       );
  //     })
  //     .then(
  //       (jsonResponse) => setBeers(jsonResponse)
  //       //console.log();
  //     );
  // };

  const getBeerData = (fetchBeersByName) => {
    fetch(`https://api.punkapi.com/v2/beers${fetchBeersByName}${getHighABVBeers}${getClassicBeers}`)
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse)
        //console.log();
      );
  };

  useEffect(() => {
    getBeerData(getBeersByName);
  }, [getBeersByName, getHighABVBeers, getClassicBeers]);

  console.log(beers);

  return (
    <>
      <section className={styles.navBarApp}>
        <NavBar
          handleSearchInput={handleSearchInput}
          filterHighABVBeers={filterHighABVBeers}
          highABVBeers={highABVBeers}
          filterClassicBeers={filterClassicBeers}
          classicBeers={classicBeers}
        />
      </section>
      <section className={styles.mainApp}>
        <Routes beers={beers} />
      </section>
    </>
  );
};

export default App;
