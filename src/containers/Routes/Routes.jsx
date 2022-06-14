import React from 'react';
import { Router } from '@reach/router';

import Main from '../Main';
import FavouriteBeers from '../FavouriteBeers';
import NotFound from '../../component/NotFound';


const Routes = (props) => {
  //const { beers, toggleFav, favouritedBeers, addToFav, favState } = props;
  const { beers, toggleFav } = props;
  return (
    <Router>
      {/* <Main path='/' beers={beers} toggleFav={toggleFav} addToFav={addToFav} favState={favState} />
      <FavouriteBeers path='favouritebeers' favouritedBeers={favouritedBeers} beers={beers} toggleFav={toggleFav}/> */}
      <Main path='/BrewDog-Punk-API' beers={beers} toggleFav={toggleFav} />
      <FavouriteBeers path='favouritebeers' beers={beers} toggleFav={toggleFav}/>
      <NotFound default />
    </Router>
  )
}

export default Routes;
