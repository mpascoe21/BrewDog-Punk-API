import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./component/NavBar";
import Routes from "./containers/Routes";

const App = () => {
  const [beers, setBeers] = useState([]);
  // const [favouriteBeers, setFavouriteBeers] = useState([]);
  // const [favState, setFavState] = useState();
  // const [isFav, setIsFav] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [highABVBeers, setHighABVBeers] = useState(false); //checked values for checkbox
  const [classicBeers, setClassicBeers] = useState(false);
  // const [acidicBeers, setAcidicBeers] = useState(false);

  // const toggleFav = (beer) => {
  //   beer.isFav = !beer.isFav;
  // };

  // //  const handleFavClick = (e) => {
  // //   e.stopPropagation();
  // //   toggleFav(props.beer);
  // //   setFavState(!isFav);
  // // };

  // const addToFav = (favouritedBeer) => {
  //   setFavState(true)
  //   console.log("beer favourited")
  //   favouriteBeers.push(favouritedBeer)
  //   console.log(favouriteBeers);

  //   // const handleFavClick = (e) => {
  //   //   e.stopPropagation();
  //   //   toggleFav(beer);
  //   //   setFavState(!isFav);
  //   //   return handleFavClick
  //   // };

  // }

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

  // const filterAcidicBeers = () => {
  //   setAcidicBeers(!acidicBeers);
  // };

  // const filterBeersByPh = beers.filter((beer) => beer.ph < 3);
  const toggleFav = (beer) => {
    beer.isFav = !beer.isFav;
  }
  
  //setFilter(!highABVBeers)
  // let firstName = 'Jake';
  // let lastName = 'Wood';

  // const fullName = (first, last) => {
  //   return console.log(`${first} ${last}`)
  // }

  // fullName(firstName, lastName)

  const getBeersByName = searchTerm ? `&beer_name=${searchTerm}` : ""; // & enables several api calls
  const getHighABVBeers = highABVBeers ? `&abv_gt=6` : "";
  const getClassicBeers = classicBeers ? `&brewed_before=01-2010` : "";
  // const getAcidicBeers = beers.filter((beer) => beer.ph < 4);
  // console.log(getAcidicBeers);
  // console.log(getHighABVBeers);

  // ?per_page=80 addded to include the '?' in the call
  const getBeerData = (fetchBeersByName) => {
    fetch(
      `https://api.punkapi.com/v2/beers?per_page=80${fetchBeersByName}${getHighABVBeers}${getClassicBeers}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => setBeers(jsonResponse));
  };

  // Adds isFav to each beer
  beers.forEach((beer) => {
    beer.isFav = false;
  });

  useEffect(() => {
    getBeerData(getBeersByName);
  }, [getBeersByName, getHighABVBeers, getClassicBeers]);

  console.log(beers);

  //console.log(beers);

  return (
    <>
      <section className={styles.navBarApp}>
        <NavBar
          toggleFav={toggleFav}
          handleSearchInput={handleSearchInput}
          filterHighABVBeers={filterHighABVBeers}
          highABVBeers={highABVBeers}
          filterClassicBeers={filterClassicBeers}
          classicBeers={classicBeers}
          // filterAcidicBeers={filterAcidicBeers}
          // acidicBeers={acidicBeers}
          // favState={favState}
        />
      </section>
      <section className={styles.mainApp}>
        <Routes
          beers={beers}
          toggleFav={toggleFav}
          // favouritedBeers={favouriteBeers}
          // addToFav={addToFav}
          // favState={favState}
        />
      </section>
    </>
  );
};

export default App;
