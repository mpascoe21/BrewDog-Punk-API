import React, { useState } from 'react';
import CardList from '../../component/CardList/CardList';
import NotFound from '../../component/NotFound';
import styles from './FavouriteBeers.module.scss';

const FavouriteBeers = (props) => {
  //const { beers } = props;
  const { beers, toggleFav } = props;
  const [favouriteBeers, setFavouriteBeers] = useState(beers.filter(beer => beer.isFav))

  const removeFromFav = (beer) => {
    beer.isFav = false;
    setFavouriteBeers(beers.filter((beer) => beer.isFav));
  }

  const contentJsx = favouriteBeers.length ? (
    <CardList beers={favouriteBeers} toggleFav={removeFromFav} />
  ) : (
    <NotFound />
  );

  return (
    <section className={styles.fav} id='fav'>
      {contentJsx}
    </section>
  )
}

export default FavouriteBeers;
