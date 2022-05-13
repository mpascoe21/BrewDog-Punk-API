import React from 'react';
import { Router } from '@reach/router';

import Main from '../Main';
import FavouriteBeers from '../FavouriteBeers';
import NotFound from '../../component/NotFound';


const Routes = (props) => {
  const { beers, toggleFav } = props;

  return (
    <Router>
      <Main path='/' beers={beers} toggleFav={toggleFav} />
      <FavouriteBeers path='favouritebeers' beers={beers} />
      <NotFound default />
    </Router>
  )
}

export default Routes
